import { useContext, useState, updateState, setState, useEffect } from "react";
import AppContext from "../components/AppContext";
import { useRouter } from "next/router";
import { createHash } from "crypto";
import lit from "../lib/lit";
import ceramic from "../lib/ceramic";
import { create } from "ipfs-http-client";
import * as dotenv from 'dotenv';

dotenv.config();

const projectId = '';
const projectSecret = '';
const directoryStreamID = 'kjzl6cwe1jw149n2kupgcy4c8delsbvcwi5u3gjs8mg2n2ev3nqaect16chqi1y';

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

function IpfsLink(props) {
  return (
    <div className={props.show ? "visible" : "invisible"}>
      <p>Uploaded encrypted file to IPFS</p>
      <p>URL: {props.url} </p>
    </div>
  );
}

function MarketTable(props) {
  const [refreshState, setRefreshState] = useState(0);
  const context = useContext(AppContext);  
  const router = useRouter();

  function editData(index) {
    var document = {
      name: props.names[index],
      description: props.descriptions[index],
      price: props.prices[index],
      streamId: props.ids[index],
      url: props.urls[index],
      dataOwner: props.dataOwners[index],
      dataId: props.dataIds[index],
    };

    context.setSession({document: document});
    router.push('/edit/');
  }
  
  function deleteData(id) {
    console.log("deleteData id: ", id);
    ceramic.deleteFromDocument(id, directoryStreamID);
    refresh();
  }
  
  function refresh() {
    console.log("MarketTable refresh");
    setRefreshState(refreshState + 1);
    // empty arrays?
  }

  return (
    <div onLoad={refresh}>
      <p>My data:</p>
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
        {
          props.ids.map((value, i) => {
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
              <button onClick={() => deleteData(props.ids[i])}>Delete</button>
              </td>
              <td>
              <button onClick={() => editData(i)}>Edit</button>
              </td>
            </tr>)
        })}
        </tbody>
      </table>
    </div>
  );
}

export default function HomePage() {
  const [file, setFile] = useState(null);
  const [decryptedFileArr, setDecryptedFileArr] = useState([]);
  const [dataHash, setDataHash] = useState([]);
  const [url, setURL] = useState('');
  
  const [dataArray, setDataArray] = useState(new Array());
  const [refreshState, setRefreshState] = useState("");
  
  const [prices, setPrices] = useState([]);
  const [ids, setIDs] = useState([]);
  const [names, setNames] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [urls, setUrls] = useState([]);
  const [dataOwners, setDataOwners] = useState([]);
  const [dataIds, setDataIds] = useState([]);
  const [encryptedKeys, setEncryptedKeys] = useState([]);

  const context = useContext(AppContext);
  const router = useRouter();


  //let prices = []; 

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
        encryptedKeys[i] = d.content.encryptedKey;
      }
      
      setRefreshState("done");  // check if necessary
    }

    fetchData().catch(console.error);
  }, []);

  function retrieveFile(e) {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);

    reader.onloadend = () => {
      setFile(Buffer(reader.result));
    };
    
    e.preventDefault();
  }
  
  async function executeLitAction(code) {
    // function for testing lit actions
    const streamID = 'kjzl6cwe1jw14a3f5ajbkb6s28w52shytb0u57k9z8wsnbcr3js5b31ksv8ab00';
    const price = '30000'
    const dataId = 'ca58b5dd05aa0edb0790d0aa14d4104dc06ca182280598f8e17483a37839dc15';
    const dataOwner = '0xc4b57bb0d322f06f20669f3ae09028464942d8fb'; 
    
    return await lit.authorizePayment2(price, dataId, dataOwner, streamID, code);
  }
  
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const f = file.toString();
      
      /*const authorization = await executeLitAction(f);
      const sig = authorization.signatures['sig1'].signature;
      console.log("logs: ", authorization.logs)
      console.log("got signature! --> ", sig);
      return;*/ // <-- code block to directly test lit action code
      
      const hash_ = createHash("sha256").update(f).digest("hex"); 
      const encrypted = await lit.encryptFile(f, hash_);
      const created = await client.add(encrypted.encryptedString);
          
      //const created = await client.add(f); // <-- provisionally used to upload lit actions to IPFS directly
      
      const ipfsUrl = `https://ipfs.io/ipfs/${created.path}`;

      //const ipfsUrl = 'Not uploaded';
      setURL(ipfsUrl);
      
      // return; 
      // lit.litNodeClient.getWalletSig() // get authSig address

      const content = {
        dataId: hash_,
        name: e.target.dataName.value,
        description: e.target.dataDescription.value,
        price: e.target.dataPrice.value,
        dataOwner: encrypted.litAuth.address,
        url: ipfsUrl,
        IpfsPath: created.path,
        encryptedKey: encrypted.encryptedSymmetricKey,
      }

      const doc = await ceramic.createDocument(content);
      await ceramic.appendToDocument(directoryStreamID, doc.id.toString());
      
      refresh();
      
    } catch (error) {
      console.log(error.message);
    }
  }

  function refresh() {
    console.log("Homepage refresh");
    setRefreshState(refreshState == 0 ? 1 : 0);
  }

  return (
    <div onLoad={refresh}>
      <Header title="Lit Protocol PoC" />
      <br></br>
      <MarketTable ids={ids} names={names} descriptions={descriptions} urls={urls} prices={prices} dataOwners={dataOwners} dataIds={dataIds}></MarketTable>
      <p>Submit a file to store encrypted on IPFS</p>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td><label>File:</label></td>
              <td><input type="file" onChange={retrieveFile} required /></td>
            </tr>
            <tr>
              <td><label>Name: </label></td>
              <td><input id="dataName" type="text" /></td>
            </tr>
            <tr>
              <td><label>Description: </label></td>
              <td><input id="dataDescription" type="text" /></td>
            </tr>
            <tr>
              <td><label>Price (MCK): </label></td>
              <td><input id="dataPrice" type="text" /></td>
            </tr>
            <tr>
              <td><button type="submit" className="button">Submit</button></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </form>
      <IpfsLink show={url? true : false} url={url} />
      <button
        onClick={() => { router.push('/purchase') }}>Marketplace view</button> 
    </div>
  );
}
