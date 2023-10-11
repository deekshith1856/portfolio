"use client";

import { Box, Heading, Text, Stack, Container } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { Element } from "react-scroll";

const Testimonial = (props) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

export default function Projects() {
  return (
    <Element name="Projects">
      <Box bg={"blackAlpha.900"} id="projects">
        <Container maxW={"7xl"} py={16} as={Stack} spacing={12}>
          <Stack spacing={0} align={"center"}>
            <Heading color={"white"}>Projects</Heading>
            <Text></Text>
          </Stack>
          <Stack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 10, md: 4, lg: 10 }}
            wrap={"wrap"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            {data.map((d) => (
              <ProjectCard data={d} />
            ))}
          </Stack>
        </Container>
      </Box>
    </Element>
  );
}

const data = [
  // {
  //   imgSrc: "",
  //   name: "Auto CV",
  //   description: "history",
  //   publicProject: true,
  //   gitRepoLink: "https://github.com/deekshith1856/autocv.git",
  //   websiteLink: "https://autocv-5vy2bpn0s-deekshith1856.vercel.app/",
  // },
  // {
  //   imgSrc: "",
  //   name: "Netflix-Clone",
  //   description: "Implementation of UI of netflix app",
  //   publicProject: true,
  //   gitRepoLink: "https://github.com/deekshith1856/autocv.git",
  //   websiteLink: "",
  // },
  {
    imgSrc: "/public/projects/CryptoWatch.png",
    name: "Crypto-Watch",
    description: "Users can track the prices of various crypto currencies",
    publicProject: true,
    gitRepoLink: "https://github.com/deekshith1856/autocv.git",
    websiteLink: "",
  },
  // {
  //   imgSrc: "",
  //   name: "#markt",
  //   description:
  //     "An e-commerce application through which you can order various products",
  //   publicProject: true,
  //   gitRepoLink: "https://github.com/deekshith1856/autocv.git",
  //   websiteLink: "",
  // },
  // {
  //   imgSrc: "",
  //   name: "Mock-Meet",
  //   description: "A web application to schedule meets, interviews.",
  //   publicProject: true,
  //   gitRepoLink: "https://github.com/deekshith1856/autocv.git",
  //   websiteLink: "",
  // },
  // {
  //   imgSrc: "",
  //   name: "Employee Management App",
  //   description:
  //     "A web application through which you can keep track of employees leaves, and their work",
  //   publicProject: true,
  //   gitRepoLink: "https://github.com/deekshith1856/autocv.git",
  //   websiteLink: "",
  // },
  {
    imgSrc: "/public/projects/WeChat.png",
    name: "WeChat",
    description:
      "A web application through which you can make online chat rooms",
    publicProject: true,
    gitRepoLink: "https://github.com/deekshith1856/autocv.git",
    websiteLink: "",
  },
];
