import { ConnectButton } from "@reown/appkit-wagmi-react-native";
import { Text, View } from "react-native";

export function ConnectWallet() {
  return (
    <View>
      <Text className="text-green-700">Hello</Text>

      <ConnectButton

        size="md"
        label="Connect Wallet"
        loadingLabel="Connecting..."
      />

    </View>
  )
}
