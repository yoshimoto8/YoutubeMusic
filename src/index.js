import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import rootSaga from "./sagas";
import registerServiceWorker from "./registerServiceWorker";
import { composeWithDevTools } from "redux-devtools-extension";
import MusicPlayer from "./container/MusicPlayer";
import MyMusicList from "./container/MyMusicList";
import { syncHistoryWithStore, routerReducer } from "react-router-redux";
import Authentication from "./container/Authentication";
import MakeAlbum from "./container/MakeAlbum";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ reducer, routing: routerReducer }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const history = syncHistoryWithStore(createBrowserHistory(), store);
sagaMiddleware.run(rootSaga);

const routes = [
  {
    path: "/Authentication",
    main: () => <Authentication />
  },
  {
    path: "/MusicPlayer",
    main: () => <MusicPlayer />
  },
  {
    path: "/",
    main: () => <MyMusicList />
  },
  {
    path: "/make",
    main: () => <MakeAlbum />
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
                <Link to="/Authentication">ログイン</Link>
              </li>
            )}
            <li>
              <Link to="/">マイミュージック</Link>
            </li>
            <li>
              <Link to="/make">アルバムを作る</Link>
            </li>
          </ul>
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
