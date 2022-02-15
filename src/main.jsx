import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import '/src/scss/App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from '/src/pages/Header';
import Main from '/src/pages/Main';
import Footer from '/src/pages/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)
