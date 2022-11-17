import React, { Fragment } from 'react';

import { Route } from 'react-router-dom'

import Header from './components/Header/Header';
import Item from './components/Item/Item';
import Search from './components/Search/Search';
import Description from './components/Description/Description';

// TODO:
// Adicionar Link ou NavLink na página das descriptions para voltar para a lista de produtos (/item_list)
// https://www.youtube.com/watch?v=kmi4W8AxgQo&list=PLjZqtNyxmdk876ibJWatbc6bUDYsnzB6t&index=250&ab_channel=TheLoopco.

function App() {
  return (
    <Fragment>
      <Header/>
      <Search/>
      <main>
        <Route path="/item_list">
            <Item/>
        </Route>
        <Route path="/item_list/description/:id">
            <Description/>
        </Route>
      </main>

    </Fragment>
  );
}

export default App;