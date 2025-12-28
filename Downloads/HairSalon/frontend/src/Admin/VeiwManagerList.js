import { useDispatch, useSelector } from "react-redux"
import WebAdminAPI, { urls } from "../Services/WebAdminAPI"
import { managerList } from "../redux/ManagerSlice"
import { useEffect } from "react"
import { deleteList} from "../redux/ManagerSlice"

export default function VeiwManagerList()
{
     const userData = useSelector(state=>state.userInfo.value)
     const Manager = useSelector(state=>state.managerInfo.value)
     const filterManger = Manager.filter(ob=>!ob.is_superuser)

     const dispatch = useDispatch()
     console.log(Manager)

     const ManagerList = async()=>
     {  
        const response = await WebAdminAPI.GetApiCall(urls.USER , userData.token)

        if(response.status)
        {
            const A = dispatch(managerList(response.data))
        }
     }

     const deleteItem = async(id)=>
     {
       //alert(id)
      var finalDelete = window.confirm("are you sure want to Delete the Record")
      if(finalDelete)
      {
       
        const response = await WebAdminAPI.DeleteAPICall(urls.USER+id , userData.token )
        if(response)
        {
            const List = filterManger.filter(ob => ob.id !== id)
            dispatch(deleteList(List))
        }
      }
     }
     
     useEffect(()=>
     {
        ManagerList()
    
     },[])

    return <div className="container col-md-12">
        <h1 style={{textAlign:'center', color:'blue'}}>View Manager List</h1>
          {/* <div className="col-md-4"></div> */}
                        <div className="container">
                            
                            {/* <div className="contact-form"> */}
                            <div className="table-responsive">
                                <table className="table table-striped table-border">
                                    <thead>
                                        <tr>
                                            <th>S.no</th>
                                            <th>User Name</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Password</th>
                                            <th>Joining Date</th>
                                            <th>Staff</th>
                                            <th>Active</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filterManger.map((ob, index) => <tr>
                                            <td>{index + 1}</td>
                                            <td>{ob.username}</td>
                                            <td>{ob.first_name} {ob.last_name}</td>
                                            <td>{ob.email}</td>
                                            <td>{ob.password}</td>
                                            <td>{ob.date_joined}</td>
                                            <td>{ob.is_staff}</td>
                                            <td>{ob.is_active}</td>
                                            <td><button className="btn btn-sm btn-success">Edit</button>&nbsp;
                                            <button className="btn btn-sm btn-danger" onClick={()=>deleteItem(ob.id)}>Delete</button></td>

                                        </tr>)}
                                    </tbody>
                                </table>
                            </div>
                            </div>
                            </div>        
                        
                  
                
        
        
    
}