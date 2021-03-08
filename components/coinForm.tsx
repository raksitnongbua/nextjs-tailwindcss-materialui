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
  action: 'buy' | 'sell';
  alias: string;
  balance: number;
  onBuy?: (spend: number) => void;
  price: number;
}

const AVAILABLE_BALANCE_STR = 'ยอดคงเหลือ';
const FEE_CREDIT_STR = 'เครดิตค่าธรรมเนียม';
const YOU_SPEND_STR = 'จำนวนที่ต้องจ่าย';
const BUY_STR = 'ซื้อ';
const SELL_STR = 'ขาย';

const CoinForm: React.FC<IProps> = ({
  action,
  alias,
  balance,
  onBuy,
  price,
}) => {
  const feeCredit = 0;
  const digits = price.toString().length + 1;
  const [spend, setSpend] = useState<number | string>('');
  const [spendPercent, setSpendPercent] = useState<number>(0);
  const handleSpendChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const possibleValue = Math.min(Math.max(+event.target.value, 0), balance);
    setSpend(possibleValue);
    setSpendPercent((possibleValue / balance) * 100);
  };
  const handleSpendBlur = () => {
    if (spend === 0) setSpend('');
  };
  const handleSpendPercentChange = (_event: any, value: number) => {
    const percent = Math.round(value);
    setSpendPercent(percent);
    const spend = +((percent / 100) * balance).toFixed(digits);
    setSpend(spend > 0 ? spend : '');
  };
  const handleBuyClick = () => {
    if (onBuy) onBuy(+spend);
  };
  return (
    <div className='m-2'>
      <div className='w-72 flex justify-between'>
        <Typography>
          {AVAILABLE_BALANCE_STR} {alias}
        </Typography>
        <div className='w-24 flex justify-end align-middle'>
          {/* <Skeleton className='w-14' /> */}
          <Typography>{balance.toFixed(digits)}</Typography>
          <Typography className='ml-2'>{alias}</Typography>
        </div>
      </div>
      <div className='w-72 flex justify-between'>
        <Typography>{FEE_CREDIT_STR}</Typography>
        <div className='w-24 flex justify-end align-middle'>
          <Typography className='text-yellow-500' align='right'>
            {feeCredit}
          </Typography>
          <Typography className='ml-2'>{alias}</Typography>
        </div>
      </div>
      <div className='flex flex-col w-72 my-2'>
        <TextField
          size='small'
          type='number'
          placeholder={(0).toFixed(digits)}
          value={spend}
          onChange={handleSpendChange}
          onBlur={handleSpendBlur}
          inputProps={{ min: 0, style: { textAlign: 'right' } }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>{alias}</InputAdornment>
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
          color={action === 'buy' ? 'primary' : 'secondary'}
        />
        {action === 'buy' ? (
          <Button
            variant='contained'
            onClick={handleBuyClick}
            className='text-black dark:text-white'
          >
            {BUY_STR}
          </Button>
        ) : (
          <Button
            variant='contained'
            color='secondary'
            onClick={handleBuyClick}
            className='text-black dark:text-white'
          >
            {SELL_STR}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CoinForm;
