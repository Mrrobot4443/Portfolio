import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import "animate.css";
import Typed from "typed.js";

function Home() {
  return (
    <>
      <div className="row  ">
        <div className="col-md-12 intro">
          <h1 className="text-center typing"> </h1>
        </div>
      </div>

      <div className="section-bio middle d-flex position-relative">
        <div className="col-md-3 p-5 ">
          <div className="space">
            {" "}
            <h6>BIOGRAPHY</h6>
            <p>
              My name is Yassine bessabes i'am 23 years old , Work for money and
              design for love! based in Morroco.
            </p>
          </div>
          <div className="space">
            {" "}
            <h6>CONTACT</h6>
            <a href="#">yazo-yazo@hotmail</a>
          </div>

          <div className="space">
            <h6>SERVICES</h6>
            <p className="form-list">Website Design </p>
          </div>
        </div>

        <div className="col-md-6 img-puzzle">
          <img src="images/img-top.jpg" className="Img rounded-5 shadow" />
        </div>
        <div className="col-md-3 ps-5 ms-5">
          <div className="">
            <h6 className=" position-relative">
              Months OF <br />
              EXPERIENCE
            </h6>
            <p className="space mn  position-relative">2</p>
            <div>
              <h6 className=" position-relative">
                SATISFITATION <br /> CLIENTS
              </h6>
              <p className="space mn position-relative">100%</p>
            </div>

            <div className="">
              <h6 className=" position-relative">
                PROJECTS <br /> DONE
              </h6>
              <p className="space mn  position-relative">2</p>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <hr className="my-5" />
      </div>

      <div className="row  mt-5 ">
        <div className="col-md-12">
          <h2 className="text-center">My Advantage</h2>
        </div>
      </div>
      <div className=" d-flex my-5  icons-middle mx-5 text-center ">
        <div className="col-md-2 img-boots mx-4">
          <img
            src="images/bootstrap.png"
            width={80}
            alt=""
            style={{ top: 18, position: "relative", right: 110 }}
            className="animate__animated animate__bounceIn"
          />
        </div>
        <div className="col-md-2 img-boots mx-4">
          <img src="images/html.png" width={65} alt="" />
        </div>
        <div className="col-md-2 img-boots mx-4">
          <img
            src="images/adobe.svg"
            width={100}
            alt=""
            style={{ right: 120, position: "relative" }}
          />
        </div>
        <div className="col-md-2 img-boots mx-4">
          <img
            src="images/js-logo.png"
            width={100}
            alt=""
            style={{ right: 120, position: "relative" }}
          />
        </div>
        <div className="col-md-2 img-boots mx-4">
          <img
            src="images/css-logo.png"
            width={86}
            style={{ top: 10, position: "relative" }}
            alt=""
          />
        </div>
      </div>

      <br />
      <hr />
      <section className="experience container-fluid">
        <div className="row text-center ">
          <h2>Education &amp; Experience</h2>
        </div>
        <div className="row">
          <div className="col-md-4 pspace">
            <h5 className="space2">2017-2020</h5>

            <p>
              Baccalauréat science expérimental <br /> <span>bonjour</span>
            </p>
            <p>
              {" "}
              L'Office de la formation professionnelle et de la promotion du
              travail <br /> <span>bonjour</span>
            </p>
            <p>
              Diplôme d'Économie et gestion (Deug) <br />{" "}
              <span>Universitaire Hassan II</span>
            </p>
            <p>
              Diplôme d'études universitaires Économie et gestion (License) en
              cours
            </p>
          </div>
          <div className="col-md-4 pspace ">
            {" "}
            <h5 className="space2">2021-2022</h5>
            <p>
              "POTTERY CONSEIL STAGE"
              <br /> <span></span>
            </p>
            <p>
              Imprimerie <br /> <span>Conception maquette</span>
            </p>
            <p></p>
            <p>
              Assistant Bureau Société <br /> <span>Multi Tâches</span>//Gestion
              administrative ::création des factures – gérer les
              règlement-Voyages National <br />{" "}
              <span>
                Gérer les procédures des dédouanements (Chargement – DUM
                –Tryptique-suivis) FORMATION
              </span>
            </p>
            <p>
              Baccalauréat science expérimental <br /> <span>bonjour</span>
            </p>
          </div>
          <div className="col-md-4 pspace ">
            {" "}
            <h5 className="space2">2022</h5>
            <p>
              Formation Full stack à 3W Academy <br /> <span>En cours</span>
            </p>
            <img src="images/5.png" alt="" width={530} />
          </div>
        </div>
        <section />

        <hr />
      </section>
      <section>
        <div className=" col-md-12 text-center ">
          <h2>My Latest Projects</h2>
        </div>

        <div />
        <div className=" d-flex">
          <div className="col-md-4  px-2 py-2">
            <video
              src="images/preject3.mkv"
              playsInline
              autoPlay
              muted
              loop
              typeof="mp4"
            ></video>
          </div>
          <div className="col-md-4  px-2 py-2 ">
            <video
              src="images/fish & ships.mp4"
              playsInline
              autoPlay
              muted
              loop
              typeof="mp4"
            ></video>
          </div>
          <div className="col-md-4  px-2 py-2">
            <video
              src="images/vid2.mp4"
              playsInline
              autoPlay
              muted
              loop
              typeof="mp4"
            ></video>
          </div>
          <hr className="my-5" />
          <div className="section">
            {/* <ul className='d-flex mx-5  list-unstyled space-pro'>
                            <li className=" ps-5 space-pro1 ">Fish & Ships</li>
                            <li className="space-pro2 ps-5">GREEN OFFICE</li>
                            <li className="space-pro3 ps-5">APP Villa</li> */}
            {/* </ul> */}
          </div>
          <div className="d-flex">
            <div className="col-md-4 px-2 py-2">
              <video
                src="images/vid2.mp4"
                playsInline
                autoPlay
                muted
                loop
                typeof="mp4"
              ></video>
            </div>
            <div className="col-md-4  px-2 py-2">
              <video
                src="images/fish & ships.mp4"
                playsInline
                autoPlay
                muted
                loop
                typeof="mp4"
              ></video>
            </div>
            <div className="col-md-4  px-2 py-2">
              <video
                src="images/fish & ships.mp4"
                playsInline
                autoPlay
                muted
                loop
                typeof="mp4"
              ></video>
            </div>

            {/* <ul className='d-flex mx-5  list-unstyled space-pro'>
                            <li className=" ps-5 space-pro1 ">Fish & Ships</li>
                            <li className="space-pro2 ">GREEN OFFICE</li>
                            <li className="space-pro3 ">APP Villa</li>
                        </ul> */}
          </div>
          <div className="d-flex">
            <div className="col-md-4 px-2 py-2">
              <video
                src="images/fish & ships.mp4"
                playsInline
                autoPlay
                muted
                loop
                typeof="mp4"
              ></video>
            </div>
            <div className="col-md-4 px-2 py-2">
              <video
                src="images/fish & ships.mp4"
                playsInline
                autoPlay
                muted
                loop
                typeof="mp4"
              ></video>
            </div>
            <div className="col-md-4 px-2 py-2">
              <video
                src="images/fish & ships.mp4"
                playsInline
                autoPlay
                muted
                loop
                typeof="mp4"
              ></video>
            </div>
          </div>
          <div className="d-flex">
            <div className="col-md-4 px-2 py-2">
              <video
                src="images/fish & ships.mp4"
                playsInline
                autoPlay
                muted
                loop
                typeof="mp4"
              ></video>
            </div>
            <div className="col-md-4 px-2 py-2">
              <video
                src="images/fish & ships.mp4"
                playsInline
                autoPlay
                muted
                loop
                typeof="mp4"
              ></video>
            </div>
            <div className="col-md-4 px-2 py-2">
              <video
                src="images/fish & ships.mp4"
                playsInline
                autoPlay
                muted
                loop
                typeof="mp4"
              ></video>
            </div>
          </div>
          <div className="d-flex">
            <div className="col-md-4 px-2 py-2">
              <video
                src="images/fish & ships.mp4"
                playsInline
                autoPlay
                muted
                loop
                typeof="mp4"
              ></video>
            </div>
            <div className="col-md-4 px-2 py-2">
              <video
                src="images/fish & ships.mp4"
                playsInline
                autoPlay
                muted
                loop
                typeof="mp4"
              ></video>
            </div>
            <div className="col-md-4 px-2 py-2">
              <video
                src="images/fish & ships.mp4"
                playsInline
                autoPlay
                muted
                loop
                typeof="mp4"
              ></video>
            </div>
          </div>
          {/* <ul className='d-flex mx-5  list-unstyled space-pro'>
                            <li className=" ps-5 space-pro1 ">Fish & Ships</li>
                            <li className="space-pro2 ps-5">GREEN OFFICE</li>
                            <li className="space-pro3 ps-5">APP Villa</li>
                        </ul> */}
        </div>

        <Link to="/Projects">
          <button className="btn btn-primary my-4 position-absolute px-5 py-3 ">
            Show More
          </button>
        </Link>
      </section>
    </>
  );
}
export default Home;
