import React, { useState } from 'react'
import Logo_Name from '../assests/Name_Logo.png'
import './Navbar.css'
import LanguageIcon from '@mui/icons-material/Language';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

const Naxbar = ({ checkInDate, checkOutDate, setCheckInDate, setCheckOutDate,Country, setCountry}) => {
  
  const [mobileMenu, setMobileMenu] = useState(false);
  
  function accessMobileMenu(){
    setMobileMenu(!mobileMenu);
  }

  function search_country(e){
    setCountry(e.target.value);
  }

  function choose_checkInDate(e){
    if(e.target.value) setCheckInDate(e.target.value);
    else setCheckInDate(null);
  }

  function choose_checkOutDate(e){
    if(e.target.value) setCheckOutDate(e.target.value);
    else setCheckOutDate(null);
  }

  const reverseDate = (dateString) => {
    if (!dateString) return '';
    
    const dateParts = dateString.split('-').reverse();
    
    return dateParts.join('-');
  };
  

  return (
    <div className='navbar_parent_div'>
      <div className='navbar_logo_name'>
        <img src={Logo_Name} alt="Naxbar" />
      </div>
      <div className='nav_bar_links_filters'>
        <div className='nav_bar_links'>
          <p><b>Stays</b></p>
          <p>Experiences</p>
          <p>Online Experiences</p>
        </div>
        <div className='nav_bar_filters'>
          <div>
            <p>Where</p>
            <input className='nav_bar_filters_input' value={Country} onChange={search_country} type='text' placeholder='Search destinations'></input>
          </div>
          <div>
            <p>Check in</p>
            <input className='nav_bar_filters_input' value={checkInDate||''} onChange={choose_checkInDate} type='date' placeholder='Add dates'></input>
          </div>
          <div>
            <p>Check out</p>
            <input className='nav_bar_filters_input' value={checkOutDate||''} onChange={choose_checkOutDate} type='date' placeholder='Add dates'></input>
          </div>
          <div>
            <p>Who</p>
            <input  className='nav_bar_filters_input' type='number' placeholder='Add guests'></input>
          </div>
          <button className='navbar_search'><SearchIcon/></button>
        </div>
      </div>
      <div className='navbar_menu_options'>
        <p><b>Airbnb your home</b></p>
        <p><LanguageIcon/></p>
        <div className='navbar_menu_Account'><MenuIcon/><AccountCircleIcon/></div>;
      </div>
      <div className='mobile_Navbar'>
        <div className='mobile_Navbar_searchbox'  onClick={accessMobileMenu}>
          <div className='mobile_Navbar_searchicon'><SearchIcon/></div>
          <div className='mobile_Navbar_details'>
            <p className='mobile_Navbar_location'>{Country? Country:'Anywhere'}</p>
            <div className='mobile_Navbar_other'>
              <p>{checkInDate? reverseDate(checkInDate):19} - {checkOutDate? reverseDate(checkOutDate):'26 Apr'}</p>
              <p>.Add guests</p>
            </div>
          </div>
        </div>
      </div>
      <div className='mobile_navbar_search' style={mobileMenu ?{display: 'flex'}:{display:'none'}}>
      <button className='mobile_navbar_search_button' onClick={accessMobileMenu}><SearchIcon style={{fontSize:'large'}}/>Search</button>
        <div className='mobile_navbar_Options'>
          <p className='mobile_navbar_closeicon' onClick={accessMobileMenu}><CloseIcon style={{fontSize:'medium'}}/></p>
          <p><u>Stays</u></p>
          <p>Experiences</p>
        </div>
        <div className='Mobile_nav_input_card'>
            <p>Where to?</p>
            <input value={Country} onChange={search_country} type='text' placeholder='Search destinations'></input>
        </div>
        <div className='Mobile_nav_input_card'>
            <p>Check in</p>
            <input value={checkInDate||''} onChange={choose_checkInDate} type='date' placeholder='Add dates'></input>
        </div>
        <div className='Mobile_nav_input_card'>
            <p>Check out</p>
            <input value={checkOutDate||''} onChange={choose_checkOutDate} type='date' placeholder='Add dates'></input>
        </div>
        <div className='Mobile_nav_input_card'>
            <p>Who</p>
            <input  className='nav_bar_filters_input' type='number' placeholder='Add guests'></input>
        </div>
      </div>
    </div>
  )
}

export default Naxbar