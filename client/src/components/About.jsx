import {
  Box,
  Button,
  Center,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Element } from "react-scroll";
const About = () => {
  return (
    <Element name="About">
      <Stack
        direction={{ base: "column" }}
        overflow="hidden"
        variant="outline"
        justifyContent={"center"}
        alignItems={"center"}
        bg={"blackAlpha.900"}
        pb={3}
        mt={0.1}
        mx={0}
        id="about"
      >
        <Box py={2} marginTop={3} justifyContent={"center"}>
          <Heading size={{ base: "2xl", md: "3xl" }} color={"whiteAlpha.800"}>
            About Me
          </Heading>
        </Box>

        <Center direction={"column"} spacing={10}>
          <Stack
            display={"flex"}
            direction={{ base: "column", md: "column", lg: "row" }}
            justifyContent={"space-between"}
            alignContent={"center"}
            maxW={{ base: "100%", md: "80%", lg: "50%" }}
          >
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              py={2}
              my={2}
            >
              <Image
                objectFit="cover"
                rounded={"full"}
                maxW={{ base: "80%", sm: "200px" }}
                src="/public/DeekshithPic.png"
                alt="Caffe Latte"
              />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              py={2}
              my={2}
            >
              <Text
                py="2"
                px={3}
                color={"whiteAlpha.900"}
                fontWeight={"semibold"}
              >
                I am a full stack web developer with a passion for creating
                interactive and responsive web applications. I have experience
                working with JavaScript, React, Node.js, Express, MongoDB, HTML,
                CSS, and Git. I am a quick learner and I am always looking to
                expand my knowledge and skill set. I am a team player and I am
                excited to work with others to create amazing applications.
              </Text>
            </Box>
          </Stack>
        </Center>
        <Center display={"flex"} justifyContent={"center"}>
          <Button variant="solid" colorScheme="blue">
            Download CV
          </Button>
        </Center>
      </Stack>
    </Element>
  );
};

export default About;
