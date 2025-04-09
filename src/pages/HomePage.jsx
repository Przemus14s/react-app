import { useEffect, useState } from "react";
import Navbar from "../components/custom/Navbar";
import ScrapCard from "../components/custom/ScrapCards";
import useGetScraps from "../services/useGetScraps";
import { SimpleGrid, Skeleton, Box, Flex } from "@chakra-ui/react";

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
    <Flex direction="column" bg="gray.900" minH="100vh">
      <Navbar />

      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={5} p={6}>
        {isLoading || !showData
          ? Array.from({ length: 6 }).map((_, index) => (
              <Box
                key={index}
                maxW="md"
                bg="gray.800"
                p={4}
                borderRadius="xl"
                boxShadow="lg"
              >
                <Skeleton height="200px" mb="4" borderRadius="lg" />
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
    </Flex>
  );
};

export default HomePage;
