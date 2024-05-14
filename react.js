import React from 'react';
import './style.css';

const Webpage = () => {
    return (
        <div>
            <form action="react.js" method="post">
                <div className="main">
                    <div className="navbar">
                        <div className="icon">
                            <h2 className="logo">HOME EVENTS</h2>
                        </div>

                        <div className="menu">
                            <ul>
                                <li><a href="#">HOME</a></li>
                                <li><a href="services.html">SERVICES</a></li>
                                <li><a href="design.html">DESIGN</a></li>
                                <li><a href="contact1.html">CONTACT</a></li>
                            </ul>
                        </div>

                        <div className="search">
                            <input className="srch" type="search" name="" placeholder="Type To text" />
                            <a href="#"> <button className="btn">Search</button></a>
                        </div>
                    </div> 
                    <div className="content">
                        <h1>House Warming & <br /><span>Celebrations</span> </h1>
                        <p className="par">"HomeEvents is a premier event management company specializing in creating <br /> unforgettable experiences within the comfort of your own space. With meticulous <br /> attention to detail and personalized service, we transform your vision into reality for every occasion."</p>

                        <button className="cn"><a href="contact.html">JOIN US</a></button>

                        <div className="form">
                            <h2>Login Here</h2>
                            <input type="email" name="email" placeholder="Email" />
                            <input type="password" name="password" placeholder="Password" />
                            <button className="btnn">Login</button>

                            <p className="link">Don't have an account<br />
                            <a href="signup.html">Signup </a> here</p>
                            <p className="liw">Log in with</p>

                            <div className="icons">
                                <a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
                                <a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
                                <a href="#"><ion-icon name="logo-twitter"></ion-icon></a>
                                <a href="#"><ion-icon name="logo-google"></ion-icon></a>
                                <a href="#"><ion-icon name="logo-skype"></ion-icon></a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
        </div>
    );
};

export default Webpage;
