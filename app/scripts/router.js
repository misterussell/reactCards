import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import CardNavi from './components/nav/cardNav';
import Card from './components/card/card';
import NewCard from './components/card/CreateNew';
import Login from './components/user/login';
import Register from './components/user/register';
import CreateButton from './components/card/Button';

import data from './data';

const header = document.getElementById('title');
const nav = document.getElementById('nav');
const cardNav = document.getElementById('cardNav');
const main = document.getElementById('main');
const cardData = data;

const Router = Backbone.Router.extend({
  routes: {
    ''          : 'home',
    'card/:id'  : 'card',
    'createCard': 'newCard',
    'login'     : 'login',
    'register'  : 'register'
  },
  home() {
    console.log('hello mother');
    ReactDom.render(<Header />, header);
    ReactDom.render(<Nav />, nav);
    ReactDom.render(<CardNavi />, cardNav);
    ReactDom.render(<CreateButton />, main);
  },
  card(id) {
    console.log('hello father');
    ReactDom.render(<Header />, header);
    ReactDom.render(<Nav />, nav);
    ReactDom.render(<Card card={data[id]}/>, main);
    cardNav.innerHTML = null;
  },
  newCard() {
    console.log('here i am in');
    ReactDom.render(<Header />, header);
    ReactDom.render(<Nav />, nav);
    ReactDom.render(<NewCard />, main);
    cardNav.innerHTML = null;
  },
  login() {
    console.log('camp granada');
    ReactDom.render(<Header />, header);
    ReactDom.render(<Nav />, nav);
    ReactDom.render(<Login />, main);
    cardNav.innerHTML = null;
  },
  register() {
    console.log('the end');
    ReactDom.render(<Header />, header);
    ReactDom.render(<Nav />, nav);
    ReactDom.render(<Register />, main);
    cardNav.innerHTML = null;

  }
});

let router = new Router();

export default router;
