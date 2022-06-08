import React from 'react'
import './Home.css'


function Home() {
    return (
        <>

            <div className="row ">
                <div className="col-md-12">

                    <h1 className='text-center'>Yassine Bessabess UI/UX Interaction Designer </h1>
                </div>
            </div>

            <div className="section middle d-flex position-relative">
                <div className="col-md-3 p-5 ">
                    <div className='space'>  <h6>BIOGRAPHY</h6>
                        <p>Work for money and design for love! I’m Bruno, an UI/UX Interaction Designer based in Poland.</p>
                    </div>
                    <div className='space'> <h6>CONTACT</h6>
                        <a href="#">yazo-yazo@hotmail
                        </a></div>

                    <div className='space'>  <h6>SERVICES</h6>
                        <p className='form-list'>Website Design  </p></div>

                </div>
                <div className="col-md-6">
                    <div className='position-relative'>
                        <img src="images/layer.png" alt="" className='imagelayer ' />
                        <div className='position-absolute image-z'><img src="images/imagefont.jpeg" alt="" /> </div>

                    </div>

                </div>
                <div className="col-md-3 ps-5 ms-5">
                    <div className=''>
                        <h6 className=' position-relative'>Months OF <br />
                            EXPERIENCE</h6>
                        <p className='space mn  position-relative'>2</p>
                        <div>
                            <h6 className=' position-relative'>SATISFITATION <br /> CLIENTS</h6>
                            <p className='space mn position-relative'>100%</p>
                        </div>

                        <div className=''>
                            <h6 className=' position-relative'>PROJECTS  <br /> DONE</h6>
                            <p className='space mn  position-relative'>2</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className="row">
                <hr className='my-5' />
            </div>
            <div className="row  mt-5">
                <div className="col-md-12">
                    <h2 className='text-center'>My Advantage
                    </h2>
                </div>
            </div>
            {/* middlepage */}
            <div className=' row my-5  '>
                <div className='col-md-12  d-flex my-5  icons-middle'>
                    <div >
                        <img src="images/bootstrap.png" alt="" className="img-boots" />
                    </div>
                    <div >
                        <img src="images/bootstrap.png" alt="" className="img-boots" />
                    </div>
                    <div >
                        <img src="images/bootstrap.png" alt="" className="img-boots" />
                    </div>
                    <div >
                        <img src="images/bootstrap.png" alt="" className="img-boots" />
                    </div>
                </div>
            </div>
            <br />
            <hr className='my-5' />

            <div className="section align-content-center">
                <div className="row text-center">
                    <h2>Education & Experience</h2>
                </div>
                <div className='row'>
                    <div className="col-md-4 pspace">
                        <h5 className='space2'>2017</h5>
                        <p>Baccalauréat science expérimental <br /> <span>bonjour</span></p>
                        <p>Baccalauréat science expérimental <br /> <span>bonjour</span></p>
                        <p>Baccalauréat science expérimental <br /> <span>bonjour</span></p>

                    </div>
                    <div className="col-md-4 pspace "> <h5 className='space2'>2022</h5>
                        <p>Baccalauréat science expérimental <br /> <span>bonjour</span></p>
                        <p>Baccalauréat science expérimental <br /> <span>bonjour</span></p>
                        <p>Baccalauréat science expérimental <br /> <span >bonjour</span></p>
                        <p>Baccalauréat science expérimental <br /> <span>bonjour</span></p>
                        <p>Baccalauréat science expérimental <br /> <span>bonjour</span></p>
                    </div>
                    <div className="col-md-4 pspace "> <h5 className='space2'>2017</h5>
                        <p>Baccalauréat science expérimental <br /> <span>bonjour</span></p>
                        <p>Baccalauréat science expérimental <br /> <span>bonjour</span></p>
                        <p>Baccalauréat science expérimental <br /> <span>bonjour</span></p>


                    </div>
                </div>
            </div>
            <hr className='my-5' />
            <div className='section'>


                <div className=' col-md-12 text-center'>
                    <h2>My Latest Projects</h2>

                </div>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <br />
            <hr className='my-5' />

        </>
    )
}
export default Home