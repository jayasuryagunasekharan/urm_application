import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import CandidateHeader from './CandidateHeader';
import IndexFooter from './IndexFooter';


function CandidateDashboard() {
    return (
        <Fragment>

            <header>
                <div className="header-container">
                    <h1>Candidate Dashboard</h1>
                    <CandidateHeader />
                </div>
            </header>

            <main>
                {/* <!-- Dahsboard Content --> */}
                <section id="dashboard">
                    <div className="row">
                        <article className="style1">
                            <div className="graph-container">
                                <div className="graph-info">
                                    <h1><Link to="/candidate_jobsearch">Jobs Posted</Link></h1>
                                    <span className="count">2</span>
                                </div>
                                <div className="graph">
                                    <img src="assets/images/bar.jpg" alt="Chart" />
                                </div>
                            </div>
                        </article>
                        <article className="style1">
                            <div className="graph-container">
                                <div className="graph-info">
                                    <h1><Link to="/candidate_jobapplied">Jobs Applied</Link></h1>
                                    <span className="count">15</span>
                                </div>
                                <div className="graph">
                                    <img src="assets/images/bar.jpg" alt="Chart" />
                                </div>
                            </div>
                        </article>
                    </div>
                    <div className="row">
                        <article className="style1">
                            <div className="graph-container">
                                <div className="graph-info">
                                    <h1><Link to="/candidate_jobsaved">Jobs Saved</Link></h1>
                                    <span className="count">8</span>
                                </div>
                                <div className="graph">
                                    <img src="assets/images/bar.jpg" alt="Chart" />
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

export default CandidateDashboard;