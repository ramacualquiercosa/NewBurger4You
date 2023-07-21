import React from "react";
import CarouselProducts from "../components/CarouselProducts";
import CarouselPromos from "../components/CarouselPromos";
import LayoutInicial from "../components/LayoutInicial";
import FormContact from "../components/FormContact";
import HomeLayout from "../components/HomeLayout";

function Home () {
return (
    <>
        <HomeLayout/>
        <LayoutInicial/>
        <CarouselProducts/>
        <CarouselPromos/>
        <FormContact/>
        {/* <CarouselPrueba/> */}
    </>
)
}

export default Home