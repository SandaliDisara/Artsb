import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TexturedSection from '@/components/TexturedSection';
import SelectedWork from '@/components/SelectedWork';
import AboutArtist from '@/components/AboutArtist';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TexturedSection />
      <SelectedWork />
      <AboutArtist />
      <Contact />

    </>
  );
}
