import { delay } from "lodash";
import React from "react";
import Background from "../components/Background";
import IntroScreen from "../components/IntroScreen";
import MainMenu from "../components/MainMenu";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
    };
  }
  componentDidMount() {
    setTimeout(() => this.setState(() => ({ showMenu: true })), 5000);
  }

  render() {
    return (
      <div>
        <Background />
        {!this.state.showMenu ? <IntroScreen /> : <MainMenu />}
      </div>
    );
  }
}

export default Home;
