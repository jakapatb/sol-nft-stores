import React, { createContext, useContext, useMemo } from 'react'
import * as anchor from '@project-serum/anchor'
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet
} from '@solana/wallet-adapter-wallets'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { clusterApiUrl } from '@solana/web3.js'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui'
const treasury = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_TREASURY_ADDRESS!)

const config = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_CONFIG!)

const candyMachineId = new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID!)

const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!
const connection = new anchor.web3.Connection(rpcHost)

const startDate = parseInt(process.env.NEXT_PUBLIC_CANDY_START_DATE!, 10)

const txTimeout = 30000 // milliseconds (confirm this works for your project)
type Config = {
  treasury: anchor.web3.PublicKey
  config: anchor.web3.PublicKey
  candyMachineId: anchor.web3.PublicKey
  connection: anchor.web3.Connection
  startDate: number
  txTimeout: number
}

const network = process.env.NEXT_PUBLIC_SOLANA_NETWORK as WalletAdapterNetwork

const ConfigContext = createContext<Config>({
  treasury,
  config,
  candyMachineId,
  connection,
  startDate,
  txTimeout
})

export const useConfig = () => useContext<Config>(ConfigContext)

export const ConfigProvider: React.FC = ({ children }) => {
  const endpoint = useMemo(() => clusterApiUrl(network), [])

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSlopeWallet(),
      getSolflareWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network })
    ],
    []
  )

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect={true}>
        <WalletModalProvider>
          <ConfigContext.Provider
            value={{
              treasury,
              config,
              candyMachineId,
              connection,
              startDate,
              txTimeout
            }}
          >
            <h1>Test</h1>
            {children}
          </ConfigContext.Provider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default ConfigProvider
