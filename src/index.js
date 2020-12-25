import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./scss/base.scss";
import "./scss/_fonts.scss";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCkO2rDclu5KRl6qm3rNPFmmWqNCvO25aU",
  authDomain: "react-pizza-db.firebaseapp.com",
  databaseURL: "https://react-pizza-db-default-rtdb.firebaseio.com",
  projectId: "react-pizza-db",
  storageBucket: "react-pizza-db.appspot.com",
  messagingSenderId: "441705601465",
  appId: "1:441705601465:web:dc802850b7ceff36f33e68",
  measurementId: "G-MCQF6S1VQW"
};

firebase.initializeApp(firebaseConfig);
// firebase.analytics();


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
