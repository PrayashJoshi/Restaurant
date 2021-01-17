import React from "react";
import { render } from "react-dom";
import { MenuDatabase } from "../components/menu-database/menuDatabase";
import { Cart } from "../components/menu-database/Cart";
import { CartProvider } from "../components/menu-database/CartContext";
import {Jumbotron} from 'react-bootstrap'
import Fade from 'react-reveal/Fade';
import '../components/menu-database/box.css'

export default function FMenu (){
  return (
    <main className="container">
    <CartProvider>
    <Fade bottom cascade >

          <Jumbotron class="grid" >
                      <h1>Featured Dishes</h1>
                      <p>
                      Adored by customers travelling in from all around the world, these are handcrafted with love, care & expertise from the Chef to emphasize the unique taste,culture and traditions of its unique origins.  </p>
                      </Jumbotron>
          <section className="container" >
                    <div class="card-deck">

                      
        <MenuDatabase />

        </div>
         </section>
         <div className="cartButton">
        <Cart />
        </div>

          </Fade>
    </CartProvider>
      </main>
  );
};

render(<fMenu />, document.getElementById("root"));
