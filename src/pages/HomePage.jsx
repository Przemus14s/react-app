import Navbar from "../components/custom/Navbar"
import ScrapCard from "../components/custom/ScrapCards"
import useGetScraps from "../services/useGetScraps"
import { SimpleGrid } from "@chakra-ui/react";

const HomePage = () => {

const {data} = useGetScraps();
const scraps = data?.data;
console.log(scraps)

  return (
    <div>
      <Navbar/>
      <SimpleGrid columns={3} spacing={5} p={5}>   
        {scraps?.map((scrap) => <ScrapCard title={scrap.title} image={scrap.image} date={scrap.date} link={scrap.link} id={scrap.id}/>)}
      </SimpleGrid>
    </div>
  )
}

export default HomePage
