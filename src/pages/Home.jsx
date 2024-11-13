import Footer from "../components/Footer";
import Commingsoonsection from "../components/Home/Commingsoonsection";
import PodcastComp from "../components/Home/PodcastComp";
import ReelsComp from "../components/Home/ReelsComp";
import TitleHead from "../components/TitleHead";

export default function Home() {
  return (
    <>
      <Commingsoonsection />
      <TitleHead title={"Quickly"} />
      <ReelsComp />
      <TitleHead title={"Podcasts"} />
      <PodcastComp />
      <Footer />
    </>
  );
}
