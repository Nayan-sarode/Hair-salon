import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import WebServices, { urls } from "../Services/WebServices";
import { userReducer } from "../redux/Slice";

export default function Register() {

    const [msg, setMsg] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // input refs
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPass = useRef();

    const registerUser = async (event) => {
        event.preventDefault();

        if (password.current.value !== confirmPass.current.value) {
            setMsg("Passwords do not match");
            return;
        }

        const newUser = {
            name: name.current.value,
            email: email.current.value,
            password: password.current.value
        };

        try {
            const response = await WebServices.postAPICall(urls.REGISTER, newUser);
            
            console.log("REGISTER RESPONSE:", response.data);

            if (response.status === 201 || response.status === 200) {
                // auto login OR redirect to login page
                navigate("/login");
            }

        } catch (error) {
            console.log(error);
            setMsg(error.response?.data?.error || "Registration failed!");
        }
    };

    return (
        <div style={{ backgroundImage: 'url("bg3.jpg")', backgroundSize: "100%" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 offset-md-12">
                        <div className="registration-form col-md-12 offset-md-12 ">
                            <br /><br /><br /><br />

                            <h2 className=" text-white">Register</h2>

                            <form onSubmit={registerUser}>
                                <div className="form-group col-xl-4 col-lg-4 mt-5">

                                    <label className="text-white"><b>Full Name</b></label>
                                    <input ref={name} type="text" className="form-control" placeholder="Enter your full name" required />

                                    <div className="form-group mt-3">
                                        <label className="text-white"><b>Email</b></label>
                                        <input ref={email} type="email" className="form-control" placeholder="Enter your email" required />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label className="text-white"><b>Password</b></label>
                                        <input ref={password} type="password" className="form-control" placeholder="Enter password" required />
                                    </div>

                                    <div className="form-group mt-3">
                                        <label className="text-white"><b>Confirm Password</b></label>
                                        <input ref={confirmPass} type="password" className="form-control" placeholder="Confirm password" required />
                                    </div>

                                    <b className="text-danger">{msg}</b>

                                    <button type="submit" className="btn btn-primary btn-block mt-3">
                                        Register
                                    </button>

                                    <span className="text-white mt-3 d-block">
                                        <b>Already registered? </b>
                                        <Link to="/login" className="text-info"><b>Login Here</b></Link>
                                    </span>

                                </div>
                            </form>

                            <br /><br /><br /><br />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
