import React, { Component } from 'react';
import Carol from './component/Carausel';
import './App.css'
import './css/animate.css'
import './css/bootstrap.min.css'
import './css/magnific-popup.css'
import './css/classy-nav.min.css'

import bg from './img/bg-img/bg.jpeg'
import event from './img/bg-img/event.jpeg'
import event1 from './img/bg-img/event1.jpeg'
import event3 from './img/bg-img/event3.jpeg'
import img1 from './img/bg-img/1.jpg'
import bg1 from './img/bg-img/bg-1.jpeg'
import bg2 from './img/bg-img/bg-2.jpeg'
import bg3 from './img/bg-img/bg-3.jpeg'
import bg4 from './img/bg-img/bg-4.jpeg'
import bg5 from './img/bg-img/bg-5.jpeg'
import bg6 from './img/bg-img/bg-6.jpeg'
import fc1 from './img/facility-img/1.png'
import fc2 from './img/facility-img/2.png'
import fc3 from './img/facility-img/3.png'
import fc4 from './img/facility-img/4.png'
import fc5 from './img/facility-img/5.png'
import fc6 from './img/facility-img/6.png'
import fc7 from './img/facility-img/7.png'
import fc8 from './img/facility-img/8.png'
import fc9 from './img/facility-img/9.png'
import fc10 from './img/facility-img/10.png'
import fc11 from './img/facility-img/11.png'
import fc12 from './img/facility-img/12.png'
import fc13 from './img/facility-img/13.png'
import fc14 from './img/facility-img/14.png'
import logo from './img/core-img/logo.png'


class App extends Component{
  render(){
    return(
    <div>


    <header className="header-area">
        <div className="top-header">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-12 h-100">
                        <div className="header-content h-100 d-flex align-items-center justify-content-between">
                            <div className="academy-logo">
                                <img className="logo" src={logo} alt="logo"/>
                            </div>
                            
                            <div className="login-content">
                                <button  style={{width:'auto'}} >Member/Login</button>
                                <div id="id01" className="modal">

                                    <form className="modal-content animate" action="/action_page.php">
                                        <div className="imgcontainer">
                                        <span  className="close" title="Close Modal">&times;</span>
                                        </div>
                                    
                                        <div className="containerlogin">
                                        <label ><b>Email</b></label>
                                        <input type="email" placeholder="Enter Email" name="uname" required />
                                    
                                        <label ><b>Password</b></label>
                                        <input type="password" placeholder="Enter Password" name="psw" required />
                                            
                                        <button type="submit">Login</button>
                                        <label>
                                            <input type="checkbox"  name="remember"/> Remember me
                                        </label>
                                        </div>
                                    
                                        <div className="containerlogin" style={{backgroundcolor:'#f1f1f1'}}>
                                        <button type="button"  className="cancelbtn">Cancel</button>
                                        <span className="psw">Forgot <a>password?</a></span>
                                        </div>
                                    </form>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    <div id="sticky-wrapper" className="sticky-wrapper is-sticky" style={{height:'85px'}}>
        <div className="academy-main-menu" style={{width: '1351px', position:"fixed", top:'0px', index: 'inherit'}}>
            <div className="classy-nav-container breakpoint-off light left">
                <div className="container">
                    <nav className="classy-navbar justify-content-between">
                        <div className="classy-navbar-toggler">
                            <span className="navbarToggler"></span>
                        </div>

                        <div className="classy-menu">
                            <div className="classycloseIcon">
                                <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                            </div>

                            <div>
                                <ul>
                                    <li ><a>Pricing</a> </li>
                                    <li><a>Facilities</a> </li>
                                    <li><a>About Us</a></li>
                                    <li><a>Event</a></li>
                                    <li><a>Contact</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="calling-info">
                            <div className="call-center">
                                <a> <span>Login/Member</span></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </div>
    </header>

        <div style={{marginTop:'-50px'}}>
         <Carol />
         </div>
                                    

    <div className="top-features-area wow fadeInUp" data-wow-delay="300ms">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="features-content">
                    <div className="row no-gutters">
                        <div className="col-12 col-md-4">
                            <div className="single-top-features d-flex align-items-center justify-content-center">
                                <i className="icon-agenda-1"></i>
                                <h5>Online Courses</h5>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="single-top-features d-flex align-items-center justify-content-center">
                                <i className="icon-assistance"></i>
                                <h5>Amazing Teachers</h5>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="single-top-features d-flex align-items-center justify-content-center">
                                <i className="icon-telephone-3"></i>
                                <h5>Great Support</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className="academy-courses-area section-padding-100-0">
    <div className="container">
            <div className="row">
                    <div className="col-12">
                        <div className="mx-auto white wow fadeInUp" data-wow-delay="300ms" style={{marginBottom: '60px'}}>
                            <h1 className="font-color" >FACILITIES</h1>
                            <p className="font-color">WE HAVE GREAT FACILITIES FOR YOU</p>
                        </div>
                    </div>
                </div>
        <div className="row">
            <div className="col-12 col-sm-6 col-lg-4">
                <div className="d-flex align-items-center mb-100 wow fadeInUp justify-content-center" data-wow-delay="300ms">
                    <div className="course-icon" style={{textAlign: 'center'}}>
                        <img  src={fc1} alt="fc1"/>
                        <h6 style={{marginTop: '20px'}}>Meeting Rooms</h6>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
                <div className=" d-flex align-items-center mb-100 wow fadeInUp justify-content-center" data-wow-delay="400ms">
                    <div className="course-icon" style={{textAlign: 'center'}}>
                        <img  src={fc2} alt="fc2" />
                        <h6 style={{marginTop: '20px'}}>Prayer Room</h6>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
                <div className=" d-flex align-items-center mb-100 wow fadeInUp justify-content-center" data-wow-delay="500ms">
                    <div className="course-icon" style={{textAlign: 'center'}}>
                        <img  src={fc3} alt="fc3"/>
                        <h6 style={{marginTop: '20px'}}>Entertainment Area</h6>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
                <div className=" d-flex align-items-center mb-100 wow fadeInUp justify-content-center" data-wow-delay="600ms">
                    <div className="course-icon" style={{textAlign: 'center'}}>
                        <img  src={fc4} alt="fc4"/>
                        <h6 style={{marginTop: '20px'}}>Mentoring</h6>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
                <div className=" d-flex align-items-center mb-100 wow fadeInUp justify-content-center" data-wow-delay="700ms">
                    <div className="course-icon" style={{textAlign: 'center'}}>
                        <img  src={fc5} alt="fc5"/>
                        <h6 style={{marginTop: '20px'}}>Networks</h6>
                    </div>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-lg-4">
                <div className=" d-flex align-items-center mb-100 wow fadeInUp justify-content-center" data-wow-delay="800ms">
                    <div className="course-icon" style={{textAlign: 'center'}}>
                        <img  src={fc6} alt="fc6"/>
                        <h6 style={{marginTop: '20px'}}>Showcase</h6>
                    </div>
                </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-4">
                    <div className="d-flex align-items-center mb-100 wow fadeInUp justify-content-center" data-wow-delay="300ms">
                        <div className="course-icon" style={{textAlign: 'center'}}>
                            <img  src={fc7} alt="fc7"/>
                            <h6 style={{marginTop: '20px'}}>Locker</h6>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className=" d-flex align-items-center mb-100 wow fadeInUp justify-content-center" data-wow-delay="400ms">
                        <div className="course-icon" style={{textAlign: 'center'}}>
                            <img  src={fc8} alt="fc8"/>
                            <h6 style={{marginTop: '20px'}}>Events</h6>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className=" d-flex align-items-center mb-100 wow fadeInUp justify-content-center" data-wow-delay="500ms">
                        <div className="course-icon" style={{textAlign: 'center'}}>
                            <img  src={fc9} alt="fc9"/>
                            <h6 style={{marginTop: '20px'}}>Workshop</h6>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className=" d-flex align-items-center mb-100 wow fadeInUp justify-content-center" data-wow-delay="600ms">
                        <div className="course-icon" style={{textAlign: 'center'}}>
                            <img  src={fc10} alt="fc10"/>
                            <h6 style={{marginTop: '20px'}}>Growth</h6>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className=" d-flex align-items-center mb-100 wow fadeInUp justify-content-center" data-wow-delay="700ms">
                        <div className="course-icon" style={{textAlign: 'center'}}>
                            <img  src={fc11} alt="fc11"/>
                            <h6 style={{marginTop: '20px'}}>Free Coffee/Tea</h6>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-4">
                    <div className=" d-flex align-items-center mb-100 wow fadeInUp justify-content-center" data-wow-delay="800ms">
                        <div className="course-icon" style={{textAlign: 'center'}}>
                            <img  src={fc12} alt="fc12"/>
                            <h6 style={{marginTop: '20px'}}>Instanat Meals</h6>
                        </div>
                    </div>
                </div>
                
                <div className="col-12 col-sm-6 col-lg-4">
                        <div className=" d-flex align-items-center mb-100 wow fadeInUp justify-content-center" data-wow-delay="700ms">
                            <div className="course-icon" style={{textAlign: 'center'}}>
                                <img  src={fc13} alt="fc13"/>
                                <h6 style={{marginTop: '20px'}}><span> Speed Internet</span> </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-lg-4">
                        <div className=" d-flex align-items-center mb-100 wow fadeInUp justify-content-center" data-wow-delay="800ms">
                            <div className="course-icon" style={{textAlign: 'center'}}>
                                <img  src={fc14} alt="fc14"/>
                                <h6 style={{marginTop: '20px'}}>Hotdesk</h6>
                            </div>
                        </div>
                    </div>

        </div>
    </div>
    </div>
    <div className="testimonials-area section-padding-100 bg-img bg-overlay" style={{backgroundImage: bg4}}>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section-heading text-center mx-auto white wow fadeInUp" data-wow-delay="300ms">
                    <h3>Events</h3>
                    <span>WE ALSO HAVE GREAT EVENTS FOR YOU TO PARTICIPATE</span>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="single-testimonial-area mb-100 d-flex wow fadeInUp" data-wow-delay="400ms">
                    <div style={{marginRight: '20px'}}>
                        <img src={event} alt="event"/>
                    </div>
                    <div className="testimonial-content">
                        <h5>Business Management Series</h5>
                        <p>From digital marketing to modern organization management, our space provide you with 
                            insights and strategy for your business from top speakers from practitioners.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="single-testimonial-area mb-100 d-flex wow fadeInUp" data-wow-delay="500ms">
                    <div style={{marginRight: '20px'}}>
                        <img  src={event1} alt="event1"/>
                    </div>
                    <div className="testimonial-content">
                        <h5>Social Series</h5>
                        <p>Cooking, brunch or healthy lifestyle seminar to balance your daily life.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="single-testimonial-area mb-100 d-flex wow fadeInUp" data-wow-delay="500ms">
                    <div style={{marginRight: '20px'}}>
                        <img src={event1} alt="event1"/>
                    </div>
                    <div className="testimonial-content">
                        <h5>Social Series</h5>
                        <p>Cooking, brunch or healthy lifestyle seminar to balance your daily life.</p>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="single-testimonial-area mb-100 d-flex wow fadeInUp" data-wow-delay="600ms">
                    <div style={{marginRight: '20px'}}>
                        <img src={event3} alt="event3"/>
                    </div>
                    <div className="testimonial-content">
                        <h5>Tech Series</h5>
                        <p>Product Review, Startups tips or coding workshops, we got it covered for you.</p>
                    </div>
                </div>
        </div>
        </div>
                <div className="section-heading text-center mx-auto white wow fadeInUp" data-wow-delay="300ms">
                    <button className="btn academy-btn btn-sm" type="submit" style={{width:'25%'}}>Booking Event</button>
                </div>
    </div>
    </div>
    <div className="top-popular-courses-area section-padding-100-70">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="section-heading text-center mx-auto wow fadeInUp" data-wow-delay="300ms">
                    <h3>PRICING</h3>
                    <span>COWORKING PACKAGE</span>
                </div>
            </div>
        </div>
        <div className="row">

            <div className="col-12 col-lg-6">
                <div className="single-top-popular-course d-flex align-items-center flex-wrap mb-30 wow fadeInUp"
                    data-wow-delay="400ms">
                    <div className="popular-course-content">
                        <h5>Co-work alpha</h5>
                        <div> 
                            <ul>
                                <li style={{marginBottom: '10px'}}>Facilities : High Speed WIFI, Hot Desk/Dedicated, Free Flow Tea/Coffee, Printing, Meeting room usage, Locker, Silent Room</li>
                                <li style={{marginBottom: '10px'}}>Daily/Pax : <strong>RP 80,000</strong></li>
                                <li style={{marginBottom: '10px'}}> Weekly / Monthly : <strong>Rp 400,000 / Rp 1,250,000 </strong> </li>
                            </ul>
                        </div>
                        <button className="btn academy-btn btn-sm" type="submit">Order now</button>
                    </div>
                    <img style={{width: '20px'}} className="popular-course-thumb bg-img" src={bg3} alt="bg3"/>
                </div>
            </div>

            <div className="col-12 col-lg-6">
                <div className="single-top-popular-course d-flex align-items-center flex-wrap mb-30 wow fadeInUp"
                    data-wow-delay="500ms">
                    <div className="popular-course-content">
                        <h5>Cowork Plus</h5>
                        <div>
                            <ul>
                                <li style={{marginBottom: '10px'}}>Facilities :  High Speed WIFI, Free Flow Tea/Coffee, Dedicated Desk, Silent room, Meeting room usage, Printing, Locker, events and showcase, guest pass, Passport Access, mail service, up to 4 pax</li>
                                <li style={{marginBottom: '10px'}}> Monthly : <strong> Rp 2,750,000</strong></li>
                            </ul>
                        </div>
                        <button className="btn academy-btn btn-sm" type="submit">Order now</button>
                    </div>
                    <img className="popular-course-thumb bg-img" src={bg5} alt="bg5"/>
                </div>
            </div>

            <div className="col-12 col-lg-6">
                <div className="single-top-popular-course d-flex align-items-center flex-wrap mb-30 wow fadeInUp"
                    data-wow-delay="600ms">
                    <div className="popular-course-content">
                        <h5>Startup / Startup Plus</h5>
                    <div>
                        <ul>
                            <li style={{marginBottom: '3px'}}>Facilities :  High Speed WIFI, Free Flow Tea/Coffee, Dedicated Desk, Silent room, Meeting room usage, Printing, Locker, events and showcase, guest pass, Passport Access, mail and phone handling, up to 3 pax</li>

                            <li style={{marginBottom: '3px'}}>Monthly start from : <strong>Rp 1,850,000</strong> </li>
                        </ul>
                    </div>
                    <button className="btn academy-btn btn-sm" type="submit">Order now</button>
                    </div>
                    <img className="popular-course-thumb bg-img" src={bg6} alt="bg4"/>
                </div>
            </div>
            
            <div className="col-12 col-lg-6">
                <div className="single-top-popular-course d-flex align-items-center flex-wrap mb-30 wow fadeInUp"
                    data-wow-delay="600ms">
                    <div className="popular-course-content">
                        <h5>Virtual Office</h5>
                        <div>
                            <ul>
                                <li style={{marginBottom: '10px'}}     >Facilities :  High Speed WIFI, Free Flow Tea/Coffee, Hot Desk, meeting room usage, mail and phone handling, guest pass </li>
                                <li> Start from :<strong> Rp 800,000</strong> </li>
                            </ul>
                        </div>
                        <button className="btn academy-btn btn-sm" type="submit">Order now</button>
                    </div>
                    <img className="popular-course-thumb bg-img" src={bg} alt="bg2"/>
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <div className="single-top-popular-course d-flex align-items-center flex-wrap mb-30 wow fadeInUp"
                    data-wow-delay="600ms">
                    <div className="popular-course-content">
                        <h5>Private Office</h5>
                        <div>
                            <ul>

                                <li style={{marginBottom: '3px'}}>Facilities :  High Speed WIFI, Free Flow Tea/Coffee, Dedicated Desk, Silent room, Meeting room usage, Printing, Locker, events and showcase, guest pass, Passport Access, mail and phone handling, up to 8 pax</li>
                                    
                                <li>Monthly start from :<strong>Rp 3,000,000</strong> </li>
                            </ul>
                        </div>
                        <button className="btn academy-btn btn-sm" type="submit">Order now</button>
                    </div>
                    <img className="popular-course-thumb bg-img" src={bg1} alt="bg"/>
                </div>
            </div>
            <div className="col-12 col-lg-6">
                <div className="single-top-popular-course d-flex align-items-center flex-wrap mb-30 wow fadeInUp"
                    data-wow-delay="700ms">
                    <div className="popular-course-content">
                        <h5>Student</h5>
                        <div> 
                            <ul>
                                <li style={{marginBottom: '10px'}}>Facilities : High Speed WIFI, Free Flow Tea/Coffee, Hot Desk</li>

                                    <li style={{marginBottom: '10px'}}>Daily/Pax : <strong> Rp 50,000</strong></li>
                                    
                                    <li style={{marginBottom: '10px'}}>Monthly : <strong>Rp 500,000</strong></li>
                                    
                                <strong>Groupies : Rp 30,000/pax, minimal 3 pax!</strong>  
                            </ul>
                        </div>
                        <button className="btn academy-btn btn-sm" type="submit">Order now</button>
                    </div>
                    <img className="popular-course-thumb bg-img" src={bg3} alt=""/>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className="partner-area section-padding-0-100">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="partners-logo d-flex align-items-center justify-content-between flex-wrap">
                    <a  ><img src="img/clients-img/partner-1.png" alt=""/></a>
                    <a  ><img src="img/clients-img/partner-2.png" alt=""/></a>
                    <a  ><img src="img/clients-img/partner-3.png" alt=""/></a>
                    <a  ><img src="img/clients-img/partner-4.png" alt=""/></a>
                    <a  ><img src="img/clients-img/partner-5.png" alt=""/></a>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className="call-to-action-area">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="cta-content d-flex align-items-center justify-content-between flex-wrap">
                    <h3>Ruang Kreasi is a coworking space that blends community, education, spaces and technology to inspire you and helps you grow your business !</h3>
                
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className="footer-area">
    <div className="main-footer-area section-padding-100-0">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="footer-widget mb-100">
                        <div className="widget-title">
                            <a  ><img src={logo} alt="logo" style={{textAlign: 'center'}}/></a>
                        </div>
                    </div>
                </div>
            
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="footer-widget mb-100">
                        <div className="widget-title">
                            <h6>Contact</h6>
                        </div>
                        <div className="single-contact d-flex mb-30">
                            <i className="icon-placeholder"></i>
                            <p>Komp. Nusantara Golden (Behind Ikan Bakar Cianjur)
                                Blok B-10, Batam Centre
                                Batam, 29426</p>
                        </div>
                        <div className="single-contact d-flex mb-30">
                            <i className="icon-telephone-1"></i>
                            <p>Mobile / Whatsapp : 0811 7011 226</p>
                        </div>
                        <div className="single-contact d-flex">
                            <i className="icon-contract"></i>
                            <p>Instagram : @ruangkreasi.co</p>
                        </div>
                        <div>
                            https://www.facebook.com/ruangkreasi.co/
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="bottom-footer-area">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <p>
                        Copyright &copy;<script>
                            document.write(new Date().getFullYear());
                        </script> Term | Privacy Policy Ruang Kreasi. All Rights Reserved.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
        )
    }
}
export default App;
