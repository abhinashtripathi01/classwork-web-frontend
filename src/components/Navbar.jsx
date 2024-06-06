import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

  //get user data
  const user = JSON.parse(localStorage.getItem('user'))


  return (
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Hamro Market</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>


            </ul>
            <form class="d-flex" role="search">
              {
                user ? (<>
                  <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Welcome, {user.firstName}
                    </button>
                    <ul class="dropdown-menu">
                      <li><a class="dropdown-item" href="#">Profile</a></li>
                      <li><a class="dropdown-item" href="#">Settings</a></li>
                      <li><a class="dropdown-item" href="#">logout</a></li>
                    </ul>
                  </div>

                </>)
                  : (<><Link to={'/Register'} class="btn btn-outline-danger me-2" type="submit">Register</Link>
                    <Link to={'/Login'} class="btn btn-outline-success" type="submit">Login</Link></>)






              }
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}
export default Navbar;