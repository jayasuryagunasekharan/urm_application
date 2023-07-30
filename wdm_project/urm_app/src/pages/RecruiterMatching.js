import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RecruiterHeader from './RecruiterHeader';
import IndexFooter from './IndexFooter';


function RecruiterMatching() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Matched Candidates</h1>
                    <RecruiterHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Jobs Applied Content --> */}
                <section id="jobsearch" className="tile">

                    {/* <!-- Job Applied Table --> */}
                    <div className="job-applied">
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Feild of Study</th>
                                    <th>Resume</th>
                                    <th>Preference</th>
                                    <th>CV</th>
                                    <th>Setup Interview</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jimmy Anderson</td>
                                    <td>jimmy09@gmail.com</td>
                                    <td>134567890</td>
                                    <td>CS</td>
                                    <td><a href="#" target="_blank">Download Resume</a></td>
                                    <td>Matched</td>
                                    <td><a href="#" target="_blank">Download Application</a></td>
                                    <td>
                                        <Link to="/recruiter_setup_interview">Recruit</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Michael Johnson</td>
                                    <td>michael.johnson@example.com</td>
                                    <td>567890123</td>
                                    <td>Mechanical Engineering</td>
                                    <td><a href="#" target="_blank">Download Resume</a></td>
                                    <td>Matched</td>
                                    <td><a href="#" target="_blank">Download Application</a></td>
                                    <td>
                                        <Link to="/recruiter_setup_interview">Recruit</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Bob Williams</td>
                                    <td>bob.williams@example.com</td>
                                    <td>123456789</td>
                                    <td>Software Engineering</td>
                                    <td><a href="#" target="_blank">Download Resume</a></td>
                                    <td>Matched</td>
                                    <td><a href="#" target="_blank">Download Application</a></td>
                                    <td>
                                        <Link to="/recruiter_setup_interview">Recruit</Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Emma Davis</td>
                                    <td>emma.davis@example.com</td>
                                    <td>654321987</td>
                                    <td>Data Science</td>
                                    <td><a href="#" target="_blank">Download Resume</a></td>
                                    <td>Matched</td>
                                    <td><a href="#" target="_blank">Download Application</a></td>
                                    <td>
                                        <Link to="/recruiter_setup_interview">Recruit</Link>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Lisa Johnson</td>
                                    <td>lisa.johnson@example.com</td>
                                    <td>432109876</td>
                                    <td>Mechanical Engineering</td>
                                    <td><a href="#" target="_blank">Download Resume</a></td>
                                    <td>Matched</td>
                                    <td><a href="#" target="_blank">Download Application</a></td>
                                    <td>
                                        <Link to="/recruiter_setup_interview">Recruit</Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>

            <IndexFooter />
        </Fragment >
    )
}

export default RecruiterMatching;