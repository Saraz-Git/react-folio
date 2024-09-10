import { Box, UnorderedList, ListItem, Link, Text } from "@chakra-ui/react";
const ResumePage = () => {
  return (
    <>
      <Box px={"90px"} py={"10"}>
        <Box fontSize={"1.5em"} fontWeight={"semibold"} pb={"4"}>
          Resume
        </Box>
        <Text fontSize={"0.8em"} pb={"4"}>
          Download my{" "}
          <Link href="https://docs.google.com/document/d/1jLlTpisQXwfYrXqtNX3BtcZTRx4kIupK-RECiMRHZDs/edit?usp=sharing">
            resume
          </Link>{" "}
        </Text>
        <Box fontSize={"1.1em"} fontWeight={"semibold"} pb={"4"}>
          Front-end Proficiencies
        </Box>

        <UnorderedList pl={4}>
          <ListItem>HTML</ListItem>
          <ListItem>CSS</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>jQuery</ListItem>
          <ListItem>responsive design</ListItem>
          <ListItem>React</ListItem>
          <ListItem>Bootstrap</ListItem>
        </UnorderedList>

        <Box fontSize={"1.1em"} fontWeight={"semibold"} pt={"4"} pb={"4"}>
          Back-end Proficiencies
        </Box>

        <UnorderedList pl={4}>
          <ListItem>APIs</ListItem>
          <ListItem>Node</ListItem>
          <ListItem>Express</ListItem>
          <ListItem>MySQL,Sequelize</ListItem>
          <ListItem>MongoDB,Mongoose</ListItem>
          <ListItem>REST</ListItem>
          <ListItem>GraphQL</ListItem>
        </UnorderedList>
      </Box>
    </>
  );
};

export default ResumePage;
