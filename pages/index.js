import { useContext, useState } from "react";
import AppContext from "../components/AppContext";
import { useRouter } from "next/router";

import { create } from "ipfs-http-client";
import { createHash } from "crypto";
import lit from "../lib/lit";

import { useAccount, useConnect, useDisconnect } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

//const projectId = process.env["INFURA_PROJECT_ID"];
//const projectSecret = process.env["INFURA_PROJECT_SECRET"];

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

function IpfsLink(props) {
  return (
    <div className={props.show ? "visible" : "invisible"}>
      <p>Uploaded encrypted file to IPFS</p>
      <p>URL: {props.url}</p>
    </div>
  );
}

export default function HomePage() {
  const [file, setFile] = useState(null);
  const [encryptedStringArr, setEncryptedStringArr] = useState([]);
  const [encryptedDataArr, setEncryptedDataArr] = useState([]);
  const [encryptedKeyArr, setEncryptedKeyArr] = useState([]);
  //const [decryptedFileArr, setDecryptedFileArr] = useState([]);
  const [dataHash, setDataHash] = useState([]);
  const [url, setURL] = useState('');

  const context = useContext(AppContext);
  const router = useRouter();

  function retrieveFile(e) {
    const data = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);

    reader.onloadend = () => {
      setFile(Buffer(reader.result));
    };
    
    e.preventDefault();
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {      
      //ceramicLogin();
      const f = file.toString();
      const hash_ = createHash("sha256").update(f).digest("hex");
      const encrypted = await lit.encryptFile(f, hash_);
      const created = await client.add(encrypted.encryptedString);
      //const created = await client.add(f);

      const ipfsUrl = `https://ipfs.io/ipfs/${created.path}`;
      //const ipfsUrl = 'Not uploaded';
      setURL(ipfsUrl);

      //console.log("lit auth address: ", JSON.stringify(lit));
      const dataOwner = '0xc4b57BB0d322F06f20669f3aE09028464942d8FB';

      context.setSession({
        name: e.target.dataName.value,
        description: e.target.dataDescription.value,
        ipfsUrl: ipfsUrl,
        price: e.target.dataPrice.value,
        dataOwner: dataOwner,
        encryptedString: encrypted.encryptedString,
        encryptedData: encrypted.encryptedData,
        encryptedSymmetricKey: encrypted.encryptedSymmetricKey
        //dataHash: hash_
      });
      context.setDataHash(hash_);

    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <div>
      <Header title="Lit Protocol PoC" />
      <br></br>
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
              <td><input id="dataName" type="text" required /></td>
            </tr>
            <tr>
              <td><label>Description: </label></td>
              <td><input id="dataDescription" type="text" required /></td>
            </tr>
            <tr>
              <td><label>Price (MCK): </label></td>
              <td><input id="dataPrice" type="text" required /></td>
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
        onClick={() => {
            router.push('/purchase')
        }}>Marketplace view</button> 
    </div>
  );
}
//<button onClick={handleClick}>Like</button> {likes}