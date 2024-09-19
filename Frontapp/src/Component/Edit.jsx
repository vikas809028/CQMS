import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const {id} = useParams();
    const [firstname,setFirstname]=useState({ customer:[]});
    const [lastname,setLastname]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [username,setUsername]=useState("");
    const getemp = async ()=>{
        var response = await fetch(`http://localhost:8000/${id}`);
        var result = await response.json();    
   
        if(response.ok){
        console.log(result);
        setFirstname(result.firstname);
        setLastname(result.lastname);
        setEmail(result.email);
        setPassword(result.Password);
        setUsername(result.username);
        }
    }
    // console.log(firstname);
    const navigate = useNavigate();
    const editemp= async (e)=>{
        e.preventDefault();
        const updatedata = {firstname,lastname,email,password,username};
        const response = await fetch(`http://localhost:8000/${id}`,{
            method :'PATCH',
            headers :{
                'Content-Type':'application/json',
            },
            body:JSON.stringify(updatedata),
        });
        const result = await response.json();
        if(response.ok){
            console.log(result);
            alert(" updated successfully");
            navigate(`/Customer/${id}`);
        }
    }

    useEffect(()=>{
        getemp();
    },[])
  return (
    <>
                     <div className="row">
                <div className="col-sm-12">
                    <div className="row dash_nav">
                        <div className="col-sm-12">
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
                    </div>
                    </div>
                    <div className="row dash_main">
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
                        <div className='col-10 editbg h-100'>
                        <div className='row'>
        <div className='col-sm-6 mx-auto my-5
         '>
            <h3 className='my-4 text-light'><u>Upd</u>ation Form</h3>
            <form onSubmit={editemp} className='p-5 shadow-lg bg-white rounded-5'>
                Enter First Name :
                <input className='form-control' value={firstname} onChange={(e)=>setFirstname(e.target.value)} type='text' name="fname" />
                <br/>
                <br/>
                Enter Last Name :
                <input className='form-control' type='text' name="lname" value={lastname} onChange={(e)=>setLastname(e.target.value)} />
                <br/>
                <br/>
                Enter Email :
                <input className='form-control' type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                <br/>
                <br/>
                Enter password :
                <input className='form-control' type="number" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br/>
                <br/>
                Enter Username :
                <input className='form-control' type="string" name="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <br/>
                <br/>
                <button className='form-control btn btn-primary' type="submit">Submit</button>
            </form>
        </div>
    </div>
                    </div>
                    </div>

                    </>
                
  )
}

export default Edit