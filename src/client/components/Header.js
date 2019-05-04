import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

 const Header = ( {auth} ) => {
     console.log(auth);

    return(

        <nav className="navbar navbar-expand-lg navbar-light navbar-center bg-light">
        <Link to='/' className="navbar-brand">serverside boilerplate</Link>
        <ul className="navbar-nav nav-right">
        <li className="nav-item"><Link className="nav-link" to="/users">users</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/admins">protected route</Link></li>

        </ul>
    </nav>

      


        
    );
};

function mapStateToProps ({ auth }) {
    return { auth }
}

export default connect(mapStateToProps)(Header);