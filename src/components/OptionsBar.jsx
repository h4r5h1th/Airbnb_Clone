import React, { useEffect, useState } from 'react';
import './OptionsBar.css';
import TuneIcon from '@mui/icons-material/Tune';
import Topic from './Topic';
import axios from 'axios';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LinearProgress from '@mui/material/LinearProgress';
import Filter from './Filter';

const OptionsBar = ({setCategory, MinimumPrice, MaximumPrice, setMaximumPrice, setMinimumPrice}) => {
    const [topics, setTopics] = useState([]);
    const [error, setError] = useState(null);
    const [loading, SetLoading] = useState(true);
    const [filter, SetFilter] = useState(false);

    function Filter_Menu(){
        SetFilter(!filter);
    }

    function scrollright(){
        var left = document.querySelector('.OptionsBar_topics')
        left.scrollBy(370, 0)
    }

    function scrollleft(){
        var right = document.querySelector('.OptionsBar_topics')
        right.scrollBy(-370, 0)
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const options = {
                    method: 'GET',
                    url: 'https://airbnb45.p.rapidapi.com/api/v1/getCategory',
                    headers: {
                      'X-RapidAPI-Key': 'SECRET_KEY',
                      'X-RapidAPI-Host': 'airbnb45.p.rapidapi.com'
                    }
                  };
                SetLoading(true);
                const response = await axios.request(options);
                setTopics(response.data);
                SetLoading(false);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className='OptionsBar_parent_member'>
            { loading ? 
                <div className='OptionsBar_Loading'>
                    <LinearProgress color="inherit"/>
                </div> :
                <div className='OptionsBar_Button_Holder'>
                    <button className='leftSlideButton' onClick={scrollleft}><ArrowBackIosNewIcon style={{ color: "black", fontSize: 'small' }}/></button>
                    <button className='rightSlideButton' onClick={scrollright}><ArrowForwardIosIcon style={{ color: "black", fontSize: 'small' }}/></button>
                    <div className='OptionsBar_topics'>
                        {error ? (
                            <div>Something went wrong! please try again later</div>
                        ) : (
                            topics.data?.map(topic =>(<Topic key={topic?.key} topic={topic} setCategory={setCategory} />))
                        )}
                    </div>
                </div>
                }

                <button className='OptionsBar_Filter_Button' onClick={Filter_Menu}><TuneIcon /><span className='OptionsBar_FilterText'>Filters</span></button>
            </div>
            {filter? <Filter Filter_Menu={Filter_Menu} MinimumPrice={MinimumPrice} MaximumPrice={MaximumPrice} setMaximumPrice={setMaximumPrice} setMinimumPrice={setMinimumPrice}/>:null}
        </>
    );
};

export default OptionsBar;
