import React from "react";
import Header from "../components/Header";
import FeedPosts from "../components/FeedPosts";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

export default function Home(){
  return (
    <div className="home-page">
      <Helmet>
        <title>CJ Andrade / Blog</title>
      </Helmet>

      <Header />
      <main>
        <FeedPosts />
      </main>
      <Footer />
    </div>
  );
}