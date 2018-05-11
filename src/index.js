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

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ reducer, routing: routerReducer }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

const history = syncHistoryWithStore(createBrowserHistory(), store);
sagaMiddleware.run(rootSaga);

const routes = [
  {
    path: "/MusicPlayer",
    sidebar: () => <h2>prodomo</h2>,
    main: () => <MusicPlayer />
  },
  {
    path: "/",
    sideber: () => <h2>mymusic</h2>,
    main: () => <MyMusicList />
  }
];

ReactDOM.render(
  <Provider store={store}>
    <div>
      <header className="header" />
      <Router history={history}>
        <div className="contents">
          <ul className="sidebar">
            <li>
              <Link to="/">myMusic</Link>
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
