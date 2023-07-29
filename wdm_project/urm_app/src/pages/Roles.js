import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import IndexHeader from './IndexHeader';
import IndexFooter from './IndexFooter';


function Roles() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>URM Application</h1>
                    <IndexHeader />
                </div>
            </header>

            <main>

                {/* <!-- Roles Content --> */}
                <section id="goal">
                    <div className="tile-container">
                        <article className="style1">
                            <span className="image">
                                <img src="assets/images/surya.jpg" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p className="details"><Link to="/candidate_dashboard">Candidate</Link></p>
                                </div>
                            </div>
                        </article>


                        <article className="style1">
                            <span className="image">
                                <img src="assets/images/uta_logo.png" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p><a href="institute_dashboard.html">Institute</a></p>
                                </div>
                            </div>
                        </article>
                        <article className="style1">
                            <span className="image">
                                <img src="assets/images/uta_logo.png" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p><a href="recruiter_dashboard.html">Recruiter</a></p>
                                </div>
                            </div>
                        </article>
                        <article className="style1">
                            <span className="image">
                                <img src="assets/images/uta_logo.png" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p><a href="officer_dashboard.html">DEI Officer</a></p>
                                </div>
                            </div>
                        </article>

                        <article className="style1">
                            <span className="image">
                                <img src="assets/images/uta_logo.png" alt="" />
                            </span>
                            <div className="overlay">

                                <div className="content">
                                    <p><a href="admin_dashboard.html">Admin</a></p>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
            </main>

            <IndexFooter />
        </Fragment >
    )
}

export default Roles;