import React from "react";
import Layout from "../shared/layout";
import Hero from "./hero";
import Analytics from "./analytics";
import Courses from "./courses";

const Homepage = () => {
  return (
    <Layout>
      <Hero />
      <Analytics />
      <Courses />
    </Layout>
  );
}

export default Homepage;