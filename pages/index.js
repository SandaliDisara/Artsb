import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import TexturedSection from '@/components/TexturedSection';
import SelectedWork from '@/components/SelectedWork';
import AboutArtist from '@/components/AboutArtist';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <TexturedSection />
      <SelectedWork />
      <AboutArtist />

    </>
  );
}
