import AppContext from "../components/AppContext";
import { useContext, useState } from "react";
import lit from "../lib/lit";

import { useAccount, useConnect, useDisconnect, useBalance, useContractWrite, usePrepareContractWrite } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
 

const tokenABI = [{"inputs":[{"internalType":"uint256","name":"initialSupply","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}];
const paymentsABI = [{"inputs":[{"internalType":"address","name":"tokenAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"signer","type":"address"}],"name":"addSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balances","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"dataID","type":"bytes32"},{"internalType":"address","name":"dataOwner","type":"address"}],"name":"getDataHash","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"bytes32","name":"msgHash","type":"bytes32"}],"name":"getSignedMessage","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"dataID","type":"bytes32"},{"internalType":"address","name":"dataOwner","type":"address"}],"name":"getSignedMessage2","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"dataID","type":"bytes32"},{"internalType":"address","name":"dataOwner","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"getSigner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"dataID","type":"bytes32"},{"internalType":"address","name":"dataOwner","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"getSigner2","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isSigner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32","name":"dataID","type":"bytes32"},{"internalType":"address","name":"dataOwner","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"makePayment","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"username","type":"address"},{"internalType":"bytes32","name":"dataID","type":"bytes32"}],"name":"paymentWasMade","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"payments","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"dataOwner","type":"address"},{"internalType":"uint256","name":"date","type":"uint256"},{"internalType":"uint256","name":"nonce","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"removeSigner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"signers","outputs":[{"internalType":"bool","name":"enabled","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawEarnings","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"beneficiary","type":"address"},{"internalType":"bytes","name":"signature","type":"bytes"}],"name":"withdrawFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawalNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

function Header(props) {
  return(<h1>{props.title}</h1>);
}

export default function PurchasePage() {
  const context = useContext(AppContext);

  const [paymentSignature, setPaymentSignature] = useState("0xb6efe891bf47fb157d15e79b1ab6dcd80966d2f5c57f1d0c93119a8689b5ea853ed8ad7e2b0c7735215ee655f15348b5b55029fa56c1f0dd4d1024246a822fd91c");

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

  /*const { config: callConfig2 } = usePrepareContractWrite({
    address: '0x85be769afFa3A4324Aa06CAEe830B0A5a8cf6199',
      abi: paymentsABI,
      functionName: 'makePayment',
      //args:['50000', "0x" + context.session.dataHash, '0x8C97546e0Df32fB1A2440f4F3375C0E14b0e45a7', paymentSignature]
      args:['50000', "0x" + context.dataHash, '0x8C97546e0Df32fB1A2440f4F3375C0E14b0e45a7', paymentSignature]
  });
  const { write: paymentCall } = useContractWrite(callConfig2);*/
  //console.log("callConfig2: ", JSON.stringify(callConfig2));
  
  async function authorizePayment(e) {    
    const authorization = await lit.authorizePayment(
      context.session.price, 
      context.dataHash, 
      context.session.dataOwner);

    const sig = authorization.signatures['sig1'].signature;
    
    setPaymentSignature(sig);
    //approveCall();

    console.log("amount: ", context.session.price);
    console.log("data ID: ", "0x" + context.dataHash);
    console.log("data owner: ", context.session.dataOwner);
    console.log("payment signature: ", sig);
  }

  async function decryptFile() {

    const decrypted = await lit.decryptFile(
      context.session.encryptedString, 
      context.session.encryptedSymmetricKey, 
      context.dataHash
    );

    console.log(JSON.stringify(decrypted));
  }

  if(context.session) {
    return (
      <div>
        <div>
          <Header title="Lit Protocol PoC: Purchase view" />
          {isConnected? <div>Connected to {address} <button onClick={() => disconnect()}>Disconnect</button><p>Token balance: {balance.data.formatted} {balance.symbol}</p></div> : <button onClick={() => connect()}>Connect Wallet</button> } 
        </div>
        <div>
          <p>Available data for purchase: </p>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ context.session.name }</td>
                <td>{ context.session.description }</td>
                <td>{ context.session.ipfsUrl }</td>
                <td>
                  <button onClick={authorizePayment}>authorize payment</button>
                </td>
                <td>
                  <button onClick={decryptFile}>decrypt file</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <Header title="Lit Protocol PoC: Purchase view" />
        </div>
        <div>
          There's no data in the market available for purchase
        </div>
      </div>
    );
  }
  
}
