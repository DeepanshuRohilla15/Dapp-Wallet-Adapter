/* eslint-disable no-unused-vars */
import React, { FC, useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { Airdrop } from './Airdrop';

// Default styles that can be overridden by your app
import '@solana/wallet-adapter-react-ui/styles.css';
import { ShowSolBalance } from './ShowSolBalance';
import { SendTokens } from './SendTokens';
import { SignMessage } from './SignMessage';

function App() {
  return (
    // endpoint -> replace it with devnet rpc
    <ConnectionProvider endpoint={"https://solana-devnet.g.alchemy.com/v2/gnKrq7uzcBIJ-8QfJq0qbfy9ki2zE_91"}> 
            <WalletProvider wallets={[]} autoConnect>
                <WalletModalProvider>
                  <WalletMultiButton></WalletMultiButton>
                  <WalletDisconnectButton></WalletDisconnectButton>
                  <Airdrop />
                  <ShowSolBalance />
                  <SendTokens />
                  <SignMessage />
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
  )
}

export default App
