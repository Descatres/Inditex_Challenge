import React, { Fragment } from "react";

import { Route, Redirect, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Item from "./components/Item/Item";
import Search from "./components/Search/Search";
import Description from "./components/Description/Description";
import BreadCrumbC from "./components/BreadCrumb/BreadCrumbC";

// TODO:
// Adicionar Link ou NavLink na página das descriptions para voltar para a lista de produtos (/item_list)
// https://www.youtube.com/watch?v=kmi4W8AxgQo&list=PLjZqtNyxmdk876ibJWatbc6bUDYsnzB6t&index=250&ab_channel=TheLoopco.

function App() {
  return (
    <Fragment>
      <Header />

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
            <Description />
          </Route>
        </Switch>
      </main>
    </Fragment>
  );
}

export default App;
