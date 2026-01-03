import { useState } from "react";
import Header from "../components/Core/Header/Header";
import HomeBanner from "../components/App/HomeContent/HomeBanner/HomeBanner";
import Welcome from "../components/App/HomeContent/Welcome/Welcome";
import BuyDrPepe from "../components/App/HomeContent/BuyDrPepe/BuyDrPepe";
import Discover from "../components/App/HomeContent/Discover/Discover";
import MultipleAgents from "../components/App/HomeContent/MultipleAgents/MultipleAgents";
import Tokenomics from "../components/App/HomeContent/Tokenomics/Tokenomics";
import Rewards from "../components/App/HomeContent/Rewards/Rewards";
import Levels from "../components/App/HomeContent/Levels/Levels";
import Community from "../components/App/HomeContent/Community/Community";
import Specifications from "../components/App/HomeContent/Specifications/Specifications";
import Footer from "../components/App/HomeContent/Footer/Footer";


function Home() {
  return (
    <>
      <Header />
      <HomeBanner/>
      <Welcome/>
      <BuyDrPepe/>
      <Discover/>
      <MultipleAgents/>
      <Tokenomics/>
      <Rewards/>
      <Levels/>
      <Community/>
      <Specifications/>
      <Footer/>
    </>
  );
}

export default Home;
