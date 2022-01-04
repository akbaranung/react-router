import React from "react";
import MainLayout from "../layouts/MainLayout";

const Contact = () => {
  return (
    <MainLayout>
      <div style={container}>
        <h1>Contact Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          veritatis hic iure voluptatem saepe esse, quisquam fugiat optio magnam
          molestiae voluptatibus aliquam iste eos, nesciunt deserunt est,
          numquam id. Porro, culpa a, magni eos neque praesentium possimus totam
          vitae explicabo in odit quas? Ducimus, voluptatem minus itaque
          pariatur qui sequi.
        </p>
      </div>
    </MainLayout>
  );
};

export default Contact;

const container = {
  paddingLeft: "6rem",
};
