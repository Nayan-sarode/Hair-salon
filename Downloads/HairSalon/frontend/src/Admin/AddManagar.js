import { useRef, useState } from "react"
import WebAdminAPI ,  { urls } from "../Services/WebAdminAPI"
import { useDispatch, useSelector } from "react-redux"
import { addManager } from "../redux/ManagerSlice"


export default function AddManager()
{ 
    const token = useSelector(state=>state.userInfo.value)
    const dispatch = useDispatch()
    const [msg , setMsg] = useState("")


    const fname = useRef()
    const lname = useRef()
    const emailbox = useRef()
    const passbox = useRef()
    const uname = useRef()
    const staffbox = useRef()
    const activebox = useRef()
    const datebox = useRef()

    const add =async(event)=>
    { event.preventDefault()
        setMsg("")
        
        var obj = {
            first_name: fname.current.value,
            last_name: lname.current.value,
            username: uname.current.value,
            email: emailbox.current.value,
            is_satff: staffbox.current.value,
            is_active: activebox.current.value,
            date_joined: datebox.current.value,
            password: passbox.current.value
        }
            const response = await WebAdminAPI.postAPICall(urls.USER , obj , token.token)
            console.log("response", response)
            if (response) {
                const d = dispatch(addManager(response))
                console.log(d)
                setMsg(response.statusText)
                event.target.reset()
            }


    }

 return<div> 
        <h1 style={{textAlign:'center' , color:"Dark", backgroundColor:'#ff9999'}}>AddManager</h1>
    

         <div style={{ backgroundImage: 'url("salonman1.jpg")', backgroundSize: "100%" }}>


<div className="container" >
    <div className="row">
        <div className="col-md-12 offset-md-1" >
            <div className="login-form col-md-12 offset-md-3">
                <br />
                <br />
                <br />
                
                <h2 className=" text-white" style={{ backgroundColor: "transparent" }}> &nbsp; &nbsp; Add Manager</h2>
                <form style={{ backgroundColor: "transparent" }} onSubmit={add} >
                    <div className="form-group col-xl-4 col-lg-4 mt-8">
                    
                        <div className="form-group">
                            <label for="username" className="text-white"><b>First Name</b></label>
                            <input type="text" className="form-control" ref={fname} placeholder="Enter your First Name" required />
                        </div>

                        <div className="form-group">
                            <label for="username" className="text-white"><b>Last Name</b></label>
                            <input type="text" className="form-control" ref={lname} placeholder="Enter your Last Name" required />
                        </div>

                        <div className="form-group">
                            <label for="username" className="text-white"><b>Username</b></label>
                            <input type="text"  className="form-control" ref={uname} placeholder="Enter your UserName" required />
                        </div>

                        <div className="form-group">
                            <label for="username" className="text-white"><b>Email</b></label>
                            <input type="text"  className="form-control" ref={emailbox} placeholder="Enter your email address" required />
                        </div>
                        <div className="form-group">
                            <label for="password" className="text-white"><b>Password</b></label>
                            <input type="password"  className="form-control" ref={passbox} placeholder="Enter your password" required />
                        </div>
                        
                                <label for="password" className="text-white"><b>Staff</b></label>
                                            <select className="form-control " ref={staffbox} >  
                                                <option >is_staff</option>

                                                <option value="true">True</option>
                                                <option value="false">false</option>
                                            </select>
                                    
                                       
                                        <label for="password" className="text-white"><b>Active</b></label>
                                            <select className="form-control"  ref={activebox} >
                                                <option >is_active</option>

                                                <option value="true">True</option>
                                                <option value="false">false</option>
                                            </select>
                                        
                                   

                                    <div className=" row mt-4">
                                        <div className="control-group col-md-8">
                                            <label style={{color:"white"}}>Date Joined</label>
                                            <input type="date" ref={datebox} className="form-control" placeholder="Date Joined" />
                                        </div>
                                        </div>
<div>
    <br/>
                        <button type="submit" className="btn btn-info btn-block " >Add Manager</button>
                        </div>

                        <div className="control-group col-md-3">
                                            <b className="text-primary">{msg}</b>
                                        </div>

                        <br />

                        {/* <span className="text-white"><b>If You Have Not Register Please click Here : </b><Link to="/register"><b className="text-success">Register Here..</b></Link></span> */}

                     
                        <br />
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
</div>


    // </div>
}