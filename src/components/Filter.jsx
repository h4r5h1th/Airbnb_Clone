import React from 'react'
import './Filter.css'
import CloseIcon from '@mui/icons-material/Close';

const Filter = ({Filter_Menu, MinimumPrice, MaximumPrice, setMaximumPrice, setMinimumPrice}) => {

    function MaximumPriceRange(e){
        if(e.target.value){
            setMaximumPrice(e.target.value);
        }else{
            setMaximumPrice(1000000000);
        }
    }

    function MinimumPriceRange(e){
        if(e.target.value){
            setMinimumPrice(e.target.value);
        }else{
            setMinimumPrice(0);
        }
    }

    function closeOnBackgroundClick(e){
        if (e.target === e.currentTarget) {
            Filter_Menu();
        }
    }
  return (
    <div className='Filter_Parent_component' onClick={closeOnBackgroundClick}>
        <div className='Filter_Main_Setting'>
            <div className='Filter_Heading'>
                <CloseIcon className='Filter_Cross_icon' onClick={Filter_Menu} />
                <h3>Filters</h3>
            </div>
            <div className='Filter_Option_Price_range'>
                <h3>Price range</h3>
                <p>Nightly prices before fees and taxes</p>
                <div className='Filter_Range'>
                    <div className='Filter_Minimum_Range'>
                        <p className='Filter_Minimum_Range_Top_Label'>Minimum</p>
                        <p className='Filter_Minimum_Currencysymbl'>$</p>
                        <input onChange={MinimumPriceRange} value={MinimumPrice} type='number' placeholder='30'/> 
                    </div>
                    <div className='Filter_Maximum_Range'>
                        <p className='Filter_Maximum_Range_Top_Label'>Maximum</p>
                        <p className='Filter_Maximum_Currencysymbl'>$</p>
                        <input onChange={MaximumPriceRange} value={MaximumPrice} type='number' placeholder='10000'/> 
                    </div>
                </div>
                <div className='Filter_Done_Button_div'>
                    <button className='Filter_Done_Button' onClick={Filter_Menu}>Done</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter