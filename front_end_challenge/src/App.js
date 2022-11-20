import React, { Fragment, useState } from "react";

import { Route, Redirect, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Item from "./components/Item/Item";
import Description from "./components/Description/Description";
import BreadCrumbC from "./components/BreadCrumb/BreadCrumbC";

function App() {
  // Seria melhor um context, para todos os efeitos. Como o carrinho é, no fundo, só o counter, para poupar trabalho optei por esta opção
  // Para além disso, caso fosse uma app maior, teria de realizar renders desnecessários da app, o que seria ineficiente

  const [counter, setCounter] = useState(0);
  return (
    <Fragment>
      <Header carCounter={counter} />
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to="/item_list" />
          </Route>
          <Route exact path="/item_list">
            <BreadCrumbC />
            <center>
              <Item />
            </center>
          </Route>
          <Route path="/item_list/description/:id">
            <BreadCrumbC />
            <Description setCounter={setCounter} />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
