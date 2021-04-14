import React from 'react';
import CoinForm from '../../components/coinForm';
import dynamic from 'next/dynamic';
const DynamicChart = dynamic(() => import('../../containers/chart'), {
  ssr: false,
});
const Market = () => {
  return (
    <>
      <div className='border-black dark:border-white border m-2'>
        <DynamicChart />
      </div>
      <div className='flex justify-center'>
        <CoinForm alias='THB' action='buy' balance={1000000} price={0} />
        <CoinForm alias='BTC' action='sell' balance={0.5} price={1500000} />
      </div>
    </>
  );
};

export default Market;
