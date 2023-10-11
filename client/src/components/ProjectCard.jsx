import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Button,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
export default function ProjectCard({ data }) {
  const [publicProject, setPublicProject] = useState(true);
  const styles = {
    anchorTag: {
      display: "inline-block",
      textDecoration: "nono",
      color: "inherit",
      width: "100%",
    },
  };

  return (
    <Center py={6}>
      <Box
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"md"}
        p={6}
        w={"50vh"}
        h={"68vh"}
        overflow={"hidden"}
        display={"flex"}
        flexDirection={"column"}
        alignContent={"space-evenly"}
        justifyContent={"space-between"}
      >
        <Box
          h={"210px"}
          bg={"gray.100"}
          mt={-6}
          mx={-6}
          mb={6}
          pos={"relative"}
          p={2}
        >
          <Image
            src={data.imgSrc}
            borderRadius={"10px"}
            h={"100%"}
            fill
            alt={data.name}
          />
        </Box>
        <Stack alignContent={"space-evenly"}>
          <Heading
            color={useColorModeValue("gray.700", "white")}
            fontSize={"2xl"}
            fontFamily={"body"}
          >
            {data.name}
          </Heading>
          <Text color={"gray.500"}>{data.description}</Text>
        </Stack>
        <VStack>
          <a href={data.websiteLink} target="_blank" style={styles.anchorTag}>
            <Button
              w={"100%"}
              rightIcon={<BiLinkExternal />}
              colorScheme="blue"
            >
              Go to site
            </Button>
          </a>

          {publicProject && (
            <a href={data.gitRepoLink} target="_blank" style={styles.anchorTag}>
              <Button w={"100%"} rightIcon={<FaGithub />}>
                View Code
              </Button>
            </a>
          )}
        </VStack>
      </Box>
    </Center>
  );
}
