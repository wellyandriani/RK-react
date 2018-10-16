import React, { Component } from 'react';
import Carol from './component/Carausel';
import { Button } from 'reactstrap';
import Order from './component/BookingRoom'
import Login from './component/Login'
import Event from './component/Bookingevent'
import './App.css'
import './css/animate.css'
import './css/bootstrap.min.css'
import './css/magnific-popup.css'
import './css/classy-nav.min.css'

import contact01 from './img/core-img/contact+icon-01.png'
import contact02 from './img/core-img/contact+icon-02.png'
import contact05 from './img/core-img/contact+icon-05.png'
import tenant01 from './img/clients-img/tenant01.jpg'
import tenant02 from './img/clients-img/tenant02.jpeg'
import tenant03 from './img/clients-img/MB.png'
import tenant04 from './img/clients-img/sinergy.png'
import event from './img/bg-img/event.jpeg'
import event1 from './img/bg-img/event1.jpeg'
import event2 from './img/bg-img/event3.jpeg'
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
    constructor(props){
        super(props);
        this.state = {
            showModule: ''
        };
        //debugger // eslint-disable-line 
        this.showCreate = this.showCreate.bind(this);
        this.showLogin = this.showLogin.bind(this);
        this.showEvent = this.showEvent.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }
  render(){
    return(
    <div>


    <header className="header-area">
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

                            <div className="classynav">
                            <div className="widget-title">
                                <a style={{marginLeft:'-85px'}}>
                                    <img style={{width:'55px', height:'55px'}} src={logo} alt="logo"/>
                                </a>
                            </div>       
                                <ul>
                                    <li><a href="#home">Home</a> </li>
                                    <li><a href="#facility">Facilities</a> </li>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#event">Event</a></li>
                                    <li><a href="#pricing">Pricing</a> </li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="calling-info">
                            <div className="call-center">
                                <button className="btn btn-sm" style={{border:'0', backgroundColor:'#f2ac21'}} onClick={this.showLogin} >Login/Member</button>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        </div>
    </header>

        <div style={{marginTop:'-50px'}} id="home">
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
                                <h5>Hotdesk or Flexidesk</h5>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="single-top-features d-flex align-items-center justify-content-center">
                                <i className="icon-assistance"></i>
                                <h5>Event Space</h5>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="single-top-features d-flex align-items-center justify-content-center">
                            <i class="icon-id-card"></i>
                                <h5>Startup & IT Hub</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div className="academy-courses-area section-padding-100-0" id="facility">
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

    <div class="breadcumb-area bg-img" id="about">
        <div class="bradcumbContent">
            <h2>ABOUT US</h2>
        </div>
    </div>
    <section class="about-us-area mt-50 section-padding-100">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading text-center mx-auto wow fadeInUp" data-wow-delay="300ms">
                        <span>The Best</span>
                        <h3>We are the Coworking Space</h3>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 col-md-6 wow fadeInUp" data-wow-delay="400ms">
                    <p>Konsep kantor bersama kini mulai menjadi trend di Batam, Kepulauan Riau. Konsep itu pun digagas Ruang Kreasi dengan membuat bisnis co-working space atau kantor bersama. Ruang Kreasi menyediakan tempat bagi siapapun untuk menyewa, baik personal maupun perusahaan. Sewanya bisa  bulanan hingga per hari bahkan per jam, selain itu juga ada tarif untuk pelajar. Karna Untuk penyewaan gedung sendiri tentu harganya jauh lebih mahal. Harga mulai Rp50 ribu per hari, sedangkan untuk umum Rp80 ribu per hari di dalamnya sudah termasuk pemakaian semua fasilitas sepuasnya</p>
                </div>
                <div class="col-12 col-md-6 wow fadeInUp" data-wow-delay="500ms">
                    <p>Tentu saja Ruang Kreasi cocok bagi para pelaku start up digital, freelancers atau usaha kecil dan menengah. Selain itu, keuntungan menyewa co-working space di Ruang Kreasi, selain praktis, bisa bergabung bersama orang-orang profesional dengan latar belakang berbeda. Ruang Kreasi juga terkesan cozy atau nyaman, ruangan yang disediakan didesain sedemikian rupa, bersih, dan membuat Anda betah berada di kantor berlama-lama. Ruang Kreasi juga menyediakan beberapa tarif umum hingga pelajar. </p>
                </div>
            </div>
        </div>
    </section>


    
    <div className="testimonials-area section-padding-100 bg-img bg-overlay" style={{backgroundImage: `url(${bg4})`}} id="event">
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
                    <div style={{width:'400px', height:'auto'}}>
                    <img src={event} alt="event"/>
                    </div>
            </div>
            <div className="col align-self-center" style={{marginTop:'60px'}}>
                <div className="single-testimonial-area mb-100 d-flex wow fadeInUp" data-wow-delay="400ms">
                    <div className="testimonial-content">
                    <h5>Business Management Series</h5>
                        <p>From digital marketing to modern organization management, our space provide you with 
                            insights and strategy for your business from top speakers from practitioners.</p>
                    </div>
                </div>
            </div>
            
            </div>

              <div className="row" style={{marginTop:'50px'}}>
                <div className="col-12 col-md-6">
                    <div style={{width:'400px', height:'auto'}}>
                        <img src={event1} alt="event1"/>
                    </div>
                </div>
                <div className="col align-self-center" style={{marginTop:'60px'}}>
                    <div className="single-testimonial-area mb-100 d-flex wow fadeInUp" data-wow-delay="400ms">
                            <div className="testimonial-content">
                                <h5>Social Series</h5>
                                <p>Cooking, brunch or healthy lifestyle seminar to balance your daily life.</p>
                            </div>
                    </div>  
                </div>
            
            </div>


              <div className="row" style={{marginTop:'50px'}}>
            <div className="col-12 col-md-6">
                    <div style={{width:'400px', height:'auto'}}>
                    <img src={event2} alt="event2"/>
                    </div>
            </div>
            <div className="col align-self-center" style={{marginTop:'60px'}}>
                <div className="single-testimonial-area mb-100 d-flex wow fadeInUp" data-wow-delay="400ms">
                    <div className="testimonial-content">
                    <h5>Tech Series</h5>
                        <p>Product Review, Startups tips or coding workshops, we got it covered for you.</p>
                    </div>
                </div>
            </div>

        </div>
                <div className="section-heading text-center mx-auto white wow fadeInUp" data-wow-delay="300ms">
                    <Button style={{border:'0',width:'25%' ,backgroundColor:'#f2ac21'}} onClick={this.showEvent} className="btn academy-btn btn-sm" type="submit">Booking Event</Button>
                </div>
    </div>
    </div>
    <div class="top-popular-courses-area section-padding-100-70" id="pricing">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="section-heading text-center mx-auto wow fadeInUp" data-wow-delay="300ms">
                        <h3>PLANS & PRICING</h3>
                        <span>COWORKING PACKAGE</span>
                    </div>
                </div>
            </div>
            <div class="row">

                <div class="col-12 col-lg-6">
                    <div class="single-top-popular-course d-flex align-items-center flex-wrap mb-30 wow fadeInUp"
                        data-wow-delay="400ms">
                        <div class="popular-course-content">
                            <h5>Co-work alpha</h5>
                            <div> 
                                <ul>
                                    <li>Facilities : High Speed WIFI, Hot Desk/Dedicated, Free Flow Tea/Coffee, Printing, Meeting room usage, Locker, Silent Room</li>
                                    <li>Daily/Pax : <strong>RP 80,000</strong></li>
                                    <li> Weekly / Monthly : <strong>Rp 400,000 / Rp 1,250,000 </strong> </li>
                                </ul>
                            </div>
                            <Button style={{border:'0',backgroundColor:'#f2ac21'}} onClick={this.showCreate} className="academy-btn btn-sm ">Order now</Button>
                        </div>
                        <div class="popular-course-thumb bg-img" style={{backgroundImage: `url(${bg3})`}}></div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="single-top-popular-course d-flex align-items-center flex-wrap mb-30 wow fadeInUp"
                        data-wow-delay="500ms">
                        <div class="popular-course-content">
                            <h5>Cowork Plus</h5>
                            <div>
                                <ul>
                                    <li>Facilities :  High Speed WIFI, Free Flow Tea/Coffee, Dedicated Desk, Silent room, Meeting room usage, Printing, Locker, events and showcase, guest pass, Passport Access, mail service, up to 4 pax</li>
                                    <li> Monthly : <strong> Rp 2,750,000</strong></li>
                                </ul>
                            </div>
                            <Button style={{border:'0', backgroundColor:'#f2ac21'}} onClick={this.showCreate} className="btn academy-btn btn-sm">Order now</Button>
                        </div>
                        <div class="popular-course-thumb bg-img" style={{backgroundImage: `url(${bg5})`}}></div>
                    </div>
                </div>

                <div class="col-12 col-lg-6">
                    <div class="single-top-popular-course d-flex align-items-center flex-wrap mb-30 wow fadeInUp"
                        data-wow-delay="600ms">
                        <div class="popular-course-content">
                            <h5>Startup / Startup Plus</h5>
                           <div>
                               <ul>
                                   <li>Facilities :  High Speed WIFI, Free Flow Tea/Coffee, Dedicated Desk, Silent room, Meeting room usage, Printing, Locker, events and showcase, guest pass, Passport Access, mail and phone handling, up to 3 pax</li>

                                   <li>Monthly start from : <strong>Rp 1,850,000</strong> </li>
                               </ul>
                           </div>
                           <Button style={{border:'0', backgroundColor:'#f2ac21'}} onClick={this.showCreate} className="btn academy-btn btn-sm">Order now</Button>
                        </div>
                        <div class="popular-course-thumb bg-img" style={{backgroundImage: `url(${bg6})`}}></div>
                    </div>
                </div>
                
                <div class="col-12 col-lg-6">
                    <div class="single-top-popular-course d-flex align-items-center flex-wrap mb-30 wow fadeInUp"
                        data-wow-delay="600ms">
                        <div class="popular-course-content">
                            <h5>Virtual Office</h5>
                            <div>
                                <ul>
                                    <li>Facilities :  High Speed WIFI, Free Flow Tea/Coffee, Hot Desk, meeting room usage, mail and phone handling, guest pass </li>
                                    <li> Start from :<strong> Rp 800,000</strong> </li>
                                </ul>
                            </div>
                            <Button style={{border:'0', backgroundColor:'#f2ac21'}} onClick={this.showCreate} className="btn academy-btn btn-sm">Order now</Button>
                        </div>
                        <div class="popular-course-thumb bg-img" style={{backgroundImage: `url(${bg2})`}}></div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="single-top-popular-course d-flex align-items-center flex-wrap mb-30 wow fadeInUp"
                        data-wow-delay="600ms">
                        <div class="popular-course-content">
                            <h5>Private Office</h5>
                            <div>
                                <ul>

                                    <li style={{marginBottom: '3px'}}>Facilities :  High Speed WIFI, Free Flow Tea/Coffee, Dedicated Desk, Silent room, Meeting room usage, Printing, Locker, events and showcase, guest pass, Passport Access, mail and phone handling, up to 8 pax</li>
                                        
                                    <li>Monthly start from :<strong>Rp 3,000,000</strong> </li>
                                </ul>
                            </div>
                            <Button style={{border:'0', backgroundColor:'#f2ac21'}} onClick={this.showCreate} className="btn academy-btn btn-sm">Order now</Button>
                        </div>
                        <div class="popular-course-thumb bg-img" style={{backgroundImage: `url(${bg1})`}}></div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="single-top-popular-course d-flex align-items-center flex-wrap mb-30 wow fadeInUp"
                        data-wow-delay="700ms">
                        <div class="popular-course-content">
                            <h5>Student</h5>
                            <div> 
                                <ul>
                                    <li style={{marginBottom: '10px'}}>Facilities : High Speed WIFI, Free Flow Tea/Coffee, Hot Desk</li>

                                        <li style={{marginBottom: '10px'}}>Daily/Pax : <strong> Rp 50,000</strong></li>
                                        
                                        <li style={{marginBottom: '10px'}}>Monthly : <strong>Rp 500,000</strong></li>
                                        
                                       <strong>Groupies : Rp 30,000/pax, minimal 3 pax!</strong>  
                                </ul>
                            </div>
                            <Button style={{border:'0', backgroundColor:'#f2ac21'}} onClick={this.showCreate} className="btn academy-btn btn-sm">Order now</Button>
                        </div>
                        <div class="popular-course-thumb bg-img" style={{backgroundImage: `url(${img1})`}}></div>
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
                    <a ><img src={tenant01} alt="tenant1"/></a>
                    <a ><img src={tenant02} alt="tenant2"/></a>
                    <a ><img src={tenant03} alt="tenant3"/></a>
                    <a ><img src={tenant04} alt="tenant4"/></a>
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
    <div className="footer-area" id="contact">
    <div className="main-footer-area section-padding-100-0">
        <div className="container">
            <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                    <div className="footer-widget mb-100">
                        <div className="widget-title">
                            <a ><img style={{marginTop:'18px'}} src={logo} alt="logo"/></a>
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
                            <p>Komp. Nusantara Golden (Behind Ikan Bakar Cianjur),
                                Blok B-10, Batam Centre
                                Batam, 29426</p>
                        </div>
                        <div className="single-contact d-flex mb-30">
                            <i className="icon-telephone-1"></i>
                            <p>Mobile / Whatsapp : 0811 7011 226</p>
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
                        <a style={{marginLeft:'200px'}}>Copyright &copy;Term | Privacy Policy Ruang Kreasi. All Rights Reserved.</a>
                        <a href="https://www.instagram.com/ruangkreasi.co/" target="_blank" ><img src={contact01} alt="contact01" style={{width:'50px', height:'50px', marginLeft:'150px'}}/></a>
                        <a href="https://www.facebook.com/ruangkreasi.co/" target="_blank"><img src={contact05} alt="contact05" style={{width:'50px', height:'50px'}}/></a>
                        <a href="https://www.facebook.com/ruangkreasi.co/" target="_blank"><img src={contact02} alt="contact02" style={{width:'50px', height:'50px'}}/></a>
                    </p>
                    
                </div>
            </div>
        </div>
    </div>
    </div>
    { (this.state.showModule == 'create') && <Order modal={this.state.modal} closeModal={this.closeModal}/> }
    { (this.state.showModule == 'login') && <Login modal={this.state.modal} closeModal={this.closeModal}/> }
    { (this.state.showModule == 'event') && <Event modal={this.state.modal} closeModal={this.closeModal}/> }
    </div>
        )
    }
    showCreate(){
        this.setState({
            showModule: 'create',
            modal: true
        });
    }
    showLogin(){
        this.setState({
            showModule: 'login',
            modal: true
        })
    }
    showEvent(){
        this.setState({
            showModule: 'event',
            modal: true
        })
    }
     closeModal() {
        this.setState({
            showModule: '',
            modal: false
        });
    }
}
export default App;
