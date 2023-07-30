import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import IndexHeader from './IndexHeader';
import IndexFooter from './IndexFooter';


function Login() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>URM Application</h1>
                    <IndexHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Homepage Content --> */}
                <section id="loginpage">
                    <div className="tile-container">
                        <article className="style1">
                            <span className="image">
                                <h3>Candidate Login</h3>
                                {/* <img src="assets/images/pic02.jpg" alt="" /> */}
                            </span>

                            <div className="overlay">
                                <div className="content">
                                    <form action="login_candidate.php" method="POST">
                                        <label for="username_candidate">Email:</label>
                                        <input type="email" id="username_candidate" name="username_candidate" required />

                                        <label for="password_candidate">Password:</label>
                                        <input type="password" id="password_candidate" name="password_candidate" required />

                                        <input type="submit" value="Log In" className="cta-button" />
                                        <Link to="/forgot_password">Forgot Password</Link>
                                    </form>
                                </div>
                            </div>
                        </article>
                        <article className="style1">
                            <span className="image">
                                <h3>Institute Login</h3>
                                {/* <img src="assets/images/pic01.jpg" alt="" /> */}
                            </span>

                            <div className="overlay">
                                <div className="content">
                                    <form action="login_institute.php" method="POST">
                                        <label for="username_institute">Email:</label>
                                        <input type="email" id="username_institute" name="username_institute" required />

                                        <label for="password_institute">Password:</label>
                                        <input type="password" id="password_institute" name="password_institute" required />

                                        <input type="submit" value="Log In" className="cta-button" />
                                        <Link to="/forgot_password">Forgot Password</Link>
                                    </form>
                                </div>
                            </div>
                        </article>
                        <article className="style1">
                            <span className="image">
                                <h3>Recruiter Login</h3>
                                {/* <img src="assets/images/pic03.jpg" alt="" /> */}
                            </span>

                            <div className="overlay">
                                <div className="content">
                                    <form action="login_recruiter.php" method="POST">
                                        <label for="username_recruiter">Email:</label>
                                        <input type="email" id="username_recruiter" name="username_recruiter" required />

                                        <label for="password_recruiter">Password:</label>
                                        <input type="password" id="password_recruiter" name="password_recruiter" required />

                                        <input type="submit" value="Log In" className="cta-button" />
                                        <Link to="/forgot_password">Forgot Password</Link>
                                    </form>
                                </div>
                            </div>
                        </article>
                        <article className="style1">
                            <span className="image">
                                <h3>Officer Login</h3>
                                {/* <img src="assets/images/pic04.jpg" alt="" /> */}
                            </span>

                            <div className="overlay">
                                <div className="content">
                                    <form action="login_officer.php" method="POST">
                                        <label for="username_officer">Email:</label>
                                        <input type="email" id="username_officer" name="username_officer" required />

                                        <label for="password_officer">Password:</label>
                                        <input type="password" id="password_officer" name="password_officer" required />

                                        <input type="submit" value="Log In" className="cta-button" />
                                        <Link to="/forgot_password">Forgot Password</Link>
                                    </form>
                                </div>
                            </div>
                        </article>
                        <article className="style1">
                            <span className="image">
                                <h3>Admin Login</h3>
                            </span>

                            <div className="overlay">
                                <div className="content">
                                    <form action="login_admin.php" method="POST">
                                        <label for="username_admin">Email:</label>
                                        <input type="email" id="username_admin" name="username_admin" required />

                                        <label for="password_admin">Password:</label>
                                        <input type="password" id="password_admin" name="password_admin" required />

                                        <input type="submit" value="Log In" className="cta-button" />
                                        <Link to="/forgot_password">Forgot Password</Link>
                                    </form>
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

export default Login;