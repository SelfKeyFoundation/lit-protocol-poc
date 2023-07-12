import AppContext from "../components/AppContext";
import { useContext, useState } from "react";
//import { useParams } from 'react-router-dom';
import { useRouter } from "next/router";
import lit from "../lib/lit";
import ceramic from "../lib/ceramic"; 

function Header(props) {
  return(<h1>{props.title}</h1>);
}

export default function EditPage() {
  const router = useRouter();
  const context = useContext(AppContext);
  const doc = context.session.document;
  
  async function handleSubmit(e) {
    e.preventDefault();
    console.log("doc: ", doc);
    
    try {
      const content = {
        name: e.target.dataName.value,
        description: e.target.dataDescription.value,
        url: doc.url,
        price: e.target.dataPrice.value,
        dataOwner: doc.dataOwner,
        dataId: doc.dataId,
      };

      await ceramic.updateDocument(doc.streamId, content);
      // display success message
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  }
  
  function nothing(){
    console.log("nothing");
  }

  return (
  <div>
    <Header title="Lit Protocol PoC: Edit data" />
    <br></br>
    <form onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td><label>Name: </label></td>
            <td><input id="dataName" type="text" defaultValue={doc.name} required /></td>
          </tr>
          <tr>
            <td><label>Description: </label></td>
            <td><input id="dataDescription" type="text" defaultValue={doc.description} required /></td>
          </tr>
          <tr>
            <td><label>Price (MCK): </label></td>
            <td><input id="dataPrice" type="text" defaultValue={doc.price} required /></td>
          </tr>
          <tr>
            <td><button type="submit" className="button">Update</button></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </form>
  </div>
  );
}
