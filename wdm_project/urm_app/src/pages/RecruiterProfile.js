import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RecruiterHeader from './RecruiterHeader';
import IndexFooter from './IndexFooter';


function RecruiterProfile() {
    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>Officer Profile</h1>
                    <RecruiterHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Candidate Profile Content --> */}
                <section id="profile" className="tile">
                    <form action="candidate_profile.php" method="POST">

                        <div className="profile-image">
                            <label for="profile"></label>
                            <span className="image fit"><img src="assets/images/surya.jpg" alt="" /></span>
                            <input type="file" accept="image/*" id="profile" name="profile" placeholder="Upload Picture" />
                        </div>
                        <div className="profile-info content">
                            <label for="name">Recruiter Name:</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" />

                            <label for="bio">Bio:</label>
                            <input type="text" id="bio" name="bio" placeholder="Your Bio" value="Recruiter at UTA" />

                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" />

                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" placeholder="Your Password" />

                            <label for="address">Address:</label>
                            <input type="text" id="address" name="address" placeholder="Your Address" />

                            <label for="phone-number">Phone Number:</label>
                            <input type="tel" id="phone-number" name="phone-number" placeholder="Your Phone Number" />

                            <label for="department">Department:</label>
                            <input type="text" id="department" value="CS" name="department" placeholder="Your department" />

                            <label for="skills">Skills:</label>
                            <input type="text" id="skills" name="skills" placeholder="Your skills" value="Interviewing,Candidate Evaluation, Technical Recruiting" />

                            <label for="linkedin">LinkedIn:</label>
                            <input type="text" id="linkedin" name="linkedin" placeholder="Enter link" value="https://www.linkedin.com/in/" />
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

export default RecruiterProfile;