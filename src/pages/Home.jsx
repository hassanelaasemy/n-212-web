import Footer from "../components/Footer";
import BestContentComp from "../components/Home/BestContentComp";
import Commingsoonsection from "../components/Home/Commingsoonsection";
import Event from "../components/Home/Event";
import PodcastComp from "../components/Home/PodcastComp";
import ReelsComp from "../components/Home/ReelsComp";
import Speakers from "../components/Home/Speakers";
import FormationContent from "../components/Home/FormationContent";
import TaQaftBladiSection from "../components/Home/TaQaftBladiSection";
import Event from "../components/Home/Event";
import Speakers from "../components/Home/Speakers";
import TitleHead from "../components/TitleHead";

export default function Home() {
  return (
    <>

         <Commingsoonsection />
      <TitleHead title={"Quickly"} />
      <ReelsComp />
      <TitleHead title={"Formation"} />
      <FormationContent />
      <TitleHead title={"Podcast"} />

      <PodcastComp />
      <TitleHead title={"Best Content"} />
      <BestContentComp />
      <TitleHead title={"Events"} />
      <Event />
      <TitleHead title={"Instructeurs"} />
      <Speakers />

      <TaQaftBladiSection />

      <Footer />
    </>
  );
}
