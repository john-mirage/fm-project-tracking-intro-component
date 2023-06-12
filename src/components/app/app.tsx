import "./app.css";
import Hero from "@components/Hero";
import Header from "@components/header";
import Illustration from "@components/illustration";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="app">
      <Header class="app__header" />
      <main class="app__main">
        <Hero class="app__hero" />
        <Illustration class="app__illustration" />
      </main>
    </div>
  );
};

export default App;
