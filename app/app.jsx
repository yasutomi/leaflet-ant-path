import { render } from "react-dom";
import { connect, Provider } from "react-redux";

import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from "./store";
import "./style/app.scss";

import Header from "./modules/ui/components/containers/Header";

import { loadRepoInfo } from "./modules/core/actions/github";
import { Component as Home} from "./modules/home/index";

store.dispatch(loadRepoInfo());

const App = connect()(() => (
  <Router >
    <div id="react-app">
      <Header />
      <div className="section" >
        <Route exact path={app.path} component={Home} />
      </div >
      <div className="footer" ></div >
    </div >
  </Router >
));

render(
  <Provider store={store} >
    <App />
  </Provider >,
  document.getElementById("app")
);