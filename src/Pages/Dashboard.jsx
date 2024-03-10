import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import OptionsBar from '../components/OptionsBar'
import MainContent from '../components/MainContent';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [Country, setCountry] = useState('');
  const [Category, setCategory] =useState("Tag:8225");
  const [MinimumPrice, setMinimumPrice] = useState(0);
  const [MaximumPrice, setMaximumPrice] = useState(1000000000);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  return (
    <div>
        <Navbar checkInDate={checkInDate} checkOutDate={checkOutDate} setCheckInDate={setCheckInDate} setCheckOutDate={setCheckOutDate} Country={Country} setCountry={setCountry}/>
        <OptionsBar setCategory = {setCategory} MinimumPrice={MinimumPrice} MaximumPrice={MaximumPrice} setMaximumPrice={setMaximumPrice} setMinimumPrice={setMinimumPrice}  />
        <MainContent setCheckOutDate={setCheckOutDate} checkInDate={checkInDate} checkOutDate={checkOutDate} Country={Country} Category={Category} MinimumPrice={MinimumPrice} MaximumPrice={MaximumPrice} />
        <Footer />
    </div>
  )
}

export default Dashboard