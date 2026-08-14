import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WorldCupStats from "./components/WorldCupStats";
import HostCountries from "./components/HostCountries";
import CountriesSection from "./components/CountriesSection";
import WorldMap from "./components/WorldMap";
import FoodSection from "./components/FoodSection";
import MusicSection from "./components/MusicSection";
import CuriositiesSection from "./components/CuriositiesSection";
import Quiz from "./components/Quiz";
import AboutSection from "./components/AboutSection";
import SourcesSection from "./components/SourcesSection";
import Footer from "./components/Footer";
import CountryModal from "./components/CountryModal";
import InstallPwaPrompt from "./components/InstallPwaPrompt";

export default function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <>
      <a href="#inicio" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header />
      <main>
        <Hero />
        <WorldCupStats />
        <HostCountries />
        <CountriesSection onOpenCountry={setSelectedCountry} />
        <WorldMap onOpenCountry={setSelectedCountry} />
        <FoodSection />
        <MusicSection />
        <CuriositiesSection />
        <Quiz />
        <AboutSection />
        <SourcesSection />
      </main>
      <Footer />
      <CountryModal country={selectedCountry} onClose={() => setSelectedCountry(null)} />
      <InstallPwaPrompt />
    </>
  );
}
