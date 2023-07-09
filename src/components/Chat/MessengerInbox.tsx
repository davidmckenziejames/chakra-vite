import { WeavyClient, WeavyProvider, Messenger } from "@weavy/uikit-react";
import "@weavy/uikit-react/dist/css/weavy.css";
import "@weavy/uikit-react/dist/css/weavy-messenger.css";

const weavyClient = new WeavyClient({
  url: "https://4c34a5cfb73e48b286fc56f58e240d65.weavy.io",
  tokenFactory: async () => "wys_Cf6PH8Ijiw6ZpQmDGtG51AToPzHdpz1tfGJ9",
});

export default function MessengerInbox() {
  return (
      <WeavyProvider client={weavyClient}>
        <Messenger />
      </WeavyProvider>
  );
}