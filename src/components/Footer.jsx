import React from 'react'
import './Footer.css'
import LanguageIcon from '@mui/icons-material/Language';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='footer_main_parent'>
        <h3>Inspiration for future getaways</h3>
        <div className='footer_links'>
            <div>
                <p><b>Support</b></p>
                <p>Help Center</p>
                <p>AirCover</p>
                <p>Anti-discrimination</p>
                <p>Disability support</p>
                <p>Cancellation options</p>
                <p>Report neighbourhood concern</p>
            </div>
            <div>
                <p><b>Hosting</b></p>
                <p>Airbnb your home</p>
                <p>AirCover for Hosts</p>
                <p>Hosting resources</p>
                <p>Community forum</p>
                <p>Hosting responsibly</p>
                <p>Join a free Hosting class</p>
            </div>
            <div>
                <p><b>Airbnb</b></p>
                <p>Newsroom</p>
                <p>New features</p>
                <p>Careers</p>
                <p>Investors</p>
                <p>Airbnb.org emergency stays</p>
            </div>
        </div>
        <div className='Final_Footer'>
            <div>
                <p>©2024 Airbnb,Inc.</p>
                <p>Privacy</p>
                <p>Terms</p>
                <p>Sitemap</p>
                <p>Company details</p>
            </div>
            <div>
                <p className='Final_footer_language'><LanguageIcon/> English</p>
                <p><b>$ USD</b></p>
                <p className='Final_footer_smallsc_hide'><FacebookIcon/></p>
                <p className='Final_footer_smallsc_hide'><TwitterIcon/></p>
                <p className='Final_footer_smallsc_hide'><InstagramIcon/></p>
            </div>
        </div>
    </div>
  )
}

export default Footer