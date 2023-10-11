import {
  Stack,
  Flex,
  Button,
  Text,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import heroImage from "../assets/heroImage.png";
import { useEffect, useState } from "react";
import { GoLinkExternal } from "react-icons/go";
import { Element } from "react-scroll";
export default function Hero() {
  const [text, setText] = useState("Deekshith");
  const [index, setIndex] = useState(0);
  const texts = ["Deekshith", "Web Developer"];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  });
  useEffect(() => {
    setText(texts[index]);
  }, [index]);
  const handleCV = () => {
    const pdfFilePath = "/public/resume/resume.pdf";
    const pdfUrl = pdfFilePath;
    window.open(pdfUrl, "_blank");
  };
  return (
    <Element name="Logo">
      <Flex
        w={"full"}
        h={"100vh"}
        backgroundImage={heroImage}
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
        mb={0}
        id="hero"
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} minW={"2xl"} align={"center"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Hello, I am
            </Text>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={0.8}
              fontSize={useBreakpointValue({ base: "4xl", md: "5xl" })}
            >
              {text ? text : "Deekshith"}
            </Text>
            <Stack direction={"row"}>
              <Button
                // bg={"blue.400"}

                rounded={"full"}
                color={"white"}
                variant={"outline"}
                _hover={{ bg: "blue.500" }}
                onClick={handleCV}
                rightIcon={<GoLinkExternal />}
              >
                View Resume
              </Button>
              <Button
                bg={"black"}
                rounded={"full"}
                color={"white"}
                _hover={{ color: "black", backgroundColor: "whiteAlpha.900" }}
              >
                Hire me
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    </Element>
  );
}
