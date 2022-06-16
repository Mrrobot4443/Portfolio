import React from "react";
import "./Home.css";
import "animate.css";
import Typical from "react-typical";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Parallax } from "react-parallax";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row  ">
          <div className="col-md-12 intro">
            {""}
            <h1 className="text-center typing">
              {""}
              <Typical
                loop={Infinity}
                steps={[
                  "Yassine Bessabess 😎",
                  2000,
                  "Front-End Developer 💻",
                  2000
                ]}
              />
            </h1>
          </div>
        </div>

        <div className="btn-dange">
          <button className="btn btn-danger shadow text-center mx-2">
            {""}
            Hire Me {""}
          </button>
          <a href="#">
            <button className="btn btn-primary shadow">Get Resume</button>
          </a>
        </div>

        <div className="section-bio middle d-flex position-relative">
          <div className="col-md-3 p-5 ">
            <div>
              <h5>BIOGRAPHY</h5>
              <p className="my-4">
                My name is Yassine bessabes i'am 23 years old , Work for money
                and design for love! based in Morroco.
              </p>
            </div>
            <div className="space">
              <h5>CONTACT</h5>
              <a href="">yazo-yazo@hotmail</a>
            </div>

            <div className="space">
              <h5>SERVICES</h5>
              <p className="form-list">Website Design </p>
            </div>
          </div>

          <div className="col-md-6 img-puzzle">
            <img src="images/img-top.jpg" className="Img rounded-5 shadow" />
          </div>
          <div className="col-md-3 ps-5 ms-5">
            <div className="">
              <h5 className=" position-relative">
                Months OF <br />
                EXPERIENCE
              </h5>
              <p className="space mn  position-relative">
                {" "}
                <CountUp end={2} />
              </p>
              <div>
                <h5 className=" position-relative">
                  SATISFITATION <br /> CLIENTS
                </h5>
                <p className="space mn position-relative">
                  {" "}
                  <CountUp end={100} />%
                </p>
              </div>

              <div className="">
                <h5 className=" position-relative">
                  PROJECTS <br /> DONE
                </h5>
                <p className="space mn  position-relative">
                  {" "}
                  <CountUp end={2} />
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <hr className="my-5" />
        </div>

        <div className="row  mt-5 ">
          <div className="col-md-12">
            <motion.h2
              initial="hidden"
              animate="visible"
              className="mb-5 text-center"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.1
                  }
                }
              }}
            >
              My Latest Projects
            </motion.h2>
          </div>
        </div>
        <div className=" d-flex my-5  icons-middle mx-5 text-center animate__animated animate__shakeY">
          <div className="col-md-2 img-boots mx-4">
            <img
              src="images/bootstrap.png"
              width={80}
              alt=""
              style={{ top: 18, position: "relative", right: 110 }}
            />
          </div>
          <div className="col-md-2 img-boots mx-4 animate__animated animate__shakeY">
            <img src="images/html.png" width={65} alt="" />
          </div>
          <div className="col-md-2 img-boots mx-4 animate__animated animate__shakeY">
            <img
              src="images/adobe.svg"
              width={100}
              alt=""
              style={{ right: 120, position: "relative" }}
            />
          </div>
          <div className="col-md-2 img-boots mx-4 animate__animated animate__shakeY">
            <img
              src="images/js-logo.png"
              width={100}
              alt=""
              style={{ right: 120, position: "relative" }}
            />
          </div>
          <div className="col-md-2 img-boots mx-4 animate__animated animate__shakeY">
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
            <motion.h2
              initial="hidden"
              animate="visible"
              className="mb-5"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.1
                  }
                }
              }}
            >
              Education & Experience
            </motion.h2>
          </div>
          <div className="row text-white ">
            <div className="col-md-4 pspace card ">
              <div className="box text-center">
                <div className="content">
                  <h5 className="space2 ">2017-2020</h5>

                  <p className=" ">
                    Baccalauréat science expérimental <br /> 
                  </p>
                  <p>
                    L'Office de la formation professionnelle et de la promotion du
                    travail <br /> 
                  </p>
                  <p>
                    Diplôme d'Économie et gestion (Deug) <br />{" "}
                    <span>Universitaire Hassan II</span>
                  </p>
                  <p>
                    Diplôme d'études universitaires Économie et gestion (License)
                    en cours
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pspace card  ">
              <div className="box  text-center">
                <div className="content">
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
                    Assistant Bureau Société <br /> <span>Multi Tâches</span>
                  //Gestion administrative ::création des factures – gérer les
                    règlement-Voyages National <br />{" "}
                    <span>
                      Gérer les procédures des dédouanements (Chargement – DUM
                      –Tryptique-suivis) FORMATION
                    </span>
                  </p>
                  <p>
                    Baccalauréat science expérimental <br />
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pspace card">
              <div className="box">
                <div className="content">
                  <h5 className="space2">2022</h5>
                  <p>
                    Formation Full stack à 3W Academy <br /> <span>En cours</span>
                  </p>
                  <img src="images/5.png" alt="" width={530} className="mx-5" />
                </div>
              </div>
            </div>
          </div>
          <section />

          <hr />
        </section>
        <section>
          <div className=" col-md-12 text-center ">
            <motion.h2
              initial="hidden"
              animate="visible"
              className="mb-5"
              variants={{
                hidden: {
                  scale: 0.8,
                  opacity: 0
                },
                visible: {
                  scale: 1,
                  opacity: 1,
                  transition: {
                    delay: 0.1
                  }
                }
              }}
            >
              My Latest Projects
            </motion.h2>
          </div>

          <div />
          <div className="row ">
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
                src="images/vid5.mkv"
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
          </div>

          <a href="/Projects">
            <button className="btn btn-primary my-4 position-absolute px-5 py-3 ">
              Show More
            </button>
          </a>
        </section>
      </div>
    </>
  );
}

export default Home;
