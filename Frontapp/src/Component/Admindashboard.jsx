import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admindashboard = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState({});
  

  const getquer = async () => {
    const response = await fetch("http://localhost:8000/getall");
    const ress = await response.json();
    setData(ress);
    console.log(ress);
  };
  useEffect(() => {
    getquer();
  }, []);
  console.log(data);
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

            <div className="col-10 b h-100 p-5 ">
              <div className="row blur h-100 p-5 shadow-lg rounded-5 row-cols-3">
              <div className="col mx-auto">
              <div className="card card5 text-white blur bg-transparent mb-3">
                  <div className="card-header text-center">Total Query</div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      {data.allque?.length}
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col mx-auto">
              <div className="card text-white blur card1 mb-3">
                  <div className="card-header text-center">Completed Query</div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                    {data.cque?.length}
                    </h5>
                  </div>
                </div>
              
              </div>

              <div className="col mx-auto">
              <div className="card card2 text-white blur bg-transparent mb-3">
                  <div className="card-header text-center">Pending Query</div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                    {data.pque?.length}
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col mx-auto">
              <div className="card card3 text-white blur bg-transparent mb-3">
                  <div className="card-header text-center">Processing Queries</div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                    {data.proque?.length}
                    </h5>
                  </div>
                </div>
              </div>

              <div className="col mx-auto">
              <div className="card card4 text-white blur bg-transparent mb-3">
                  <div className="card-header text-center">All Customer</div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                    {data.user?.length}
                    </h5>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Admindashboard;