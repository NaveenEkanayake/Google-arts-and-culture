import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import StyleCard from "../Components/StyleCard/StyleCard";
import TodayActivity from "../Components/Today's Activity/TodayActivity";
import TodayPick from "../Components/Today'spick/TodayPick";
import AbstractCard from "../Components/MakeitAbstract/Abstractcard";
import LucasCranach from "../Components/LucasCranach/LucasCranach";
import GeomatricAbstraction from "../Components/GeomatricAbstraction/GeomatricAbstraction";
import FollowUsCard from "../Components/FollowUsCard/FollowUsCard";
import Carasoule from "../Components/Carasoule/Carasoule";
import CastoffCard from "../Components/CastOffCard/CastoffCard";

const Home = () => {
  return (
    <>
      <Navbar />
      <StyleCard />
      <TodayActivity />
      <TodayPick />
      <AbstractCard />
      <LucasCranach />
      <GeomatricAbstraction />
      <FollowUsCard />
      <Carasoule />
      <CastoffCard />
    </>
  );
};

export default Home;
