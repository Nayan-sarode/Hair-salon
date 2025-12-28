import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import WebServices, { urls } from "../Services/WebServices";
import { userReducer } from "../redux/userSlice";

export default function Login() {

    const [msg, setMsg] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const email = useRef();
    const password = useRef();

    const loginUser = async (event) => {
        event.preventDefault();

        const loginData = {
            email: email.current.value,
            password: password.current.value
        };

        try {
            const response = await WebServices.postAPICall(urls.LOGIN, loginData);

            if (response.status === 200) {
                const userData = {
                    token: response.data.token,
                    role: response.data.user.role,
                    isLogin: true
                };

                // Save to Redux
                dispatch(userReducer(userData));

                // Save to localStorage
                localStorage.setItem("userData", JSON.stringify(userData));

                if (userData.role === "admin") {
                    navigate("/admin");
                } else if (userData.role === "client") {
                    navigate("/services");
                } else {
                    navigate("/error");
                }
            }


        } catch (err) {
            console.log(err);
            setMsg("Invalid email or password");
        }
    };

    return (
        <div style={{ backgroundImage: 'url("bg4.jpg")', backgroundSize: "100%" }}>

            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <div className="login-form col-md-12">
                            <br /><br /><br /><br /><br /><br />

                            <h2 className="text-white">Login</h2>

                            <form onSubmit={loginUser} style={{ backgroundColor: "transparent" }}>
                                <div className="form-group col-xl-4 col-lg-4 mt-5">

                                    <div className="form-group">
                                        <label className="text-white"><b>Email</b></label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            ref={email}
                                            placeholder="Enter email"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="text-white"><b>Password</b></label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            ref={password}
                                            placeholder="Enter password"
                                            required
                                        />
                                    </div>

                                    <button type="submit" className="btn btn-success btn-block">Login</button>

                                    <br />
                                    <b className="text-danger">{msg}</b>

                                    <span className="text-white">
                                        <b>Don't have an account? </b>
                                        <Link to="/register">
                                            <b className="text-success">Register Here</b>
                                        </Link>
                                    </span>

                                    <br /><br /><br />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}
