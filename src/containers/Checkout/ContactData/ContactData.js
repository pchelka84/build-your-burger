import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.css";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios-orders";
import Input from "../../../components/UI/Input/Input";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
  };

  orderHandler = (event) => {
    event.preventDefault();
    // console.log(this.props.ingredients);

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      // for production ( price: this.state.totalPrice;): calculate it on the server because there is
      // probably there are products stored on the server there
      // to make sure that the user isn't manipulating the code.
      price: this.props.price,
      customer: {
        name: "Eve Ves",
        address: {
          street: "Beautiful Street",
          zipCode: 10011,
          country: "the U.S.",
        },
        email: "test@test.com",
      },
      deliveryMethod: "fastest",
    };
    axios
      .post("/orders.json", order) // .json required by Firebase
      .then((response) => {
        // console.log(response)
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((error) => {
        // console.log(error)
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
      <form>
        <Input
          inputtype="input"
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <Input
          inputtype="input"
          type="text"
          name="email"
          placeholder="Your Mail"
        />
        <Input
          inputtype="input"
          type="text"
          name="street"
          placeholder="Street"
        />
        <Input
          inputtype="input"
          type="text"
          name="zip"
          placeholder="Zip Code"
        />

        <Button btnType="Success" clicked={this.orderHandler}>
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Details</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
