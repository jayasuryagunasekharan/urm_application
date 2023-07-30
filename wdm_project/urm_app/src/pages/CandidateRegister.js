import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RegisterHeader from './RegisterHeader';
import IndexFooter from './IndexFooter';


function CandidateRegister() {
    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>Register</h1>
                    <RegisterHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Candidate Registration Content --> */}
                <section id="registerpage">
                    <div className="overlay">
                        <div className="content">
                            <div id="candidateForm">
                                <form action="register_candidate.php" method="POST">
                                    <label for="name">Name:</label>
                                    <input type="text" id="name" name="name" required />

                                    <label for="email">Email:</label>
                                    <input type="email" id="email" name="email" required />

                                    <label for="demographic">Demographic Information:</label>
                                    <input type="text" id="demographic" name="demographic" />

                                    <label for="field">Field of Study:</label>
                                    <input type="text" id="field" name="field" />

                                    <label for="education">Educational Background:</label>
                                    <input type="text" id="education" name="education" />

                                    <label for="experience">Research Experience:</label>
                                    <input type="text" id="experience" name="experience" />

                                    <label for="resume">Resume/CV:</label>
                                    <input type="file" id="resume" name="resume" />

                                    <label for="personalStatement">Personal Statement/Cover Letter:</label>
                                    <textarea id="personalStatement" name="personalStatement"></textarea>

                                    <input type="submit" value="Register" className="cta-button" />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <IndexFooter />
        </Fragment >
    )
}

export default CandidateRegister;