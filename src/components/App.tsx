import Header from "./Header";
import React from "react";
import styles from "../assets/app.css";
import Hero from "./Hero";
import Info from "./Info";
import Quote from "./Quote";
import CTA from "./CTA";
import Footer from "./Footer";

const App = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Hero />
      <Info />
      <Quote />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
