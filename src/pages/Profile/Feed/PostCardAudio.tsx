import { useEffect } from "react";
import {
  Avatar,
  Flex,
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Image,
  AvatarBadge,
  Menu,
  MenuButton,
  Link,
  MenuItem,
  MenuList,
  HStack,
} from "@chakra-ui/react";
import { BiEdit, BiTrash } from "react-icons/bi";
import { FiShare, FiEye, FiMoreVertical } from "react-icons/fi";

import PostActions from "./PostActions";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

type PostMenuProps = {
  icon: React.ElementType;
  label: string;
};

const PostMenu = ({ icon, label }: PostMenuProps) => (
  <MenuItem py="10px" aria-label={label}>
    <Box as={icon} size="14px" mr="8px" />
    <Text>{label}</Text>
  </MenuItem>
);

export default function PostCardAudio() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      .rhap_container {
        background: #333;
      }

      .rhap_progress-filled {
          background: cyan;
      }
      
      .rhap_progress-bar {
        background-image: linear-gradient(90deg, #043AFB 0%, #CB00BE 100%);
      }

      .rhap_download-progress {
        background: #ffffff;
      }

      .rhap_time {
        color: #fff;
      }

      .rhap_play-pause-button {
        color: #fff;
      }
    `;

    document.head.append(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return (
    <Card border="2px solid black" borderRadius="15px">
      <CardHeader borderBottom="2px solid black">
        <Flex gap={4}>
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar
              name="Richy Ahmed"
              border="1px solid cyan"
              src="https://djfan.app/wp-content/uploads/jet-engine-forms/175/2023/05/WhatsApp-Image-2023-05-20-at-17.39.37.jpeg"
            >
              <AvatarBadge
                bg="green.500"
                boxSize="1.25rem"
                borderColor="white"
                display="block"
                justifyContent="flex-end"
              />
            </Avatar>

            <Box>
              <Link pb="2px" size="sm" fontWeight="700">
                Richy Ahmed
              </Link>
              <HStack>
                <Text fontSize="12px" color="gray.500" fontWeight="500">
                  6 hours ago
                </Text>
                <Flex align="center" gap="4px">
                  <Box as={FiEye} size="14px" color="#805ad5" />
                  <Text fontSize="14px" color="#805ad5" fontWeight="600">
                    VIP
                  </Text>
                </Flex>
              </HStack>
            </Box>
          </Flex>
          <Menu>
            <MenuButton transition="all 0.3s" _focus={{ boxShadow: "none" }}>
              <Box as={FiMoreVertical} size="20px" color="gray" />
            </MenuButton>
            <MenuList
              minW="max-content"
              fontSize="14px"
              bg="white"
              p="0"
              m="0"
              borderColor="gray.200"
            >
              <PostMenu icon={BiEdit} label="Edit Post" />
              <PostMenu icon={BiTrash} label="Delete Post" />
              <PostMenu icon={FiShare} label="Share Post" />
            </MenuList>
          </Menu>
        </Flex>
      </CardHeader>
      <CardBody p="0">
        <Flex
          bg="black"
          borderBottom="1px solid cyan"
          flexDirection="row"
          align="center"
        >
          <Image
            w="60px"
            h="60px"
            mr="15px"
            alt="post"
            objectFit="cover"
            src="https://djfan.ams3.cdn.digitaloceanspaces.com/2023/06/ff-f0b1b420477348f53fbdd81ff0037c62-ff-Emerald-Beats-Vol.1-Code-.jpg"
          />
          <Heading fontSize="16px" color="white">
            Code Is Law ft. Wiz
          </Heading>
        </Flex>
        <AudioPlayer
          src="https://djfan.app/wp-content/uploads/2023/05/The-Line-by-Camilo-Astudillo-Ft.-Anita-Ce-Wiz-3165645648afa640e3b1be51accf8749.wav"
          onPlay={(e) => console.log("onPlay")}
          // other props here
        />
      </CardBody>
      <CardFooter px="10px" py="15px" mb="5px" flexDirection="column">
        <PostActions />
        <Text as="span" px="10px">
          <Link as="span" fontWeight="700" mr="5px" fontSize="16px">
            @richyahmed
          </Link>
          <Box as="span" fontSize="15px" fontWeight="500">
            Good vibes, fresh beats, and a moment worth a thousand songs... This
            is how we tune out the world and turn up the volume!
          </Box>
        </Text>
        <Link px="10px" fontSize="14px" fontWeight="500" pt="10px" href="#">
          View 67 comments
        </Link>
      </CardFooter>
    </Card>
  );
}
