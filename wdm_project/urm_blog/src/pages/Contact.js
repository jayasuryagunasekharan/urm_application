import React, { Fragment } from 'react';

function Contact() {
    return (
        <Fragment>
            <div className="body_bg layout_padding">

                {/* <!-- contact section --> */}
                <section className="contact_section">
                    <div className="container">
                        <div className="heading_container">
                            <h2>
                                Let's Get In Touch!
                            </h2>
                        </div>
                    </div>
                    <div className="container contact_bg layout_padding2-top">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="contact_form ">
                                    <form action="">
                                        <input type="text" placeholder="Name " />
                                        <input type="email" placeholder="Email" />
                                        <input type="text" placeholder="Message" className="message_input" />
                                        <button>
                                            Send
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="img-box">
                                    <img src="assets/images/contact-img.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- end contact section --> */}

            </div>
            {/* <!-- info section --> */}

            <section className="info_section layout_padding">
                <div className="footer_contact">
                    <div className="heading_container">
                        <h2>
                            Contact Us
                        </h2>
                    </div>
                    <div className="box">
                        <a href="" className="img-box">
                            <img src="assets/images/location.png" alt="" className="img-1" />
                            <img src="assets/images/location-o.png" alt="" className="img-2" />
                        </a>
                        <a href="" className="img-box">
                            <img src="assets/images/call.png" alt="" className="img-1" />
                            <img src="assets/images/call-o.png" alt="" className="img-2" />
                        </a>
                        <a href="" className="img-box">
                            <img src="assets/images/envelope.png" alt="" className="img-1" />
                            <img src="assets/images/envelope-o.png" alt="" className="img-2" />
                        </a>
                    </div>
                </div>


            </section>


            {/* <!-- end info section --> */}

            {/* <!-- footer section --> */}
            <section className="container-fluid footer_section">
                <p>
                    Copyright &copy; All Rights Reserved By URM Blog
                </p>
            </section>
            {/* <!-- footer section --> */}
        </Fragment>
    )
}

export default Contact;