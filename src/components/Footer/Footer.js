import React from "react"
import "./Footer.css"
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
function Footer() {
    return (
        <>
            


            <footer className="footer m-5">
            
                <div className="row my-5">

                    <div className="footer-bg col-md-4 ">
                        <div className="footer_containe ">
                                <img src="images/logoYb.png" alt="" width={200} />
                                
                            <div >
                               
                                <span className="footer_subtitle">Fronted Developer</span>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-3"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi explicabo quaerat iste labore tenetur similique? Expedita harum tenetur quasi eaque!
                    </p>

                    </div>
                    <div className="col-md-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, fuga molestiae. Doloribus ea modi distinctio sunt inventore autem nisi vel ipsa quaerat non. Atque dignissimos praesentium nisi dolore, aut totam.</div>
                    <div className="col-md-3">
                        <ul className="footer-links list-unstyled  text-dark">
                            <li><a href="#Contact" className="footer-link">Contact</a></li>
                            <li><a href="#Blog" className="footer-link">Blog</a></li>
                            <li><a href="#Porfolio" className="footer-link">Portfolio</a></li>

                        </ul>
                    </div>
                </div>



                <div className="footer-socials text-center py-4">
                    <a href="" className="footer-social"><BsTwitter /></a>

                    <a href="" className="footer-social"><BsLinkedin /></a>

                    <a href="" className="footer-social"><BsInstagram /></a>

                    <a href="" className="footer-social"><BsGithub /></a>

                </div>
                <p className="text-center ">all right deserved &copy;</p>
               
            
            </footer>


        </>
    )

}
export default Footer



