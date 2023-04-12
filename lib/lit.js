import * as LitJsSdk from "@lit-protocol/lit-node-client";

//import { ethConnect } from '@lit-protocol/auth-browser';
//ethConnect.disconnectWeb3();


const client = new LitJsSdk.LitNodeClient({ litNetwork: "serrano" });
//const client = new LitJsSdk.LitNodeClient();

const chain = 'mumbai';

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
    await client.connect()
    this.litNodeClient = client;
  }

  async encryptFile(file, dataHash) {
    //ethConnect.disconnectWeb3();     // ???

    if (!this.litNodeClient) {
      await this.connect();
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });
    console.log("authSig: ", authSig);
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
      encryptedSymmetricKey: LitJsSdk.uint8arrayToString(encryptedSymmetricKey, "base16")
    }
  }

  async decryptFile(encryptedFile, encryptedSymmetricKey, dataHash) {
    if (!this.litNodeClient) {
      await this.connect();
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain });    
    console.log("dataHash: ", dataHash);

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

  async authorizePayment (amount, dataHash, dataOwner) {
    if (!this.litNodeClient) {
      await this.connect()
    }

    const authSig = await LitJsSdk.checkAndSignAuthMessage({ chain })

    console.log("amount: ", amount);
    console.log("dataHash: ", dataHash);
    console.log("dataOwner: ", dataOwner);

    const signatures = await this.litNodeClient.executeJs({
      ipfsId: 'QmZG8qCNNk85pBzfzgdV9z3hF7ZSW3y49KR4R1smJW6azm',
      authSig,
      jsParams: {
        amount: amount,
        dataID: "0x" + dataHash,
        dataOwner: dataOwner,
        publicKey:
          "0x04c5e647083b34b2c21cd5ff0af85bb1aa93c4b05c1afc8ef22155533eb0572bf28dba4c407528a30fb738865941ecd7d3c367de2c5dee6fdef8bc5d5dcd46ecd5",
        sigName: "sig1",
      },
    });
    
    return signatures;
  }
}

const lit = new Lit();
export default lit;
