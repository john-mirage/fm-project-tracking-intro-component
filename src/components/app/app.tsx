import Hero from "@components/Hero";
import Header from "@components/header";
import Illustration from "@components/illustration";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <>
      <Illustration class="mb-27" />
      <Header class="absolute top-38 left-0 w-full" />
      <Hero />
    </>
  );
};

export default App;
