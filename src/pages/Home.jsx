import Footer from "../components/Footer";
import BestContentComp from "../components/Home/BestContentComp";
import Commingsoonsection from "../components/Home/Commingsoonsection";
import PodcastComp from "../components/Home/PodcastComp";
import ReelsComp from "../components/Home/ReelsComp";
import TitleHead from "../components/TitleHead";


export default function Home() {
  return (
    <>
     <Commingsoonsection />
     <TitleHead title={'Formation'}/>
     <ReelsComp/>
     <TitleHead title={'Podcast'}/>
     <PodcastComp />
     <TitleHead title={'Best Content'}/>
     <BestContentComp />
     <Footer/>
    </>
  )
}
