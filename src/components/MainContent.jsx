import React, { useEffect, useState } from 'react';
import './MainContent.css';
import CircularProgress from '@mui/material/CircularProgress';
import axios from 'axios';
import Card from './Card';

const MainContent = ({setCheckOutDate, checkInDate, checkOutDate, Country, Category, MinimumPrice, MaximumPrice }) => {
    const [Data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://airbnb45.p.rapidapi.com/api/v1/searchPropertyByCategory',
                    params: {
                        categoryKey: Category
                    },
                    headers: {
                        'X-RapidAPI-Key': 'SECRET_KEY',
                        'X-RapidAPI-Host': 'airbnb45.p.rapidapi.com'
                    }
                };
                setLoading(true);
                const response = await axios.request(options);
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, [Category]);

    return (
        <div className='Main_Content_div'>
            {loading ? (
                <CircularProgress color="inherit" style={{padding:'50px'}} />
            ) : error ? (
                <p>Something went wrong! Please Try again Later</p>
            ) : (
                Data.data?.list
                    ?.filter((infos) => {
                        const countryName = Country.toLowerCase();
                        const title = infos.listing?.title.toLowerCase();
                        const countryInTitle = title.includes(countryName);

                        const price = infos.pricingQuote?.structuredStayDisplayPrice;
                        const primaryPrice = price?.primaryLine?.price || null;
                        const secondaryPrice = price?.secondaryLine?.price || null;
                        const primaryPriceNumber = primaryPrice ? parseFloat(primaryPrice.replace('$', '')) : null;
                        const secondaryPriceNumber = secondaryPrice ? parseFloat(secondaryPrice.replace('$', '')) : null;
                        const priceInRange =
                            (primaryPriceNumber !== null && primaryPriceNumber >= MinimumPrice && primaryPriceNumber <= MaximumPrice) ||
                            (secondaryPriceNumber !== null && secondaryPriceNumber >= MinimumPrice && secondaryPriceNumber <= MaximumPrice);

                        const checkin = infos.listingParamOverrides?.checkin;
                        const checkout = infos.listingParamOverrides?.checkout;

                        const checkinDateParts = checkin.split('-').join('-');
                        const checkoutDateParts = checkout.split('-').join('-');

                        const checkinDate = checkinDateParts;
                        const checkoutDate = checkoutDateParts;

                        if(checkInDate!=null&&checkOutDate===null){
                            const nextDay = new Date(checkinDate);
                            nextDay.setDate(nextDay.getDate() + 1);
                            const formattedNextDay = nextDay.toISOString().split('T')[0];
                            setCheckOutDate(formattedNextDay);
                        }

                        if(checkInDate===null&&checkOutDate!=null){
                            setCheckOutDate(null);
                        }

                        const dateInRange = ((!checkInDate)||(checkInDate>=checkinDate))&&((!checkOutDate)||(checkOutDate<=checkoutDate));
                        return countryInTitle && priceInRange && dateInRange;
                    })
                    .map((infos) => <Card key={infos.id} Data={infos} />)
            )}
        </div>
    );
};

export default MainContent;
