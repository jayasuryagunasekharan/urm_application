import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import OfficerHeader from './OfficerHeader';
import IndexFooter from './IndexFooter';


function OfficerProfile() {
    return (
        <Fragment>
            <header>
                <div className="header-container">
                    <h1>Officer Profile</h1>
                    <OfficerHeader />
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
                            <label for="name">Officer Name:</label>
                            <input type="text" id="name" name="name" placeholder="Your Name" />

                            <label for="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Your Email" />

                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" placeholder="Your Password" />

                            <label for="address">Address:</label>
                            <input type="text" id="address" name="address" placeholder="Your Address" />

                            <label for="phone-number">Phone Number:</label>
                            <input type="tel" id="phone-number" name="phone-number" placeholder="Your Phone Number" />

                            <label for="summary">Summary:</label>
                            <textarea id="summary" name="summary" placeholder="Write your summary"></textarea>
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

export default OfficerProfile;