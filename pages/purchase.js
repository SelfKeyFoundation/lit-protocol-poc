import AppContext from "../components/AppContext";
import { useContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import lit from "../lib/lit";
import { tokenABI, paymentsABI } from "../lib/abis";
import ceramic from "../lib/ceramic";
//import ipfs from "../lib/ipfs";
import { create } from "ipfs-http-client";
import { useAccount, useConnect, useDisconnect, useBalance, useContractWrite, usePrepareContractWrite } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';

const directoryStreamID = 'kjzl6cwe1jw149n2kupgcy4c8delsbvcwi5u3gjs8mg2n2ev3nqaect16chqi1y';
const projectId = '';
const projectSecret = '';

const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

const client = create({
  host: 'ipfs.infura.io',
  port: 5001,
  protocol: 'https',
  headers: {
      authorization: auth,
  },
});

function Header(props) {
  return(<h1>{props.title}</h1>);
}
//
function MarketTable(props) {  
  //const [paymentSignature, setPaymentSignature] = useState("");
  const context = useContext(AppContext);
  const router = useRouter(); 
  
  async function authorizePayment(price, dataId, dataOwner, streamID) {    
    const authorization = await lit.authorizePayment(price, dataId, dataOwner, streamID);
    const sig = authorization.signatures['sig1'].signature;
    //setPaymentSignature(sig);
    //approveCall();

    console.log("authorizing signature for data...");
    console.log("amount: ", price);
    console.log("data ID: ", "0x" + dataId);
    console.log("data owner: ", dataOwner);
    console.log("stream ID: ", streamID);
    console.log("payment signature: ", sig);
  }

  async function decryptFile(url, encryptedKey, dataId) {
    console.log("decrypting file...");
    console.log("URL: ", url);
    console.log("encrypted key: ", encryptedKey);
    console.log("dataId: ", dataId);
    
    const fetchResult = await fetch(url);
    const encryptedData = await fetchResult.blob();

    /*for await (const buf of client.cat(path)) {
      //data = new TextDecoder().decode(buf);
      console.log("the data is ", new TextDecoder().decode(buf));
    }*/
    
    const decrypted = await lit.decryptFile(encryptedData, encryptedKey, dataId); // encryptedData.toString()?
    console.log("decrypted file!");
    console.log(JSON.stringify(decrypted)); 
  }
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>URL</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
      { props.ids.map((value, i) => {
          return(
          <tr key={i}>
            <td>
            {props.names[i]}
            </td>
            <td>
            {props.descriptions[i]}
            </td>
            <td>
            {props.prices[i]}
            </td>
            <td>
            {props.urls[i]}
            </td>
            <td>
              <button onClick={() => authorizePayment(props.prices[i], props.dataIds[i], props.dataOwners[i], props.ids[i])}>authorize payment</button>
            </td>
            <td>
              <button onClick={() => decryptFile(props.urls[i], props.encryptedKeys[i], props.dataIds[i])}>decrypt file</button>
            </td>
          </tr>)
        }) }
        </tbody>
      </table>
    </div>
  );
}

export default function PurchasePage() {
  const context = useContext(AppContext);
  const [prices, setPrices] = useState([]);
  const [ids, setIDs] = useState([]);
  const [names, setNames] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [urls, setUrls] = useState([]);
  const [dataOwners, setDataOwners] = useState([]);
  const [dataIds, setDataIds] = useState([]);
  const [IpfsPaths, setIpfsPaths] = useState([]);
  const [encryptedKeys, setEncryptedKeys] = useState([]);
  const [refreshState, setRefreshState] = useState("");

  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  const { disconnect } = useDisconnect();

  const balance = useBalance({
    address: address,
    token: '0x58215371F0336e8b25363f2ac521712c3213047D',
  });

  const { config } = usePrepareContractWrite({
    address: '0x58215371F0336e8b25363f2ac521712c3213047D',
    abi: tokenABI,
    functionName: 'approve',
    args: ['0x85be769afFa3A4324Aa06CAEe830B0A5a8cf6199', '50000']  // amount shouldn't be hardcoded
  });

  const { write } = useContractWrite(config);
  const approveCall = write;
  
  useEffect(() => {
    const fetchData = async () => {
      const did = await ceramic.authenticateCeramic();
      const directory = await ceramic.loadDocument(directoryStreamID);
      
      for(var i = 0; i < directory.content.documents.length; i++) {
        const id = directory.content.documents[i];
        const d = await ceramic.loadDocument(id);
        
        prices[i] = d.content.price;
        ids[i] = id;
        names[i] = d.content.name;
        descriptions[i] = d.content.description;
        urls[i] = d.content.url;
        dataOwners[i] = d.content.dataOwner;
        dataIds[i] = d.content.dataId;
        encryptedKeys[i] =  d.content.encryptedKey;
        IpfsPaths[i] = d.content.IpfsPath;
      }
      setRefreshState("done");
    }

    fetchData().catch(console.error);
  }, []);

  /*const { config: callConfig2 } = usePrepareContractWrite({
    address: '0x85be769afFa3A4324Aa06CAEe830B0A5a8cf6199',
      abi: paymentsABI,
      functionName: 'makePayment',
      //args:['50000', "0x" + context.session.dataHash, '0x8C97546e0Df32fB1A2440f4F3375C0E14b0e45a7', paymentSignature]
      args:['50000', "0x" + context.dataHash, '0x8C97546e0Df32fB1A2440f4F3375C0E14b0e45a7', paymentSignature]
  });
  const { write: paymentCall } = useContractWrite(callConfig2);*/
  //console.log("callConfig2: ", JSON.stringify(callConfig2));

    return (
      <div>
        <div>
          <Header title="Lit Protocol PoC: Purchase view" />
          {isConnected? <div>Connected to {address} <button onClick={() => disconnect()}>Disconnect</button><p>Token balance: {balance.data.formatted} {balance.symbol}</p></div> : <button onClick={() => connect()}>Connect Wallet</button> } 
        </div>
        <MarketTable ids={ids} names={names} descriptions={descriptions} urls={urls} prices={prices} dataOwners={dataOwners} dataIds={dataIds} encryptedKeys={encryptedKeys}></MarketTable>
      </div>
    );
}
