import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CandidateHeader from './CandidateHeader';
import IndexFooter from './IndexFooter';


function CandidateJobApplied() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Candidate Job Applied</h1>
                    <CandidateHeader />
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
                                    <th>Job ID</th>
                                    <th>Job Name</th>
                                    <th>Job Type</th>
                                    <th>Location</th>
                                    <th>Job Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12345</td>
                                    <td>Software Engineer Faculty</td>
                                    <td>Faculty</td>
                                    <td>New York</td>
                                    <td>Under Consideration</td>
                                </tr>
                                <tr>
                                    <td>67890</td>
                                    <td>Data Analyst Student</td>
                                    <td>PhD</td>
                                    <td>San Francisco</td>
                                    <td>Interview</td>
                                </tr>
                                <tr>
                                    <td>24680</td>
                                    <td>Marketing Manager Faculty</td>
                                    <td>Full-time</td>
                                    <td>Chicago</td>
                                    <td>Accepted</td>
                                </tr>
                                {/* <!-- Add more rows as needed --> */}
                                <tr>
                                    <td>13579</td>
                                    <td>UX Designer</td>
                                    <td>Full-time</td>
                                    <td>Los Angeles</td>
                                    <td>Rejected</td>
                                </tr>
                                <tr>
                                    <td>86420</td>
                                    <td>Software Developer Intern</td>
                                    <td>Internship</td>
                                    <td>Seattle</td>
                                    <td>Interview</td>
                                </tr>
                                <tr>
                                    <td>97531</td>
                                    <td>Business Analyst</td>
                                    <td>Full-time</td>
                                    <td>Washington D.C.</td>
                                    <td>Under Consideration</td>
                                </tr>
                                <tr>
                                    <td>23456</td>
                                    <td>Project Manager</td>
                                    <td>Contract</td>
                                    <td>Houston</td>
                                    <td>Accepted</td>
                                </tr>
                                <tr>
                                    <td>78901</td>
                                    <td>Software Engineer Student</td>
                                    <td>Bachelor's</td>
                                    <td>Austin</td>
                                    <td>Rejected</td>
                                </tr>
                                <tr>
                                    <td>34567</td>
                                    <td>Data Scientist</td>
                                    <td>Master's</td>
                                    <td>Boston</td>
                                    <td>Under Consideration</td>
                                </tr>
                                <tr>
                                    <td>90123</td>
                                    <td>Marketing Coordinator</td>
                                    <td>Full-time</td>
                                    <td>Miami</td>
                                    <td>Interview</td>
                                </tr>
                                <tr>
                                    <td>67890</td>
                                    <td>Front-end Developer</td>
                                    <td>Full-time</td>
                                    <td>Denver</td>
                                    <td>Accepted</td>
                                </tr>
                                <tr>
                                    <td>98765</td>
                                    <td>HR Specialist</td>
                                    <td>Full-time</td>
                                    <td>Atlanta</td>
                                    <td>Rejected</td>
                                </tr>
                                <tr>
                                    <td>43210</td>
                                    <td>UX Researcher</td>
                                    <td>Full-time</td>
                                    <td>San Diego</td>
                                    <td>Under Consideration</td>
                                </tr>
                                <tr>
                                    <td>12346</td>
                                    <td>Software Engineer</td>
                                    <td>Full-time</td>
                                    <td>Philadelphia</td>
                                    <td>Interview</td>
                                </tr>
                                <tr>
                                    <td>78902</td>
                                    <td>Data Analyst</td>
                                    <td>Full-time</td>
                                    <td>Portland</td>
                                    <td>Accepted</td>
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

export default CandidateJobApplied;