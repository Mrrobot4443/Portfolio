import React from "react"
import "./Footer.css"
import { BsGithub, BsLinkedin, BsInstagram, BsTwitter } from "react-icons/bs";
import { Parallax } from "react-parallax";
// import img1 from '../Footer/images/4.JPG'
// import img2 from '../Footer/images/1.JPG'
// import img3 from '../Footer/images/wait-img.jpg'
function Footer() {
    return (
        <>
            


            <footer className="footer m-5">
            
                <div className="row my-5">

                    <div className="footer-bg col-md-4 ">
                        <div className="footer_containe ">
                                <img src="images/logoYb.png" alt="" width={170} />
                                
                            <div >
                               
                                <span className="footer_subtitle mb" >Fronted Developer</span>

                            </div>
                        </div>
                    </div>

                    <div className="col-md-4"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi explicabo quaerat iste labore tenetur similique? Expedita harum tenetur quasi eaque!
                    </p>

                    </div>
                    <div className="col-md-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, fuga molestiae.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, fuga molestiae. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem veritatis mollitia, animi hic expedita consequatur repellendus similique deleniti amet iste consequuntur quaerat necessitatibus nesciunt, aperiam, exercitationem beatae perferendis a laborum. Doloribus ea modi distinctio sunt inventore autem nisi vel ipsa quaerat non. Atque dignissimos praesentium nisi dolore, aut totam.</div>
                    <div className="col-md-5">
                        <ul className="footer-links list-unstyled  text-dark ">
                            <li><a href="/Contact" className="footer-link text-light fs-5 fw-bolde">Contact</a></li>
                            <li><a href="/Blog" className="footer-link text-light fs-5 fw-bolde">Blog</a></li>
                            <li><a href="/Projects" className="footer-link text-light fs-5 fw-bolde">Portfolio</a></li>

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



    {/* <div className="App">
      <Parallax strength={300} bgImage={img1}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={img2}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>
      <Parallax strength={300} bgImage={img3}>
        <div className="content">
          <div className="text-content">Normal Parallax</div>
        </div>
      </Parallax>

      
      <div className="content"></div>
    </div> */}


        </>
    )

}
export default Footer



