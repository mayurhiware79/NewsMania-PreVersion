// DEFAULT LANDING PAGE
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./i18n";
import Header from "./components/custom/Header";
import Hero from "./components/custom/Hero";
import Footer from "./components/custom/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-16">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default App;
