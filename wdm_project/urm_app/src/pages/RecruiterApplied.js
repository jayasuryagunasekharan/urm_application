import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RecruiterHeader from './RecruiterHeader';
import IndexFooter from './IndexFooter';


function RecruiterApplied() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Applied Candidates</h1>
                    <RecruiterHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Jobs Applied Content --> */}
                <section id="jobsearch" className="tile">
                    <div className="search">
                        <input type="text" placeholder="Search by name, field of study, or institution" />
                        <button>Search</button>
                    </div>

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
                                    <th>CV</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Jimmy Anderson</td>
                                    <td>jimmy09@gmail.com</td>
                                    <td>134567890</td>
                                    <td>CS</td>
                                    <td><a href="#" target="_blank">Download</a></td>
                                    <td><a href="#" target="_blank">Download</a></td>
                                    <td>
                                        <div className="job-actions">
                                            <button type="submit">Recruit</button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Nithin K</td>
                                    <td>nithin@gmail.com</td>
                                    <td>0987654321</td>
                                    <td>CS</td>
                                    <td><a href="#" target="_blank">Download</a></td>
                                    <td><a href="#" target="_blank">Download</a></td>
                                    <td>
                                        <div className="job-actions">
                                            <button type="submit">Recruit</button>
                                        </div>
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

export default RecruiterApplied;