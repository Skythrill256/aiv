import { ConnectButton } from "@reown/appkit-wagmi-react-native";

export function ConnectWallet() {
  return (
    <ConnectButton
      size="md"
      label="Connect Wallet"
      loadingLabel="Connecting..."
    />

  )
}
