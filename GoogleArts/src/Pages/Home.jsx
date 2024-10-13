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
import RoarCard from "../Components/HearThemRoar/RoarCard";
import StepinsdeGallery from "../Components/StepinsideGallery/StepinsdeGallery";
import OnlineExhibit from "../Components/OnlineExhibit/OnlineExhibit";
import Festivels from "../Components/Festivels/Festivels";
import DiscoverArtist from "../Components/DiscoverArtist/DiscoverArtist";
import KeepExploring from "../Components/keepExploring/KeepExploring";

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
      <RoarCard />
      <StepinsdeGallery />
      <OnlineExhibit />
      <Festivels />
      <DiscoverArtist />
      <KeepExploring />
    </>
  );
};

export default Home;
