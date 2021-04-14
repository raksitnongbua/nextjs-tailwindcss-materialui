import React from 'react';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';

interface IProps {
  theme: string;
}
const width = 878;
const height = 488;
const chart: React.FC<IProps> = ({ theme }) => {
  return (
    <div className='chart-root'>
      <TradingViewWidget
        symbol='BITKUB:BTCTHB'
        theme={theme === 'dark' ? Themes.DARK : Themes.Light}
        locale='th_TH'
        interval='15'
        timezone='Asia/Bangkok'
        hide_side_toolbar={false}
        width={width}
        height={height}
        container_id='tradingview_9ccf0'
      />
    </div>
  );
};

export default chart;
