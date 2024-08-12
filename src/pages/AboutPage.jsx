import { Text, Avatar, Box } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <>
      <Box px={"90px"} py={"10"}>
        <Box fontSize={"1.5em"} fontWeight={"semibold"} pb={"4"}>
          About
        </Box>
        <Avatar size="lg" src="https://bit.ly/broken-link" />

        <Box py={"4"}>
          Hi, my name is Shuying, and I am based in Australia. My passion for
          both art and science led me to study Architecture Design, where I
          gained a deep appreciation for the intersection of creativity and
          logic. My exposure to various software tools and a growing interest in
          coding during my studies opened the door to web development, where I
          discovered the beauty of logic and efficiency.
          <br /> <br /> I have recently graduated with a certificate in
          Full-Stack Web Development, where I further deepened my understanding
          of both front-end and back-end technologies. I am excited about the
          endless possibilities of learning and collaboration in the field. As I
          continue to build my skills, I am eager to contribute to innovative
          projects and work alongside fellow developers to create impactful web
          solutions.
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
