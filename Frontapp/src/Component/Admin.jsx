import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Admin = () => {
  const navigate = useNavigate();
  const [que, setQue] = useState([]);
  const [type, setType] = useState("");
  const [isfetching, setIsfetching] = useState(false);

  const showPendingQuery = async () => {
    try {
        const status = "p";
    console.log(status);
    const response = await fetch(`http://localhost:8000/status/${status}`);
    const data = await response.json();
    console.log(data);
    setQue(data.q);
    setType("pen");
    setIsfetching(true);
    } catch (error) {
        console.error(error);
        
    }
  };

  const showProcessingQuery = async () => {
    const status = "pro";
    const response = await fetch(`http://localhost:8000/status/${status}`);
    const data = await response.json();
    console.log(data);
    setQue(data.q);
    setType("pro");
    setIsfetching(true);
  };

  const showCompletedQuery = async () => {
    const status = "c";
    const response = await fetch(`http://localhost:8000/status/${status}`);
    const data = await response.json();
    console.log(data.q);
    setQue(data.q);
    setType("com");
    setIsfetching(true);
  };
  async function resolveQuery(queryid) {
    console.log(queryid);
    const response = await fetch(`http://localhost:8000/resolvequery/${queryid}`,{
        method: "PATCH",
    });
    if(response.ok){
        navigate('/admin');
        showPendingQuery();
    }
  }
  useEffect(()=>{
    showPendingQuery();
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
        <i class="fa-solid fa-clipboard-question text-light"></i>
         <span className='text-light'> View All User</span> 
        </Link>
      </li>
      
      <li class="nav-item p-0  text-start" >
        <button
                className="btn text-light text-start  w-100 "
                onClick={showPendingQuery}
              >
      <i class="fa-regular fa-eye text-light"></i> Pending Queries
              </button>
      </li>
     
      <li class="nav-item p-0" >
      <button
                className="btn text-light w-100  text-start"
                onClick={showCompletedQuery}
              >
                <i class="fa-solid fa-eye text-light "></i> Completed Queries
              </button>
      </li>
      
      <li class="nav-item p-0" >
      <button
                className="btn text-light w-100 text-start"
                onClick={showProcessingQuery}
              >
                <i class="fa-solid fa-eye-low-vision text-light"></i> Processing Queries
              </button>
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
            <div className="col-10  h-100 b text-light fw-bold">
              {isfetching &&
                (type == "pen" ? (
                  <h1 className="text-center">Pending Queries</h1>
                ) : type == "pro" ? (
                  <h1 className="text-center">Processing Queries</h1>
                ) : (
                  <h1 className="text-center">Completed Queries</h1>
                ))}
              {isfetching && (
                <table className="w-100 mt-5" cellPadding={"10px"}>
                  <thead>
                    <tr className="py-4 blur bg-transparent">
                      <td className="tblhead py-4 blur bg-transparent">Name</td>
                      <td className="tblhead blur bg-transparent">type</td>
                      <td className="tblhead blur bg-transparent">Username</td>
                      <td className="tblhead blur bg-transparent">Status</td>
                      <td className="tblhead blur bg-transparent">Action</td>
                    </tr>
                  </thead>
                  <tbody>
                    {que?.map((element) => (
                      <tr className="my-4 blur bg-transparent">
                        <td className="tbldata blur bg-transparent">{element.department}</td>
                        <td className="tbldata blur bg-transparent">{element.subject}</td>
                        <td className="tbldata blur bg-transparent">{element.query}</td>
                        <td className="tbldata blur bg-transparent">{element.status}</td>
                        <td className="blur bg-transparent">
                          <button
                            className="btn btn-primary "
                            onClick={() => {
                             resolveQuery(element._id)
                            }}
                          >
                            Resolve
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;