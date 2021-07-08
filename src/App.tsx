import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import Login from "./components/Login/Login";
import "./MainStyle.scss";

function App() {
	return (
		<BrowserRouter>
			<div className="sans-serif">
				<Route path="/login" component={Login} />
				<Route path="/forgotPassword" component={ForgotPassword} />
			</div>
		</BrowserRouter>
	);
}

export default App;
