import { Link } from "react-router-dom";


function Home() {
  return <div>



<header id="home">
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner" role="listbox">
                      <div className="carousel-item active" > 
                        <div className="home-content-box"> 
                            <div className="home-content-box-inner text-center">
                                <div className="home-heading animated fadeInDown" >
                                    <h3>Fascinating than any <br/> fashion salon</h3>
                                </div>
                                <div className="home-btn wow fadeInUp" data-wow-delay="0.3s" >
                                    <Link className=" js-scroll-trigger" href="#contact" role="button" title="View Our Work"><button className="btn btn-lg btn-general btn-greenish ">Book Now</button></Link>
                                </div>
                            </div>
                        </div>                    
                      </div>
                      <div className="carousel-item" >
                        <div className="home-content-box"> 
                            <div className="home-content-box-inner text-center">
                                <div className="home-heading animated fadeInDown" >
                                	<h3>your hair style <br/> our passionate team </h3>
                                </div>
                                <div className="home-btn fadeInDown">
                                    <Link className=" js-scroll-trigger" href="#contact" role="button" title="View Our Work"><button className="btn btn-lg btn-general btn-greenish ">Book Now</button></Link>
                                </div>
                            </div>
                        </div> 
                      </div> 
                    </div> 
                </div>
            </header>

  </div>
}

export default Home;
