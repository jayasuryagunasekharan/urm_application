import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import RecruiterHeader from './RecruiterHeader';
import IndexFooter from './IndexFooter';


function RecruiterJobPosted() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Jobs Posted</h1>
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

                    <div className="filters">
                        {/* <!-- Field of Study filter --> */}
                        <label for="field">Field of Study:</label>
                        <select id="field">
                            <option value="all">All</option>
                            <option value="computer-science">Computer Science</option>
                            <option value="chemistry">Chemistry</option>
                            <option value="biology">Biology</option>
                            <option value="physics">Physics</option>
                            <option value="mathematics">Mathematics</option>
                        </select>

                        <label for="location">Location:</label>
                        <select id="location">
                            <option value="all">All</option>
                            <option value="city1">USA</option>
                            <option value="city2">India</option>
                            <option value="city3">Germany</option>
                        </select>

                        <label for="interest">Departmemnt:</label>
                        <select id="interest">
                            <option value="all">All</option>
                            <option value="interest1">Technology</option>
                            <option value="interest2">Human resources</option>
                        </select>

                        <label for="job-type">Job Type:</label>
                        <select id="job-type">
                            <option value="all">All</option>
                            <option value="part-time">PHD</option>
                            <option value="part-time">Faculty</option>
                        </select>
                    </div>

                    {/* <!-- Job Applied Table --> */}
                    <div className="job-applied">
                        <table>
                            <thead>
                                <tr>
                                    <th>Job Id</th>
                                    <th>Job Description</th>
                                    <th>Department</th>
                                    <th>Location</th>
                                    <th>Pay Scale</th>
                                    <th>Qualifications</th>
                                    <th>Deadline</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>A human resources manager with people management skills and the ability to carry out
                                        duties in a way that promotes employee welfare and the company’s growth.</td>
                                    <td>Human Resources</td>
                                    <td>Arlington</td>
                                    <td>$70K-$85K</td>
                                    <td>Master's</td>
                                    <td>July 23, 2023</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>A manager with people management skills and the ability to carry out duties in a way
                                        that promotes employee welfare and the company’s growth.</td>
                                    <td>Technology</td>
                                    <td>Frisco</td>
                                    <td>$75K-$95K</td>
                                    <td>Master's</td>
                                    <td>July 23, 2023</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>A manager with people management skills and the ability to carry out duties in a way
                                        that promotes employee welfare and the company’s growth.</td>
                                    <td>Technology</td>
                                    <td>Frisco</td>
                                    <td>$75K-$95K</td>
                                    <td>Master's</td>
                                    <td>July 23, 2023</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>A manager with people management skills and the ability to carry out duties in a way
                                        that promotes employee welfare and the company’s growth.</td>
                                    <td>Technology</td>
                                    <td>Frisco</td>
                                    <td>$75K-$95K</td>
                                    <td>Master's</td>
                                    <td>July 23, 2023</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>A manager with people management skills and the ability to carry out duties in a way
                                        that promotes employee welfare and the company’s growth.</td>
                                    <td>Technology</td>
                                    <td>Austin</td>
                                    <td>$75K-$115K</td>
                                    <td>Master's</td>
                                    <td>July 23, 2023</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>A manager with people management skills and the ability to carry out duties in a way
                                        that promotes employee welfare and the company’s growth.</td>
                                    <td>Technology</td>
                                    <td>San Antonio</td>
                                    <td>$75K-$95K</td>
                                    <td>Master's</td>
                                    <td>July 23, 2023</td>
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

export default RecruiterJobPosted;