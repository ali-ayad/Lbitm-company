import React from "react";


import Header from "../components/Header";
import LazyShow from "../components/LazyShow";
import MainHero from "../components/MainHero";
import MainHeroImage from "../components/MainHeroImage";
import Pricing from "../components/gallery";
import Product from "../components/Product";
import Team from "../components/Teams";
import About from "../components/About";
import Contect from "../components/Contect";

const App = () => {
  return (
    <div className={`bg-background grid gap-y-16 overflow-hidden`}>
      <div className={`relative bg-background`}>
        <div className="max-w-[84rem] mx-auto">
          <div
            className={`relative z-10 pb-8 bg-background sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32`}
          >
            <Header />
            <MainHero />
          </div>
        </div>
        <MainHeroImage />
      </div>

      <LazyShow>
        <>
          <Product />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <About />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Team />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <>
          <Contect />
        </>
      </LazyShow>
   
    </div>
  );
};

export default App;
