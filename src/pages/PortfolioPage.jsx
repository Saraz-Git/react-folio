import { Box, SimpleGrid } from "@chakra-ui/react";
import Project from "../components/Project";
const PortfolioPage = () => {
  return (
    <>
      <Box px={"90px"} py={"10"}>
        <Box fontSize={"1.5em"} fontWeight={"semibold"} pb={"4"}>
          Portfolio
        </Box>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing="40px">
          <Project
            projectImg="/1.jpg"
            projectName="Bakings"
            projectType="MERN"
            projectUrl={"https://github.com/Saraz-Git/bakings"}
          />
          <Project
            projectImg="/2.jpg"
            projectName="Inventory Management"
            projectType="MERN"
            projectUrl="https://github.com/LukeHunter1991/Inventory_Management_System"
          />
          <Project
            projectImg="/3.jpg"
            projectName="Budget Memo"
            projectType="JavaScript"
            projectUrl="https://github.com/LukeHunter1991/Budget-Memo"
          />
          <Project
            projectImg="/4.jpg"
            projectName="Weather Dashboard"
            projectType="API"
            projectUrl="https://saraz-git.github.io/weather-dashboard/"
          />
          <Project
            projectImg="/5.jpg"
            projectName="Tech Blog"
            projectType="NODE"
            projectUrl="https://github.com/Saraz-Git/tech-blog"
          />
        </SimpleGrid>
      </Box>
    </>
  );
};

export default PortfolioPage;
