import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';

import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Card from './components/card/card';
import NewCard from './components/card/CreateNew';
import Login from './components/user/login';
import Register from './components/user/register';

import data from './data';

const header = document.getElementById('title');
const nav = document.getElementById('nav');
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
  },
  card(id) {
    console.log('hello father');
    ReactDom.render(<Header />, header);
    ReactDom.render(<Nav />, nav);
    ReactDom.render(<Card card={data[id]}/>, main);
  },
  newCard() {
    console.log('here i am in');
    ReactDom.render(<Header />, header);
    ReactDom.render(<Nav />, nav);
    ReactDom.render(<NewCard />, main);
  },
  login() {
    console.log('camp granada');
    ReactDom.render(<Header />, header);
    ReactDom.render(<Nav />, nav);
    ReactDom.render(<Login />, main);
  },
  register() {
    console.log('the end');
    ReactDom.render(<Header />, header);
    ReactDom.render(<Nav />, nav);
    ReactDom.render(<Register />, main);

  }
});

let router = new Router();

export default router;
