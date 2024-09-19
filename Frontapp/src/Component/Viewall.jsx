import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Viewall = () => {
    const [data,setData] = useState([]);

    const viewall = async () => {
        const response = await fetch('http://localhost:8000/');
        const result = await response.json();
        console.log("result",result);
        if(response.ok){
            setData(result);
        }
    }
    const del = async (id)=>{
        console.log(id);
            const response = await fetch(`http://localhost:8000/${id}`,{
                method: 'DELETE',
            });
            const result = await response.json();
            if(!response.ok){
                console.log(result.error);
            }
            if(response.ok){
                console.log(result);
                viewall();
                }
    }
   
    useEffect(()=>{
        viewall();
    },[]);
    console.log(data);
  return (
    <>
     <div className="row">
                <div className="col-md-12">
                    <div className="row dash_nav">
                 <div className='col-sm-12'>
                 <nav class="navbar  navbar-dark bg-dark " aria-label="Third navbar example">

<div class="container-fluid">
  <a class="navbar-brand" href="#">
  <label for="sidnavbar"><i class="fa fa-bars"></i></label></a>
 

  <div class="navbar">
  <li class="nav-item dropdown ms-auto" style={{listStyle:"none"}}>
        <a class="nav-link text-light " href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-user bg-light text-dark p-2 rounded-circle"></i></a>
        <ul class="dropdown-menu " style={{left:"-10vw",position:"absolute"}} aria-labelledby="dropdown03">
          <li><a class="dropdown-item" href="/Loginadmin">Logout</a></li>
         
        </ul>
      </li>
  </div>
</div>
</nav>
                 </div>
                    </div>
                    <div className="row dash_main">
                    <div className='col-2 bg-dark h-100'>
                        <div class="d-flex scroll flex-column flex-shrink-0 p-3 text-white bg-dark " style={{height:"100%",overflow:"auto"}}>
    <a href="#" class="d-flex align-items-start mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
     <img src="../images/1.png" class="w-100" alt=""/>
      
    </a>
    <hr/>
    <ul class="nav nav-pills  flex-column mb-auto ">
    <li class="nav-item p-0" >
      <Link to={`/Admindash`} className="nav-link text-start" aria-current="page">
        <i class="fa-solid fa-home text-light"></i>
         <span className='text-light'> Dashboard</span> 
        </Link>
      </li>
    <li class="nav-item p-0" >
      <Link to={`/Viewall`} className="nav-link text-start" aria-current="page">
        <i class="fa-solid fa-clipboard-question text-light"></i>
         <span className='text-light'> View All User</span> 
        </Link>
      </li>
      
      <li class="nav-item p-0  text-start" >
        <Link
                className="btn text-light text-start  w-100 "
                to={`/Admin`}
              >
      <i class="fa-regular fa-eye text-light"></i> Pending Queries
              </Link>
      </li>
     
      <li class="nav-item p-0" >
      <Link
                className="btn text-light w-100  text-start"
                to={`/Admin`}
              >
                <i class="fa-solid fa-eye text-light "></i> Completed Queries
              </Link>
      </li>
      
      <li class="nav-item p-0" >
      <Link
                className="btn text-light w-100 text-start"
                to={`/Admin`}
              >
                <i class="fa-solid fa-eye-low-vision text-light"></i> Processing Queries
              </Link>
      </li>
     
                         
    </ul>
    <hr/>
    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://t4.ftcdn.net/jpg/03/90/33/43/360_F_390334321_IlWexCFcXEJOuC1nWpBrPYRjFw8kXefg.jpg" alt="" width="32" height="32" class="rounded-circle me-2"/>
        <strong>Profile</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        
        <li><hr class="dropdown-divider"/></li>
        <li><a class="dropdown-item" href="/Loginadmin">Sign out</a></li>
      </ul>
    </div>
  </div>
                        </div>
                        <div className="col-md-10 h-100" style={{backgroundColor: "#8dc6ff"}}>
                        <div className='row'>
        <h1 className='text-center p-4 text-light' style={{backgroundColor: "#22313f"}}>Customers Data</h1>
     <div className='col-md-6 mx-auto'>
         <table className='table table-dark my-5 border border-dark  border-2 ' style={{backgroundColor: "#e4f1fe"}}>
             <tr style={{backgroundColor: "#34495e"}}>
                 <th className='border border-dark text-center'>First Name</th>
                 <th className='border border-dark text-center'>Last Name</th>
                 <th className='border border-dark text-center'>Username</th>
                 <th className='border border-dark text-center'>Email</th>
                 <th className='border border-dark text-center'>Password</th>
                 <th className='border border-dark text-center'>Delete</th>
             </tr>
           {data?.map(element => (
              <tr>
                <td className='border border-dark text-center text-dark'>{element.firstname}</td>
                <td className='border border-dark text-center text-dark'>{element.lastname}</td>
                <td className='border border-dark text-center text-dark'>{element.username}</td>
                <td className='border border-dark text-center text-dark'>{element.email}</td>
                <td className='border border-dark text-center text-dark'>{element.Password}</td>
                <td className='border border-dark text-center text-dark'><Link className='btn btn-dark' onClick={()=>del(element._id)}>Delete</Link></td>
              </tr>
           ))}
         </table>
     </div>
    </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Viewall