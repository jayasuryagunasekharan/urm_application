import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function Index() {
    return (
        <Fragment>
            <div className="hero_area">
                {/* header section */}
                <header className="header_section">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg custom_nav-container pt-3">
                            <a className="navbar-brand mr-5" href="https://fascinating-jayasuryaguna.wordpress.com/">
                                <img src="assets/images/logo.png" alt="" />
                                <span>
                                    URM Blog
                                </span>
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <div className="d-flex ml-auto flex-column flex-lg-row align-items-center">
                                    <ul className="navbar-nav active">
                                        <li className="nav-item">
                                            {/* <a className="nav-link" href="contact.html">Contact us</a> */}
                                            <Link to="/contact" >Contact us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                {/* end header section  */}
                {/* slider section */}
                <section className=" slider_section position-relative">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                        {/* <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">01</li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
                        </ol> */}
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <div>
                                                    <h1>
                                                        Welcome To <br />
                                                        <span>
                                                            URM Writing Services
                                                        </span>
                                                    </h1>
                                                    <p>
                                                        It is a blog for a newly established URM website.
                                                    </p>
                                                    <div className="btn-box">
                                                        {/* <a href="https://fascinating-jayasuryaguna.wordpress.com/" className="btn-1">
                                                            Blog
                                                        </a> */}
                                                        <Link to="https://fascinating-jayasuryaguna.wordpress.com/" >Blog</Link>
                                                        <br />
                                                        <br />
                                                        <Link to="http://jxg0437.uta.cloud/wdm_project/templates/index.html" >Website</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-7">
                                            <div className="detail-box">
                                                <div>
                                                    <h1>
                                                        Welcome To <br />
                                                        <span>
                                                            Content Writing Services
                                                        </span>
                                                    </h1>
                                                    <p>
                                                        It is a long established fact that a reader will be distracted by the readable content of a page
                                                        when looking
                                                    </p>
                                                    <div className="btn-box">
                                                        <a href="" className="btn-1">
                                                            Contact Us
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="custom_carousel-control">
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="sr-only">Next</span>
                            </a>
                        </div> */}
                    </div>
                </section>
                {/* end slider section */}
            </div>

            {/* footer section  */}
            <section className="container-fluid footer_section">
                <p>
                    Copyright &copy; All Rights Reserved By URM Blog
                </p>
            </section>
            {/* footer section */}
        </Fragment >
    )
}

export default Index;