import * as LitJsSdk from "@lit-protocol/lit-node-client";
import { ethConnect } from "@lit-protocol/auth-browser";
import * as fs from 'fs';

const chain = 'mumbai';
const client = new LitJsSdk.LitNodeClient({ litNetwork: "serrano" });

/*const emptyCondition = [
  {
    contractAddress: "",
    standardContractType: "",
    chain: chain,
    method: "eth_getBalance",
    parameters: [":userAddress", "latest"],
    returnValueTest: {
      comparator: ">=",
      value: "0",
    },
  },
];*/

class Lit {
  litNodeClient

  async connect() {
    ethConnect.disconnectWeb3();
    await client.connect()
    this.litNodeClient = client;
  }

  async encryptFile(file, dataHash) {
    if (!this.litNodeClient) {
      await this.connect();
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    //this.authAddress = authSig.address;

    const { encryptedString, encryptedData, symmetricKey } = await LitJsSdk.encryptString(file)

    // store data info on marketplace, get data object ID (using hash temporarily), etc.

    let accessControlConditionsPayment = [
      {
        contractAddress: '0x85be769afFa3A4324Aa06CAEe830B0A5a8cf6199',
        chain,
        functionName: 'paymentWasMade',
        functionParams: [
          ':userAddress',
          "0x" + dataHash
        ],
        returnValueTest: {
          key: '',
          comparator: '=',
          value: 'true'
        },
        functionAbi: {
          inputs: [
            {
              internalType: 'address',
              name: 'username',
              type: 'address'
            },
            {
              internalType: 'bytes32',
              name: 'dataID',
              type: 'bytes32'
            }
          ],
          name: 'paymentWasMade',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        }
      }
    ];

    const encryptedSymmetricKey = await this.litNodeClient.saveEncryptionKey({
      evmContractConditions: accessControlConditionsPayment,
      symmetricKey,
      authSig,
      chain,
    });

    return {
      encryptedString: encryptedString,
      encryptedData: encryptedData,
      encryptedSymmetricKey: LitJsSdk.uint8arrayToString(encryptedSymmetricKey, "base16"),
      litAuth: authSig,
    }
  }

  async decryptFile(encryptedFile, encryptedSymmetricKey, dataHash) {
    if (!this.litNodeClient) {
      await this.connect();
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });    

    let accessControlConditionsPayment = [
      {
        contractAddress: '0x85be769afFa3A4324Aa06CAEe830B0A5a8cf6199',
        chain,
        functionName: 'paymentWasMade',
        functionParams: [
          ':userAddress',
          "0x" + dataHash
        ],
        returnValueTest: {
          key: '',
          comparator: '=',
          value: 'true'
        },
        functionAbi: {
          inputs: [
            {
              internalType: 'address',
              name: 'username',
              type: 'address'
            },
            {
              internalType: 'bytes32',
              name: 'dataID',
              type: 'bytes32'
            }
          ],
          name: 'paymentWasMade',
          outputs: [
            {
              internalType: 'bool',
              name: '',
              type: 'bool'
            }
          ],
          stateMutability: 'view',
          type: 'function'
        }
      }
    ];

    const symmetricKey = await this.litNodeClient.getEncryptionKey({
      evmContractConditions: accessControlConditionsPayment,
      toDecrypt: encryptedSymmetricKey,
      chain,
      authSig
    });

    console.log("Got symmetric key! --> ", symmetricKey);

    const decryptedFile = await LitJsSdk.decryptString(
      encryptedFile,
      symmetricKey
    );

    return { decryptedFile };
  }
  
  async authorizePayment (amount, dataHash, dataOwner, streamID) {
    if (!this.litNodeClient) {
      await this.connect()
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })

    /*console.log("amount: ", amount);
    console.log("dataHash: ", dataHash);
    console.log("dataOwner: ", dataOwner);*/
    
    const actionId = 'QmSZ3fym565NUshs2gdyTHm5THa2r3kPTgS7Wa6az7drKf'; // bundled action
    
    const signatures = await this.litNodeClient.executeJs({
      ipfsId: actionId,
      authSig,
      jsParams: {
        amount: amount,
        dataID: "0x" + dataHash,
        dataOwner: dataOwner,
        streamID: streamID,
        publicKey: "0x0448d4e58acb64d4bae033f64b77e837d7a9d2834a0f15629c3b9e8777eb0bc015ef552a6ecae9fd2c84c44ef682a894582711012fcb108e788145e800af9de92f",
        sigName: "sig1",
      },
    });
    
    return signatures;
  }

  async authorizePayment2 (amount, dataHash, dataOwner, streamID, litActionCode) {
    if (!this.litNodeClient) {
      await this.connect()
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })

    /*console.log("amount: ", amount);
    console.log("dataHash: ", dataHash);
    console.log("dataOwner: ", dataOwner);*/
    

    const signatures = await this.litNodeClient.executeJs({
      //ipfsId: actionId,
      code: litActionCode,
      authSig,
      jsParams: {
        amount: amount,
        dataID: "0x" + dataHash,
        dataOwner: dataOwner,
        streamID: streamID,
        publicKey: "0x0448d4e58acb64d4bae033f64b77e837d7a9d2834a0f15629c3b9e8777eb0bc015ef552a6ecae9fd2c84c44ef682a894582711012fcb108e788145e800af9de92f",
        sigName: "sig1",
      },
    });
    
    return signatures;
  }
}

const lit = new Lit();
export default lit;

