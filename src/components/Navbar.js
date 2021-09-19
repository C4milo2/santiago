import App from "../App";

function Navbar() {
  
  return (
   
    <div>
      

     {/* <!-- Navbar --> */}
<nav id="textnavbar" class="navbar navbar-expand- black  scrolling-navbar fixed-top">
  {/* <!-- Container wrapper --> */}
  <div class="container-fluid">
    {/* <!-- Navbar brand --> */}
    <a class="navbar-brand me-2" href="https://mdbgo.com/">
      <img
        src="https://1000marcas.net/wp-content/uploads/2021/06/Crunch-Fitness-Logo.png"
        height="100"
        alt=""
        loading="lazy"
        id="navbar"
      />
    </a>

    {/* <!-- Toggle button --> */}
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarButtonsExample"
      aria-controls="navbarButtonsExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i id="bar" class="bi bi-person-lines-fill"></i>
    </button>

    {/* <!-- Collapsible wrapper --> */}
    <div class="collapse navbar-collapse" id="navbarButtonsExample">
      {/* <!-- Left links --> */}
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a id="Gymnav" class="nav-link" href="#">Gym Style <img id="img" src="https://1000marcas.net/wp-content/uploads/2021/06/Crunch-Fitness-Logo.png"/></a>
        </li>
      </ul>
      {/* <!-- Left links --> */}

      <div class="d-flex align-items-center">
        <button id="inicio" type="button" class="btn btn-link px-3 me-2">
          Iniciar
        </button>
        <button type="button" class="btn btn-primary me-3">
          Registrate Gratis 
        </button>
        <a
          class="btn btn-dark px-3"
          href="https://github.com/mdbootstrap/mdb-ui-kit"
          role="button"
          ><i class="fab fa-github"></i
        ></a>
      </div>
    </div>
    {/* <!-- Collapsible wrapper --> */}
  </div>
  {/* <!-- Container wrapper --> */}
</nav>
{/* <!-- Navbar --> */}


    </div>
  );
}

export default Navbar;
