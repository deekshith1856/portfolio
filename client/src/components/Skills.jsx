import {
  Box,
  Text,
  Stack,
  Flex,
  VStack,
  Heading,
  ListItem,
  ListIcon,
  List,
} from "@chakra-ui/react";
import { AiTwotoneStar } from "react-icons/ai";
import { Element } from "react-scroll";
export default function Skills() {
  return (
    <Element name="Skills">
      <Flex
        py={10}
        px={{ base: 0, md: 4 }}
        direction={{ base: "column" }}
        justifyContent={"center"}
        alignContent={"center"}
        bg={"blackAlpha.900"}
        id="skills"
      >
        <Box display={"flex"} justifyContent={"center"}>
          <Heading size={{ base: "2xl", md: "3xl" }} color={"whiteAlpha.800"}>
            Skills
          </Heading>
        </Box>
        <Stack
          direction={{ base: "row", md: "row" }}
          spacing={{ base: 5, md: 10 }}
          justifyContent={"center"}
          alignContent={"center"}
          py={4}
          px={3}
        >
          {data.map((d, index) => (
            <VStack
              border={"2px solid white"}
              borderRadius={10}
              key={index}
              px={3}
              py={2}
              minW={{ base: "42%", md: "32%" }}
            >
              <Text
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight={"bold"}
                color={"whiteAlpha.900"}
              >
                {d.heading}
              </Text>
              <List>
                {d.technologies.map((tech, index) => (
                  <ListItem key={index} color={"whiteAlpha.900"} py={"3px"}>
                    <ListIcon as={AiTwotoneStar} />
                    {tech}
                  </ListItem>
                ))}
              </List>
            </VStack>
          ))}
        </Stack>
      </Flex>
    </Element>
  );
}

const data = [
  {
    heading: "Frontend Skills",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Chakra UI"],
  },
  {
    heading: "Backend Skills",
    technologies: ["NodeJs", "Express", "MongoDb", "Mongoose"],
  },
];
