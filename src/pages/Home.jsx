import Footer from "../components/Footer";
import Commingsoonsection from "../components/Home/Commingsoonsection";
import ReelsComp from "../components/Home/ReelsComp";
import TitleHead from "../components/TitleHead";


export default function Home() {
  return (
    <>
     <Commingsoonsection />
     <TitleHead title={'Formation'}/>
     <ReelsComp/>
     <Footer/>
    </>
  )
}
