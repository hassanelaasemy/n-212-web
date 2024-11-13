import Footer from "../components/Footer";
import BestContentComp from "../components/Home/BestContentComp";
import Commingsoonsection from "../components/Home/Commingsoonsection";
import FormationContent from "../components/Home/FormationContent";
import PodcastComp from "../components/Home/PodcastComp";
import ReelsComp from "../components/Home/ReelsComp";
import TaQaftBladiSection from "../components/Home/TaQaftBladiSection";
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
      <TaQaftBladiSection/>
      <Footer />
    </>
  );
}
