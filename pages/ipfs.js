import { create } from "ipfs-http-client";
import * as makeIpfsFetch from 'ipfs-fetch';

//const projectId = process.env["INFURA_PROJECT_ID"];
//const projectSecret = process.env["INFURA_PROJECT_SECRET"];

const projectId = '2KXNViL7sQJD1g6Xf6qZjLXodCh';
const projectSecret = 'a0bc92c8fb761db6c65b8f87e6dfd51a';
const auth = 'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

class IPFShhh {
  client
  //fetch
  
  constructor() {
    client = create({
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https',
      headers: {
          authorization: auth,
      },
    });
    
    //fetch = await makeIpfsFetch({client})
  }
  
  async addData(data) {    
    return await this.client.add(data);
  }
}

const ipfsModule = new IPFShhh();
export default ipfsModule;
