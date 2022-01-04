import React from "react";
import MainLayout from "../layouts/MainLayout";
const About = () => {
  return (
    <MainLayout>
      <div style={container}>
        <h1>About Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
          quibusdam molestias enim quas nulla saepe tempore eveniet illo tempora
          praesentium est minima aut, excepturi animi facilis mollitia
          perspiciatis deserunt modi.
        </p>
      </div>
    </MainLayout>
  );
};

export default About;

const container = {
  paddingLeft: "6rem",
};
