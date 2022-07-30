import React from 'react'
import Carousel from 'react-elastic-carousel'
import Item from './Item';
import './Slider.css'
import Image  from './ImageUrls'

const breakPoints = [
    { width: 0, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },

];

export default function Slider() {
    return (
        <>
        
            <div className='col-lg-12 col-xl-12 col-md-12 col-sm-12'>
                <Carousel className='col-lg-12 col-xl-12 col-md-12 col-sm-12' autoPlaySpeed={2000} transitionMs={500} itemsToShow={1} style={{margin:"0px"}}>
                {Image.map((url)=>{
                    return <Item><img src={url} alt="img" className='img-class' /></Item>
                })}
                    
                </Carousel>
                </div>
        </>
    );
};
