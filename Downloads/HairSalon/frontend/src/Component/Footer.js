export default function Footer() {
    const footerStyle = {
        backgroundColor: 'black',
        color: 'white', // Change the text color to white for better visibility
    };
    return <>

        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="footer-contact">
                                    <h2>Salon Address</h2>
                                    <p><i className="fa fa-map-marker-alt"></i>Bhawarkua Indore ,India 452001</p>
                                    <p><i className="fa fa-phone-alt"></i>+91 9893478565</p>
                                    <p><i className="fa fa-envelope"></i>sarodenayan50@gmail.com</p>
                                    {/* <div className="footer-social">
                                        <a href=""><i className="fab fa-twitter"></i></a>
                                        <a href=""><i className="fab fa-facebook-f"></i></a>
                                        <a href=""><i className="fab fa-youtube"></i></a>
                                        <a href=""><i className="fab fa-instagram"></i></a>
                                        <a href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div> */}
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="footer-link">
                                    <h2>Quick Links</h2>
                                    <a href="">Terms of use</a>
                                    <a href="">Privacy policy</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="footer-newsletter">
                            <h2>Newsletter</h2>
                            <p> 
                            We learned the hard way that social media platforms can change
                            the rules on us at anytime (Facebook and Instagram both introduced
                             algorithms that don't guarantee our messages will show up in the
                             newsfeed at all.) 
                            </p>
                            <div className="form">
                                <input className="form-control" placeholder="Email goes here" />
                                <button className="btn">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container copyright">
                <div className="row">
                    <div className="col-md-6">
                        <p>&copy; <a href="https://github.com/Nayan-sarode"> Nayan sarode have all Rights,</a>, All Right Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Designed By <a href="https://github.com/Nayan-sarodel">(Nayan sarode)</a></p>
                    </div>
                </div>
            </div>
        </div>

    </>
}