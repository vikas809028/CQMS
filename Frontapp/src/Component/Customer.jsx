import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Customer = () => {
    const navigate = useNavigate();
    const [customer, setCustomer] = useState({});
    const {id}=useParams();
    const viewcust= async ()=>{
        console.log(id);
        const response = await fetch(`http://localhost:8000/${id}`);
         const result=await response.json();
        if(response.ok){
            setCustomer(result);
            console.log(customer)
        }
        if(!response.ok){
            alert("Customer not found");
            navigate('/Login')
        }
    }
    useEffect(()=>{
        viewcust(); 
    },[])
    return (
        <>
        
            <div className="row">
                <div className="col-sm-12">
                    <div className='row dash_nav'>
                        <div className='col-sm-12'>
                        <nav class="navbar  navbar-dark bg-dark " aria-label="Third navbar example">

<div class="container-fluid">
  <a class="navbar-brand" href="#">
  <label for="sidnavbar"><i class="fa fa-bars"></i></label></a>
 

  <div class="navbar">
  <li class="nav-item dropdown ms-auto" style={{listStyle:"none"}}>
        <a class="nav-link text-light " href="#" id="dropdown03" data-bs-toggle="dropdown" aria-expanded="false"><i class="fa fa-user bg-light text-dark p-2 rounded-circle"></i></a>
        <ul class="dropdown-menu " style={{left:"-10vw",position:"absolute"}} aria-labelledby="dropdown03">
          <li><a class="dropdown-item" href="/login">Logout</a></li>
         
        </ul>
      </li>
  </div>
</div>
</nav>
                        </div>
                    </div>
                    <div className='row dash_main'>

                    <div className='col-2 bg-dark h-100'>
                        <div class="d-flex scroll flex-column flex-shrink-0 p-3 text-white bg-dark " style={{height:"100%",overflow:"auto"}}>
    <a href="#" class="d-flex align-items-start mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
     <img src="../images/1.png" class="w-100" alt=""/>
      
    </a>
    <hr/>
    <ul class="nav nav-pills flex-column mb-auto ">
      <li class="nav-item p-0" >
        <Link to={`/Customer/${id}`} className="nav-link  text-start btn btn-primary" aria-current="page">
         <i class="fa fa-home text-light"></i>
         <span className='text-light'> Dashboard</span> 
        </Link>
      </li>
      <li class="nav-item p-0" >
        <Link to={`/Addquery/${id}`} className="nav-link text-start" aria-current="page">
        <i class="fa-solid fa-clipboard-question text-light"></i>
         <span className='text-light'> Add Query</span> 
        </Link>
      </li>
      <li class="nav-item p-0" >
      <Link  to={`/Viewpquery/${id}`} className='nav-link text-start' ><i class="fa-regular fa-eye text-light"></i> <span className='text-light'>View Pending Query</span></Link>
      </li>
      <li class="nav-item p-0" >
      <Link  to={`/Viewproquery/${id}`} className='nav-link text-start' ><i class="fa-solid fa-eye-low-vision text-light"></i> <span className='text-light'>View Processing Query</span></Link>
      </li>
      <li class="nav-item p-0" >
      <Link  to={`/Viewcompquery/${id}`} className='nav-link text-start' ><i class="fa-solid fa-eye text-light"></i> <span className='text-light'>View Completed Query</span></Link>
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
        <li><a class="dropdown-item" href="/Login">Sign out</a></li>
      </ul>
    </div>
  </div>
                        </div>
                        <div className='col-10 viewcust h-100'>
                            <div className='row h-100'>
                            <div class="col-md-5 text-center py-5 rounded-5 shadow-lg bg-blur mx-auto my-auto">
      <div class="card-body  text-light ">
        <h5 class="card-title">{customer.firstname} {customer.lastname}</h5>
        <p class="card-text">{customer.username}</p>
        <p class="card-text"><small class="text-light">Email :  {customer.email}</small></p>
        <p class="card-text"> <Link to={`/Edit/${id}`} className='btn btn-warning'>Edit Profile</Link></p>
      </div>
    </div>
                            </div>
                        
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Customer
