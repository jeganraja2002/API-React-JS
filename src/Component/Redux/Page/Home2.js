import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";


const Home2 = () => {

const [state,setState] = useState('')
const [param] = useSearchParams()
const read = useSelector(a=>a.data.empty)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
        draggable: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    
useEffect(()=>{
    img()
    //eslint-disable-next-line
},[])

const img = () =>{
    if (param.get("id")===null||param.get("id")===undefined) console.log();
    else{
        const a = read.find(e=>e.flight_number===Number(param.get('id')))
        setState(a.links.mission_patch_small);
    }
}
      const a = [{img:state},{img:state},{img:state},{img:state},{img:state}]

    return(
        <div className="container">
          <Slider {...settings}>
             {a.map((e,i)=>(
                <div className="p-sm-2">
                    <img src={e.img} alt="img" className="w-sm-100"/>
                </div>
             ))}
          </Slider>
      </div>
    )
}
export default Home2