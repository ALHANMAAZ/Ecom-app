import React from "react";
import Container from "../components/Container";
import Carousel from "../components/Carousel";
import Search from "../components/Search";
import ProductCard from "../components/ProductCards";
import Track from "../components/Track";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <Container>
      <Carousel />
      <Search />
      <ProductCard />
      <Track />
      <Testimonial />
    </Container>
  );
};

export default Home;
