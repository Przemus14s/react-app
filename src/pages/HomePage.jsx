import { useEffect, useState } from "react";
import Navbar from "../components/custom/Navbar"
import ScrapCard from "../components/custom/ScrapCards"
import useGetScraps from "../services/useGetScraps"
import { SimpleGrid, Skeleton, Box } from "@chakra-ui/react";

const HomePage = () => {
  const { data, isLoading } = useGetScraps();
  const [showData, setShowData] = useState(false);
  const scraps = data?.data;

  useEffect(() => {
    if (!isLoading) {
      const timeout = setTimeout(() => {
        setShowData(true);
      }, 1000); 

      return () => clearTimeout(timeout);
    }
  }, [isLoading]);

  return (
    <div>
      <Navbar />

      <SimpleGrid columns={3} spacing={5} p={5}>
        {isLoading || !showData
          ? Array.from({ length: 6 }).map((_, index) => (
              <Box key={index} maxW="md">
                <Skeleton height="200px" mb="4" />
                <Skeleton height="20px" mb="2" />
                <Skeleton height="20px" width="60%" />
              </Box>
            ))
          : scraps?.map((scrap) => (
              <ScrapCard
                key={scrap.id}
                title={scrap.title}
                image={scrap.image}
                date={scrap.date}
                link={scrap.link}
                id={scrap.id}
              />
            ))}
      </SimpleGrid>
    </div>
  );
};

export default HomePage;
