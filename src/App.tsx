import Background from "./components/Background";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import JourneyTimeline from "./components/JourneyTimeline";
import Metrics from "./components/Metrics";
import SkillsMarquee from "./components/SkillsMarquee";
import StrengthsCarousel from "./components/StrengthsCarousel";
import Projects from "./components/Projects";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Background />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <JourneyTimeline />
        <Metrics />
        <SkillsMarquee />
        <StrengthsCarousel />
        <Projects />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
