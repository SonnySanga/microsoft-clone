import Image from "next/image";
import Header from "./components/Header";
import Caresoul from "./components/Caresoul";
import Searvices from "./components/Searvices";
import CardItems from "./components/CardItems";
import Business from "./components/Business";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Caresoul />
      <Searvices />
      <CardItems />
      <Business />
      <SocialMedia />
      <Footer />
    </main>
  );
}
