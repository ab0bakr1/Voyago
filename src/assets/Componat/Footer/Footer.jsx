import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF'
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons/faXTwitter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./Footer.css"
import imgbuy1 from "../../IMG/Buy1.png"
import imgbuy2 from "../../IMG/Buy2.png"
import imgbuy3 from "../../IMG/Buy3.png"
import imgbuy4 from "../../IMG/Buy4.png"
import imgbuy5 from "../../IMG/Buy5.png"



const Footer = () => {
  return (
    <footer className='mx-auto lg:px-32 md:px-10 px-2'>
        <div className="footer-top flex justify-between items-center text-white">
            <div className="logo">
                <h1>Voyago</h1>
            </div>
            <div className='text-center uppercase'>
                <h6>follow us</h6>
                <div className="socials flex gap-5 text-lg mt-2">
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faXTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faLinkedinIn} />
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-middle grid md:grid-cols-4 grid-cols-1 gap-6 text-white py-10">
            <div className="contact flex flex-col gap-2">
                <h6>Contact</h6>
                <p>123 Street, City, Country</p>
                <p>+123 456 7890</p>
                <p>Voyago@Voyago.com</p>
            </div>
            <div className="links flex flex-col gap-2">
                <h6>company</h6>
                <a href="#">about</a>
                <a href="#">Tourz Reviews</a>
                <a href="#">Contact Us</a>
                <a href="#">Travel Guides</a>
                <a href="#">Data Policy</a>
                <a href="#">Cookie Policy</a>
                <a href="#">Legal</a>
                <a href="#">Sitemap</a>
            </div>    
            <div className="support flex flex-col gap-2">
                <h6>support</h6>
                <a href="#">Get in Touch</a>
                <a href="#">Help center</a>
                <a href="#">Live chat</a>
                <a href="#">How it works</a>
            </div>
            <div className="newsletter flex flex-col gap-2">
                <h6>newsletter</h6>
                <p>Subscribe to our newsletter to get the latest news and offers.</p>
                <form action="">
                    <input className='py-2 lg:px-3 md:px-5 px-6 w-2/3' type="email" placeholder='Enter your email' />
                    <button className='w-1/3' type='submit'>Subscribe</button>
                </form>
                <div className="App flex flex-col gap-2">
                    <h6>mobile App</h6>
                    <a href="#">iOS App</a>
                    <a href="#">Android App</a>
                </div>
            </div>
        </div>
        <hr />
        <div className="footer-bottom flex justify-between items-center text-white">
            <h3>© Copyright Voyago 2025</h3>
            <div className="buy flex justify-center items-center ">
                <img src={imgbuy1} alt="" />
                <img src={imgbuy2} alt="" />
                <img src={imgbuy3} alt="" />
                <img src={imgbuy4} alt="" />
                <img src={imgbuy5} alt="" />
            </div>
        </div>
    </footer>
  )
}

export default Footer