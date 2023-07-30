import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CandidateHeader from './CandidateHeader';
import IndexFooter from './IndexFooter';


function CandidateJobSearch() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Candidate Job Search</h1>
                    <CandidateHeader />
                    <img src="assets/images/surya.jpg" className="user-pic" alt=""></img>
                </div>
            </header>

            <main>
                {/* <!-- Job Searching Content --> */}
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
                            {/* <!-- Add more options as needed --> */}
                        </select>

                        {/* <!-- Location filters --> */}
                        <label for="location">Location:</label>
                        <select id="location">
                            <option value="all">All</option>
                            <option value="city1">USA</option>
                            <option value="city2">India</option>
                            <option value="city3">Germany</option>
                            {/* <!-- Add more options as needed --> */}
                        </select>

                        <label for="interest">Interest:</label>
                        <select id="interest">
                            <option value="all">All</option>
                            <option value="interest1">AI</option>
                            <option value="interest2">ML</option>
                            <option value="interest3">OC</option>
                            {/* <!-- Add more options as needed --> */}
                        </select>

                        <label for="job-type">Job Type:</label>
                        <select id="job-type">
                            <option value="all">All</option>
                            <option value="part-time">PHD</option>
                            <option value="part-time">Faculty</option>
                            {/* <!-- Add more options as needed --> */}
                        </select>
                    </div>


                    <div className="candidate-list">
                        {/* <!-- Display list of available job postings here --> */}
                        <div className="job-posting">
                            <div className="job-info">
                                <h2>Machine Learning Assistant Professor</h2>
                                <p>Field of Study: Computer Science</p>
                                <p>Location: USA</p>
                                <p>Job Type: Faculty</p>
                                {/* <!-- Add more job details as needed --> */}
                            </div>
                            <div className="job-actions">
                                <button type="submit">Apply</button>
                                <button>Save</button>
                            </div>
                        </div>

                        <div className="job-posting">
                            <div className="job-info">
                                <h2>Phd Student</h2>
                                <p>Field of Study: Chemistry</p>
                                <p>Location: USA</p>
                                <p>Job Type: PHD</p>
                                {/* <!-- Add more job details as needed --> */}
                            </div>
                            <div className="job-actions">
                                <button>Apply</button>
                                <button>Save</button>
                            </div>
                        </div>

                        {/* <!-- Add more job postings as needed --> */}
                    </div>
                </section>
            </main>

            <IndexFooter />
        </Fragment >
    )
}

export default CandidateJobSearch;