import React from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

class Home extends React.Component {
  state = {
    skills: [
      {
        id: "1",
        name: "JavaScript",
        description: "JavaScript Description",
        image: require("../images/js.png"),
      },
      {
        id: "2",
        name: "Vue JS",
        description: "Vue Js Description",
        image: require("../images/vue.png"),
      },
      {
        id: "3",
        name: "React",
        description: "React Description",
        image: require("../images/react.png"),
      },
      {
        id: "4",
        name: "Svelte",
        description: "Svelte Description",
        image: require("../images/svelte.png"),
      },
    ],
  };
  render() {
    const { skills } = this.state;
    return (
      <MainLayout>
        <h1 style={{ paddingLeft: "6rem" }}>Home Page</h1>
        <div style={container}>
          {skills.map((item) => (
            <div key={item.id} style={card}>
              <Link to={`/detail/${item.id}`}>
                <img src={item.image} alt={item.name} style={img} />
                <h3 style={title}>{item.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </MainLayout>
    );
  }
}

export default Home;

const container = {
  display: "flex",
  padding: "0 6rem",
  justifyContent: "space-between",
};

const card = {
  width: "20%",
  height: "15rem",
};

const img = {
  width: "100%",
  height: "100%",
};

const title = {
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
};
