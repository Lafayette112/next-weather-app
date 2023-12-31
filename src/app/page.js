"use client";

import Image from "next/image";
import axios from "axios"
import { useState } from "react"
import { BsSearch } from 'react-icons/bs'
import Weather from "../components/Weather";
import Loading from "../components/Loading";


export default function Home() {

  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`
  
  const fetchWeather = (e) => {
    e.preventDefault()
    setLoading(true)
    axios.get(url).then((response) => {
      setWeather(response.data)
      // console.log(response.data)
    })
    setCity('')
    setLoading(false)
  };

  if (loading) {
    return <Loading />
  } else {

    return (
      <div className="box-border m-0 p-0">
        
        {/* Overlay */}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[1]" />
  
        {/* Background image */}
        <Image 
        src='/img/pexels-eberhard-grossgasteiger.jpg'
        fill
        className="md:object-cover md:bg-bigscreen bg-fixed" 
        />
  
        {/* Search */}
        <div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
          <form onSubmit={fetchWeather} className="flex justify-between items-center w-full m-auto p-4 mx-4 bg-transparent border border-gray-300 text-white rounded-2xl">
            <div>
              <input 
              onChange={(e) => setCity(e.target.value)}
              className="bg-transparent border-none text-white focus:outline-none text-2xl placeholder-white" 
              type="text" 
              placeholder="Search city" 
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>
  
        {/* Weather */}
  
        {weather.main && <Weather data={weather} />}
      
      </div>
    )
    
  }

}
