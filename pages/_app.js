import '../styles/global.css';
import { useState } from 'react';
import AppContext from '../components/AppContext';

import { WagmiConfig, createClient, configureChains, goerli } from 'wagmi'
import { getDefaultProvider } from 'ethers'
import { publicProvider } from 'wagmi/providers/public'
 
const { chains, provider, webSocketProvider } = configureChains(
  [goerli],
  [publicProvider()], // pass infuraProvider on production to not face rate limiting!
)

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
})

export default function App({ Component, pageProps }) {
  const [session, setSession] = useState();
  const [dataHash, setDataHash] = useState('0');

  return (
    <WagmiConfig client={client}>
      <AppContext.Provider value={{ 
        session: session, 
        setSession: setSession,
        dataHash: dataHash,
        setDataHash: setDataHash
      }}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </WagmiConfig>);
}