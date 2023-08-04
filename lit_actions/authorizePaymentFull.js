import { CeramicClient } from '@ceramicnetwork/http-client';
import { TileDocument } from '@ceramicnetwork/stream-tile';
    
const go = async () => {

  const client = new CeramicClient('http://18.141.190.4:7007');
  const directory = await TileDocument.load(client, 'kjzl6cwe1jw149n2kupgcy4c8delsbvcwi5u3gjs8mg2n2ev3nqaect16chqi1y');
  
  if(!directory.content.documents.includes(streamID)) {
    console.log("stream ID not found");
    return;
  }
  
  const stream = await TileDocument.load(client, streamID);
  
  if(stream.content.price != amount){
    console.log("data price does not coincide")
    return;
  }
  if(stream.content.dataOwner.toLowerCase() != dataOwner.toLowerCase()){
    console.log("data owner does not match");
    return;
  }
  if("0x" + stream.content.dataId != dataID){
    console.log("invalid dataID:");
    return;
  }
    
  let foobar = ethers.utils.solidityKeccak256(
    ['uint256', 'bytes32', 'address'], 
    [amount, dataID, dataOwner]);
  const toSign = ethers.utils.arrayify(foobar);
  const sigShare = await Lit.Actions.signEcdsa({ toSign, publicKey, sigName });
};

go();
