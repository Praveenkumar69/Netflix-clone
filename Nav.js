import React from 'react'
import avatar from './image/avatar.png'
import netflix_logo from './image/Netflix-Logo.wine.png'
import './Nav.css'

function Nav() {
     
    // useEffect(() => {
    //    window.addEventListener("scroll", () => {
    //        if(window.scrollY > 100) {
    //            handleShow(true);
    //        }else{
    //         handleShow(false);
    //        }
    //    })
    //    return () =>{
    //        window.removeEventListener("scroll")
    //    }
    // }, [])
    return (
        <div className="nav">
            <img 
                className="nav__logo"
                src={netflix_logo}
                alt="Netflix Logo"
            />
              <img 
                className="nav__avatar"
                src={avatar}
                alt="Netflix Logo"
            />
        </div>
    )
}

export default Nav
