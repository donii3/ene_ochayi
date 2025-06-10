import Hero from "@/app/components/hero";
import Marquee from "./components/marquee";
import Title from "./components/title";
import AboutSection from "./components/about/aboutSection";
import Creativity from "./components/creativity";
import Portfolio from "./components/portfolio";
import Grid from "./components/grid";

export default function Home() {
  return (
    <div className="stg-container">
      <Hero />
      <Marquee />
      <Title />
      <AboutSection />
      <Creativity />
      <Portfolio />
      <Grid />
      <Marquee />
    </div>
  );
}