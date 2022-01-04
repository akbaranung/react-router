import React from "react";
import MainLayout from "../layouts/MainLayout";
import {Link} from 'react-router-dom'

class Detail extends React.Component {
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
    data : ""
  };

  componentDidMount(){
    const id = this.props.match.params.id;
    const data = this.state.skills.find(item => item.id === id);
    this.setState({data})
  }
  render() {
    const {data} = this.state
    return (
      <MainLayout>
        <div style={container}>
          <h1>{data.name}</h1>
          <div style={box}>
            <img src={data.image} alt={data.image} style={img}/>
            <div>
              <p>{data.description}</p>
              <Link to="/">Back home</Link>
            </div>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default Detail;

const container = {
  padding: "0 6rem",
};

const img = {
  width: "15rem",
  height : "20rem",
  marginRight : "2rem"
}

const box = {
  display: "flex"
}
