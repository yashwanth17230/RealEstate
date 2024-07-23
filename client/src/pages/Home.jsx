/* eslint-disable react/jsx-key */


import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import LIstingItem from '../components/LIstingItem';


export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch('/server/listing/get?offer=true&limit=4');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchRentListings = async () => {
      try {
        const res = await fetch('/server/listing/get?type=rent&limit=4');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };
    const fetchSaleListings = async () => {
      try {
        const res = await fetch('/server/listing/get?type=sale&limit=4');
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchOfferListings();
  },[]);

  return (
    <div>
      {/* top section */}

      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto'>
        <h1 className='text-slate-800 font-bold text-3xl 
        lg:text-5xl'>Finding the <span className='text-pink-700'>perfect home</span>
        <br/>
         for your family is our mission...</h1>
         <div className='text-gray-400 text-s sm:text-sm font-semibold'>
          we turn your real estate dreams into reality,we help you find the perfect place to call home.
          <br />
          our expert support are always available.
         </div>
          <Link to={'/search'} className='text-s sm:text-sm text-blue-700 font-bold hover:underline'>Let's get started....
         </Link>
      </div>

      {/* images */}
      <Swiper navigation className=''>
      { offerListings && offerListings.length > 0 && offerListings.map((listing)=>(
            <SwiperSlide>
              <div style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`, 
                  backgroundSize: 'cover',
                }} 
                className='h-[650px]' 
                key={listing._id}
              ></div>
            </SwiperSlide>
        ))}
      </Swiper>

      {/* Listings results for offer ,sales and rent */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 my-10'>
        {
          offerListings && offerListings.length > 0 && (
            <div className=''>
              <div className='text-2xl font-semibold text-slate-700'>
                <h2>Recent Offers</h2>
                <Link className='text-sm text-blue-800 hover:underline' to={'/search?offer=true'}>
                Show more Offers
                </Link>
              </div>
              <div className='flex flex-wrap gap-5'>
                {
                  offerListings.map((listing)=>(
                    <LIstingItem listing={listing} key={listing._id} />
                  )) }
              </div>
            </div>
          )
        }
        {
          rentListings && rentListings.length > 0 && (
            <div className=''>
              <div className='text-2xl font-semibold text-slate-700'>
                <h2>Recent Places For Rent </h2>
                <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=rent'}>
                Show more places for rent
                </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {
                  rentListings.map((listing)=>(
                    <LIstingItem listing={listing} key={listing._id} />
                  )) }
              </div>
            </div>
          )
        }
        {
          saleListings && saleListings.length > 0 && (
            <div className=''>
              <div className='text-2xl font-semibold text-slate-700'>
                <h2>Recent Places For Sale</h2>
                <Link className='text-sm text-blue-800 hover:underline' to={'/search?type=sale'}>
                Show more places for sale
                </Link>
              </div>
              <div className='flex flex-wrap gap-4'>
                {
                  saleListings.map((listing)=>(
                    <LIstingItem listing={listing} key={listing._id} />
                  )) }
              </div>
            </div>
          )
        }
      </div>

      
    </div>
  )
}
