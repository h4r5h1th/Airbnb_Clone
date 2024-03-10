import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './Card.css'

const Card = ({Data}) => {
    const [Like, setLike] = useState(false);

    function Configure_Like(){
      setLike(!Like);
    }

    const dateStringin = Data.listingParamOverrides?.checkin;
    const datein = new Date(dateStringin);

    const monthAbbreviations = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", 
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];

    const dayin = datein.getDate().toString().padStart(2, '0');
    const monthin = monthAbbreviations[datein.getMonth()];

    const dateStringout = Data.listingParamOverrides?.checkout;
    const dateout = new Date(dateStringout);

    const dayout = dateout.getDate().toString().padStart(2, '0');
    const monthout = monthAbbreviations[dateout.getMonth()];

  return (
    <div className='card_parent_div'>
        <img className='bnb_hotel_images' src={Data.listing?.contextualPictures[0].picture} alt='bnb_image' />
        <div className='card_location_rating'>
            <p><b>{Data.listing?.title && Data.listing.title.length <= 25 ? Data.listing.title : Data.listing.title.slice(0, 25) + '..'}</b></p>
            <p><b className='Card_Rating'><StarIcon style={{fontSize:'medium', marginRight: "2px"}}/>{Data.listing?.avgRatingLocalized}</b></p>
        </div>
        <p>{dayin} {monthin===monthout? null:monthin} -{dayout} {monthout}</p>
        <p><b>{Data.pricingQuote?.structuredStayDisplayPrice?.primaryLine?.price ? Data.pricingQuote?.structuredStayDisplayPrice?.primaryLine?.price : Data.pricingQuote?.structuredStayDisplayPrice?.secondaryLine?.price}</b> {Data.pricingQuote?.structuredStayDisplayPrice?.primaryLine?.qualifier ? Data.pricingQuote?.structuredStayDisplayPrice?.primaryLine?.qualifier : Data.pricingQuote?.structuredStayDisplayPrice?.secondaryLine?.qualifier}</p>
        <div className='Card_Like' onClick={Configure_Like}>{Like ? <FavoriteIcon style={{color: 'red'}}/>:<FavoriteBorderIcon style={{color: 'white'}}/>}</div>
    </div>
  )
}

export default Card