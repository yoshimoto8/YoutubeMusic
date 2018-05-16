import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import registerServiceWorker from "./registerServiceWorker";
import { composeWithDevTools } from "redux-devtools-extension";
import MusicPlayer from "./container/MusicPlayer";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import Authentication from "./container/Authentication";
import MyAlbum from "./container/MyAlbum";
import Home from "./container/Home";
import GithubCorner from "react-github-corner";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ rootReducer, routing: routerReducer }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
const history = syncHistoryWithStore(createBrowserHistory(), store);

const routes = [
  {
    path: "/",
    main: () => <Authentication />
  },
  {
    path: "/MusicPlayer",
    main: () => <MusicPlayer />
  },
  {
    path: "/Myalbum",
    main: () => <MyAlbum />
  },
  {
    path: "/Home",
    main: () => <Home />
  }
];

ReactDOM.render(
  <Provider store={store}>
    <div>
      <header className="header" />
      <Router history={history}>
        <div className="contents">
          <ul className="sidebar">
            {sessionStorage.getItem("user") ? (
              <div />
            ) : (
              <li>
                <Link to="/">ログイン</Link>
              </li>
            )}
            <li>
              <Link to="/Home">Home</Link>
            </li>
            {sessionStorage.getItem("user") ? (
              <li>
                <Link to="/Myalbum">Myalbum</Link>
              </li>
            ) : (
              <div>Myalbum</div>
            )}
          </ul>
          <GithubCorner
            href="https://github.com/yoshimoto8/Pomodoro"
            bannerColor="#2BA0A0"
            octoColor="#272727"
          />
          {routes.map((route, index) => (
            <Route exact key={index} path={route.path} component={route.main} />
          ))}
        </div>
      </Router>
    </div>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
