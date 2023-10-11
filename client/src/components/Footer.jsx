import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={"blackAlpha.900"}
      color={useColorModeValue("gray.700", "gray.200")}
      borderTop={"1px solid white"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text color={"whiteAlpha.900"}>
          © 2023 Deekshith. All rights reserved
        </Text>
        <Stack direction={"row"} spacing={6} color={"whiteAlpha.900"}>
          <SocialButton
            label={"Github"}
            href={"https://github.com/deekshith1856"}
          >
            <FaGithub />
          </SocialButton>
          <SocialButton
            label={"LinkedIn"}
            href={"https://www.linkedin.com/in/deekshith-nemmani-bbba22237/"}
            target="_blank"
          >
            <FaLinkedinIn />
          </SocialButton>
          <SocialButton
            label={"Instagram"}
            href={"https://www.linkedin.com/in/deekshith-nemmani-bbba22237/"}
          >
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  );
}
