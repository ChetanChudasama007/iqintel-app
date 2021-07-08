import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login: React.FC = () => {
	return (
		<div className="container-fluid">
			<div className="row bac">
				<h3 className="text-white m-auto mt-5">IQintel</h3>
			</div>
			<div className="row">
				<div className="col-lg-4 col-md-4 col-sm-6 bg-white p-3 login m-auto mt-5">
					<form>
						<div className="form-group">
							<label>Email</label>
							<input
								type="email"
								className="form-control bg-light border-0"
								placeholder="Type email"
							/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input
								type="password"
								className="form-control bg-light border-0"
								placeholder="Password"
							/>
						</div>
						<button type="submit" className="btn btn-primary w-100 mb-3">
							Log In
						</button>
						<Link to="/forgotPassword">Forgot Password?</Link>
					</form>
				</div>
			</div>
			<div className="row bac2"></div>
		</div>
	);
};
export default Login;
