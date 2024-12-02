// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { TiArrowLeftThick, TiArrowRightThick } from "react-icons/ti";
import Card from "./Card";


const Toprest = () => {

    const [data, setdata] = useState([]);
    console.log(data)

    const fetchTopRestaurant = async () =>{
        const response = await fetch('http://localhost:5000/top-restaurant-chains')
           const apiData = await response.json();
           setdata(apiData);
    }


    useEffect(() => {
      fetchTopRestaurant();
    
      
      
      }
    , [])
    
  return (
    <>
      <div className="maax- w-[1200px] mx-auto">
        <div className="flex my-3 items-center justify-between p-3 ">
          <div className="text-[30px] font-bold"> Top Resturanat Chains in Sultanpur </div>
          <div className="flex items-center ml-auto">
            <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ">
              <TiArrowLeftThick />
            </div>
            <div className="cursor-pointer flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 ">
              <TiArrowRightThick />
            </div>
          </div>
        </div>
        <div>
            <Card/>
        </div>
       
        

      </div>
      
    </>
  );
};

export default Toprest;
