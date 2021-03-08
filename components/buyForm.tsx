import {
  Button,
  InputAdornment,
  Skeleton,
  Slider,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';

interface IProps {
  onBuy?: (spend: number) => void;
}

const AVAILABLE_BALANCE_STR = 'ยอดคงเหลือ';
const FEE_CREDIT_STR = 'เครดิตค่าธรรมเนียม';
const YOU_SPEND_STR = 'จำนวนที่ต้องจ่าย';
const CURRENCY_STR = 'THB';
const BUY_STR = 'ซื้อ';

const BuyForm: React.FC<IProps> = ({ onBuy }) => {
  const feeCredit = 0;
  const balance = 100000;
  const [spend, setSpend] = useState<number>(0);
  const [spendPercent, setSpendPercent] = useState<number>(0);
  const handleSpendChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const possibleValue = Math.min(Math.max(+event.target.value, 0), balance);
    setSpend(possibleValue);
    setSpendPercent((possibleValue / balance) * 100);
  };
  const handleSpendPercentChange = (_event: any, value: number) => {
    const percent = Math.round(value);
    setSpendPercent(percent);
    const spend = +((percent / 100) * balance).toFixed(2);
    setSpend(spend);
  };
  const handleBuyClick = () => {
    if (onBuy) onBuy(spend);
  };
  return (
    <div>
      <div className='w-72 flex justify-between'>
        <Typography>
          {AVAILABLE_BALANCE_STR} {CURRENCY_STR}
        </Typography>
        <div className='w-24 flex justify-end align-middle'>
          {/* <Skeleton className='w-14' /> */}
          <Typography>{balance}</Typography>
          <Typography className='ml-2'>{CURRENCY_STR}</Typography>
        </div>
      </div>
      <div className='w-72 flex justify-between'>
        <Typography>{FEE_CREDIT_STR}</Typography>
        <div className='w-24 flex justify-end align-middle'>
          <Typography className='text-yellow-500' align='right'>
            {feeCredit}
          </Typography>
          <Typography className='ml-2'>{CURRENCY_STR}</Typography>
        </div>
      </div>
      <div className='flex flex-col w-72 my-2'>
        <TextField
          size='small'
          type='number'
          placeholder='0.00'
          value={spend || ''}
          onChange={handleSpendChange}
          inputProps={{ min: 0, style: { textAlign: 'right' } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>{CURRENCY_STR}</InputAdornment>
            ),
            startAdornment: (
              <InputAdornment position='start'>{YOU_SPEND_STR}</InputAdornment>
            ),
          }}
        />
        <Slider
          step={1}
          max={100}
          valueLabelDisplay='auto'
          valueLabelFormat={(x) => `${x}%`}
          className='w-72'
          value={spendPercent}
          onChange={handleSpendPercentChange}
        />
        <Button
          variant='contained'
          onClick={handleBuyClick}
          className='text-black dark:text-white'
        >
          {BUY_STR}
        </Button>
      </div>
    </div>
  );
};

export default BuyForm;
