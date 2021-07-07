import React from "react";


function NavBar() {

    return (
        <nav class='nav-border  navbar navbar-expand-lg navbar-dark bg-dark justify-content-between'>   
        <span>     
        <a class="navbar-brand" href="#"> <i class="fas fa-cloud"></i> Mission Cloud Program Portal</a>
        </span>
        <div>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse d-flex" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <button type="button" class="nav-link btn btn-outline-light m-1">Cost Estimation <span class="sr-only">(current)</span> </button>
                    {/* <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a> */}
                </li>
                <li class="nav-item">
                <button type="button" class="nav-link btn btn-outline-light m-1">Health Monitor <span class="sr-only">(current)</span> </button>
                    {/* <a class="nav-link" href="#">Price Calculator</a> */}
                </li>
                <li class="nav-item">
                <button type="button" class="nav-link btn btn-outline-light m-1">Export <span class="sr-only">(current)</span> </button>
                </li>
                {/* <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Resources
                    </a>
                    <button type="button" class="nav-link dropdown-toggle btn-warning m-1" id="navbarDropdown"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Resources <span class="sr-only">(current)</span> </button>

                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Resource 1</a>
                    <a class="dropdown-item" href="#">Resource 2</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Resource 3</a>
                    </div>
                </li> */}
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button class="btn btn-outline-light btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        </div>
        
    </nav>
    )

}


export default NavBar;