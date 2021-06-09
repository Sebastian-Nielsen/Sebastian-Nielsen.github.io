import React, { useState } from 'react';
import {Route, Switch, useLocation} from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import Base from './components/Base';
import Toppings from './components/Toppings';
import Order from './components/Order';
import {AnimatePresence} from "framer-motion";
import Modal from "./components/modal"

function App() {
	const location = useLocation()
  const [pizza, setPizza] = useState({ base: "", toppings: [] });
	const [showModal, setShowModal] = useState(false)

  const addBase = (base) => {
    setPizza({ ...pizza, base })
  }

  const addTopping = (topping) => {
    let newToppings;
    // @ts-ignore
    if(!pizza.toppings.includes(topping)){
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter(item => item !== topping);
    }
    // @ts-ignore
    setPizza({ ...pizza, toppings: newToppings });
  }

  return (
      <>
        <Header />
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
          <Switch location={location} key={location.key}>
            <Route exact path="/base">
              <Base addBase={addBase} pizza={pizza} />
            </Route>
            <Route exact path="/toppings">
              <Toppings addTopping={addTopping} pizza={pizza} />
            </Route>
            <Route exact path="/order">
              <Order pizza={pizza} setShowModal={setShowModal} />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </AnimatePresence>
      </>
  );
}

export default App;