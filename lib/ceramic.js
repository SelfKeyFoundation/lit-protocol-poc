import { CeramicClient } from '@ceramicnetwork/http-client'
import * as KeyDidResolver from 'key-did-resolver'
import * as ThreeIdResolver from '@ceramicnetwork/3id-did-resolver'
import { TileDocument } from '@ceramicnetwork/stream-tile'
import { Ed25519Provider } from 'key-did-provider-ed25519'
import { getResolver } from 'key-did-resolver'
import * as crypto from 'crypto'
import { DID } from 'dids'

//import { DIDSession } from 'did-session'
//import { EthereumWebAuth, getAccountId } from '@didtools/pkh-ethereum'

const API_URL = 'http://0.0.0.0:7007';
const seed1 = new Uint8Array([206, 77, 195, 175, 83, 179, 130, 171, 27, 0, 124, 243, 254, 183, 209, 215, 176, 106, 106, 60, 177, 232, 167, 73, 250, 245, 221, 220, 142, 237, 196, 85]);
const seed2 = new Uint8Array([186, 166, 63, 51, 137, 241, 202, 253, 236, 200, 189, 99, 59, 229, 203, 189, 135, 136, 53, 211, 33, 99, 34, 202, 46, 120, 47, 242, 205, 222, 104, 11]);
const seed3 = Uint8Array.from(Buffer.from("53ec29ea85a51dcc53029f015b64e9970b428e396728fb9ec0cf9645fd7f22a5", 'hex'));


class Ceramic {
  client
  
  constructor() {
    this.client = new CeramicClient(API_URL);
  }
  
  async authenticateCeramic() {
    const provider = new Ed25519Provider(seed3);
    const did = new DID({ provider, resolver: getResolver() });
    await did.authenticate();
    this.client.did = did;
    return did;
  }

  async createDocument(content) {
    return await TileDocument.create(this.client, content);
  }
  
  async loadDocument(id) {
    return await TileDocument.load(this.client, id);
  }
  
  async updateDocument(id, content) {
    const doc = await TileDocument.load(this.client, id);
    await doc.update(content);
  }
  
  async appendToDocument(id, element) {
    const doc = await TileDocument.load(this.client, id);
    const arr = doc.content.documents;
    arr.push(element);    
    const content = { "documents": arr }
    await doc.update(content);
  }
  
  async deleteFromDocument(element, container) {
    const doc = await TileDocument.load(this.client, container);
    const arr = doc.content.documents;
    //const index = arr.findIndex(element);
    const index = arr.indexOf(element);
    if (index > -1) {
      arr.splice(index, 1);
    }
    const content = { "documents": arr }
    await doc.update(content);
  }
  
  async loadDocumentByController(controller) {
    const result = await TileDocument.deterministic(this.client, {
      controllers: [controller],
      family: '',   // ???
      tags: [],
    });
    console.log("result: ", result);
    return result;
  }
  
  getClient() {
    return this.client;
  }
}

const ceramic = new Ceramic();
export default ceramic;
