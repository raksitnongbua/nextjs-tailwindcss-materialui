import React from 'react';
import CoinForm from '../../components/coinForm';

const Market = () => {
  return (
    <div className='p-2 w-full'>
      <div className='border-black dark:border-white border w-full h-72 m-2'></div>
      <div className='flex justify-center'>
        <CoinForm alias='THB' action='buy' balance={1000000} price={0} />
        <CoinForm alias='BTC' action='sell' balance={0.5} price={1500000} />
      </div>
    </div>
  );
};

export default Market;
