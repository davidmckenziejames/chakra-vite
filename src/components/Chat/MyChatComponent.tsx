import Talk from "talkjs";
import { useEffect, useState, useRef } from "react";
import { Box } from "@chakra-ui/react";

function MyChatComponent() {
  const chatboxEl = useRef<HTMLDivElement>(null);

  // Wait for TalkJS to load
  const [talkLoaded, setTalkLoaded] = useState(false);

  useEffect(() => {
    Talk.ready.then(() => setTalkLoaded(true));
  }, []);

  useEffect(() => {
    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: "1",
        name: "Henry Mill",
        email: "henrymill@example.com",
        photoUrl: "henry.jpeg",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const otherUser = new Talk.User({
        id: "2",
        name: "Jessica Wells",
        email: "jessicawells@example.com",
        photoUrl: "jessica.jpeg",
        welcomeMessage: "Hello!",
        role: "default",
      });

      const session = new Talk.Session({
        appId: "tB6wONs9",
        me: currentUser,
      });

      const conversationId = Talk.oneOnOneId(currentUser, otherUser);
      const conversation = session.getOrCreateConversation(conversationId);
      conversation.setParticipant(currentUser);
      conversation.setParticipant(otherUser);

      const chatbox = session.createChatbox(conversation);
      chatbox.mount(chatboxEl.current);
    }
    return () => {
      // Code to run on component unmount
    };
  }, [talkLoaded]);

  return <Box height="100vh" ref={chatboxEl} />;
}

export default MyChatComponent;
