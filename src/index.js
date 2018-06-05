import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createSagaMiddleware from "redux-saga";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import registerServiceWorker from "./registerServiceWorker";
import { composeWithDevTools } from "redux-devtools-extension";
import MusicPlayer from "./container/MusicPlayer";
import { routerReducer } from "react-router-redux";
import Authentication from "./container/Authentication";
import MyAlbum from "./container/MyAlbum";
import Management from "./container/Management";
import Home from "./container/Home";
import Search from "./container/Search";
import Artist from "./container/Artist";
import ArtistMusicPlayer from "./container/ArtistMusicPlayer";
import FaSearch from "react-icons/lib/fa/search";
import MdFace from "react-icons/lib/md/face";
import MdFilter from "react-icons/lib/md/filter";
import MdFavorite from "react-icons/lib/md/favorite";
import FaSignIn from "react-icons/lib/fa/sign-in";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ rootReducer, routing: routerReducer }),
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

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
  },
  {
    path: "/Management",
    main: () => <Management />
  },
  {
    path: "/Search",
    main: () => <Search />
  },
  {
    path: "/Artist",
    main: () => <Artist />
  },
  {
    path: "/ArtistMusicPlayer",
    main: () => <ArtistMusicPlayer />
  }
];

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router>
        <div className="contents">
          <ul className="sidebar">
            {sessionStorage.getItem("user") ? (
              <div className="header-profileImageBox">
                <img
                  className="header-profileImage"
                  src={sessionStorage.getItem("imageUrl")}
                  alt=""
                />
                <div className="header-profileName">
                  {sessionStorage.getItem("userName")}
                </div>
              </div>
            ) : null}
            {sessionStorage.getItem("user") ? null : (
              <li>
                <Link to="/">
                  <FaSignIn className="sidebar-icon" />ログインする
                </Link>
              </li>
            )}
            {sessionStorage.getItem("user") ? (
              <li>
                <Link to="/Artist">
                  <MdFace className="sidebar-icon" />アーティスト(β)
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/Artist">
                  <MdFace className="sidebar-icon" />アーティスト(β)
                </Link>
              </li>
            )}
            {sessionStorage.getItem("user") ? (
              <li>
                <Link to="/Home">
                  <MdFilter className="sidebar-icon" />アルバム
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/Home">
                  <MdFilter className="sidebar-icon" />アルバム
                </Link>
              </li>
            )}
            {sessionStorage.getItem("user") ? (
              <li>
                <Link to="/Myalbum">
                  <MdFavorite className="sidebar-icon" />マイアルバム
                </Link>
              </li>
            ) : (
              <li>
                <MdFavorite className="sidebar-icon" />マイアルバム
              </li>
            )}
            {sessionStorage.getItem("user") ? (
              <li>
                <Link to="/Search">
                  <FaSearch size="15px" className="sidebar-icon" />検索
                </Link>
              </li>
            ) : (
              <li>
                <FaSearch size="15px" className="sidebar-icon" />検索
              </li>
            )}
            {sessionStorage.getItem("user") ? (
              <li>
                <MdFilter className="sidebar-icon" />使い方(準備中)
              </li>
            ) : null}
            {sessionStorage.getItem("user") ===
            "NA3Y0JNDT8T0Sr2iMDYVpvkSFD83" ? (
              <li>
                <Link to="/Management">マネジメント</Link>
              </li>
            ) : (
              <div />
            )}
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
