import React, { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'


const Addquery = () => {

    const {id}=useParams();
    const [department, setDepartment] = useState("");
    const [subject, setSubject] = useState("")
    const [query, setQuery] = useState("");
    console.log(department, subject, query);
    
    const navigate = useNavigate();
    const regcode = async (e) => {
        e.preventDefault();
        const user = { department, subject, query,id};
        const response = await fetch(`http://localhost:8000/addquery`, {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json'
            },
        })
        const data = await response.json();
        if (!response.ok) {
            // console.log(data.error);
        }
        if (response.ok) {
            alert("Form Successfully Submitted");
            setDepartment("");
            setSubject("");
            setQuery("");
            navigate(`/Addquery/${id}`);
        }
    }




  return (
    <>
        
            <div className="row">
                <div className="col-sm-12">
                    <div className='row dash_nav'>
                    <div className='col-sm-12 bg-dark'>
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
                       
                        <div className="col-10 user h-100 viewcust">
                            <div className='row'>
                                <div className='col-8 mx-auto my-3'>
                                <form onSubmit={regcode} className='p-5 shadow-lg rounded-5 w-100 mx-auto blur text-light   '>
                                <div className="row">
                                    <div className="col-md-6">
                                    <div className='back fs-1'><a href="/" ><i class="fa-solid fa-circle-left"></i></a> <span className='ps-5'>Add Query</span></div>
                                        
                                    <br />
                                    <br />
                                    Department :
                                    <input className='form-control' value={department} onChange={(e) => setDepartment(e.target.value)} type='text' name="deparment" />
                                    <input className='form-control' value={id}  type='hidden' name="deparment" />
                                    <br />
                                    <br />
                                    Subject :
                                    <input className='form-control' type='text' name="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />
                                    <br />
                                    <br />
                                   
                                   
                                    <div class="mb-3">
                                        <label for="exampleFormControlTextarea1" class="form-label">Query</label>
                                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder='Write Your Query Here' value={query} onChange={(e)=>setQuery(e.target.value)}></textarea>
                                    </div>
                                    <button className='form-control btn btn-primary' type="submit">Submit</button>
                                </div>
                                <div className='col-md-6 my-auto rounded-5 p-3 shadow-lg '>
                                    <img className='w-100 rounded-5 ' src="https://img.freepik.com/free-photo/question-mark-query-information-support-service-graphic_53876-125029.jpg" />
                                </div>
                                </div>
                            </form>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
  )
}

export default Addquery