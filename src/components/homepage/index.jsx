import { useState } from "react";
import Layout from "../shared/layout";
import Hero from "./hero";
import Analytics from "./analytics";
import Courses from "./courses";
import Modal from "../shared/modal";
import Button from "../shared/button";

const Homepage = () => {
  const [open, setOpen] = useState(false);

  return (
    <Layout>
      <Hero />
      <Analytics />
      <Courses />

      <Button onClick={() => setOpen(true)}>Try Modal</Button>

      <Modal open={open} close={() => setOpen(false)} title="Welcome!">
        <p>This is your modal content area.</p>
      </Modal>
    </Layout>
  );
};

export default Homepage;
