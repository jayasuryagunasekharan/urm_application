import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CandidateHeader from './CandidateHeader';
import IndexFooter from './IndexFooter';


function CandidateProfile() {
    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>Candidate Profile</h1>
                    <CandidateHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Candidate Profile Content --> */}
                <section id="profile" className="tile">
                    <form action="candidate_profile.php" method="POST">

                        <div className="profile-image">
                            <span className="image fit"><img src="assets/images/surya.jpg" alt="" /></span>
                        </div>
                        <div className="profile-info content">
                            <label for="name">Name:</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" />

                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" />

                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" placeholder="Your Password" />

                            <label for="address">Address:</label>
                            <input type="text" id="address" name="address" placeholder="Your Address" />

                            <label for="phone-number">Phone Number:</label>
                            <input type="tel" id="phone-number" name="phone-number" placeholder="Your Phone Number" />

                            <label for="field-of-study">Field of Study:</label>
                            <select id="field-of-study" name="field-of-study">
                                <option value="computer-science">Computer Science</option>
                                <option value="chemistry">Chemistry</option>
                                <option value="biology">Biology</option>
                                <option value="physics">Physics</option>
                                <option value="mathematics">Mathematics</option>
                                {/* <!-- Add more options as needed --> */}
                            </select>

                            <label for="education">Education:</label>
                            <input type="text" id="education" name="education" placeholder="Your Education" />

                            <label for="experience">Experience:</label>
                            <input type="text" id="experience" name="experience" placeholder="Your Experience" />

                            <label for="date-of-birth">Date of Birth:</label>
                            <input type="date" id="date-of-birth" name="date-of-birth" />

                            <label for="summary">Summary:</label>
                            <textarea id="summary" name="summary" placeholder="Write your summary"></textarea>

                            <label for="is-urm">Is URM:</label>
                            <input type="checkbox" id="is-urm" name="is-urm" />

                            <label for="race">Race:</label>
                            <input type="text" id="race" name="race" placeholder="Your Race" />

                            <label for="resume">Resume:</label>
                            <input type="file" id="resume" name="resume" />

                            <label for="cv">CV:</label>
                            <input type="file" id="cv" name="cv" />

                            <label for="academic_records">Academic Records:</label>
                            <input type="file" id="academic_records" name="academic_records" />
                        </div>
                        <div className="profile-actions">
                            <button type="submit">Save Profile</button>
                        </div>
                    </form>
                </section>
            </main>

            <IndexFooter />
        </Fragment >
    )
}

export default CandidateProfile;