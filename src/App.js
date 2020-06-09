import React, { Component } from "react";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

class App extends Component {
  // testing interceptors removal when we don't need BurgerBuilder

  // state = {
  //   show: true,
  // };

  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000);
  // }

  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
        {/* <Layout>{this.state.show ? <BurgerBuilder /> : null}</Layout> */}
      </div>
    );
  }
}

export default App;
