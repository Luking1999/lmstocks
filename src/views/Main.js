import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './styles/Main.css'

class Main extends Component {
  render() {
    return (

      <>
        <main className="contentContainerMain">
          <section className="hero-section">
            <span className="span-section">
              πHello, Welcome!
            </span>
            <h1 className="h1-section">LMStocks will help you have better inventory control! π±βπ</h1>
          </section>
        </main>
      </>
    )
  }
}

export default Main;
