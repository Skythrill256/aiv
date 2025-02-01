
import { StyleSheet, View } from "react-native";
import { WagmiProvider } from 'wagmi'
import { polygonAmoy, polygonZkEvm } from '@wagmi/core/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit, defaultWagmiConfig, AppKit } from '@reown/appkit-wagmi-react-native'
import { ConnectWallet } from './src/Components/ConnectWallet'

const queryClient = new QueryClient()

const projectId: any = process.env.EXPO_PUBLIC_PROJECT_ID

const metadata = {
  name: 'AIV',
  description: 'Anonymous ID verification and election web3 based application',
  url: 'https://reown.com/appkit',
  icons: ['https://avatars.githubusercontent.com/u/179229932'],
  redirect: {
    native: 'APP_SCHEME://',
    universal: 'xxx.com'
  }
}

const chains = [polygonAmoy, polygonZkEvm] as const

const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata })

createAppKit({
  projectId,
  wagmiConfig,
  defaultChain: polygonAmoy,
  enableAnalytics: true
})

export default function App() {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <View style={styles.centerContainer}>
          <ConnectWallet />
        </View>
        <AppKit />
      </QueryClientProvider>
    </WagmiProvider>
  )
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
