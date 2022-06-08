import React from 'react'
import './Nav.css'
import { BsTwitter, BsFacebook, BsInstagram, BsGithub, } from "react-icons/bs";

import { Link } from "react-router-dom";
export default function Nav() {
    return (
        <>
            <div className="row mt-5">
                <div className="col-md-5">
                    <nav className='menu'>
                        <ul className="nav">
                            <li className="nav-item active">
                                {/* <a href="" ">Home</a> */}
                                <Link to ="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                            <Link to ="/Projects" className="nav-link">Projects</Link>
                            </li>
                            <li className="nav-item">
                            <Link to ="/Blog" className="nav-link">Blog</Link>
                            </li>
                            <li className="nav-item">
                            <Link to ="/Contact" className="nav-link">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-2">
                    <div className="text-center">
                        <h3>Logo Yacine</h3>
                    </div>
                </div>
                <div className="col-md-5">
                    <ul className="nav icons d-flex justify-content-end">
                        <li className="nav-item ">
                            <a href="" className="nav-link "><BsTwitter/></a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link"><BsFacebook/></a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link"><BsInstagram/></a>
                        </li>
                        <li className="nav-item">
                            <a href="" className="nav-link"><BsGithub/></a>
                        </li>
                    </ul>
                </div>
            </div>
            
        </>
    )
}
