import Navbar from "../components/custom/Navbar"
import ScrapCard from "../components/custom/ScrapCards"
import useGetScraps from "../services/useGetScraps"

const HomePage = () => {

const {data} = useGetScraps();
const scraps = data?.data;
console.log(scraps)

  return (
    <div>
      <Navbar/>
      <div>
        {scraps?.map((scrap) => <ScrapCard title={scrap.title}/>)}
      </div>
    </div>
  )
}

export default HomePage
