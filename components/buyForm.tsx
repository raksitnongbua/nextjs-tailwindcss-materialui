import {
  Button,
  InputAdornment,
  Skeleton,
  Slider,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';

const BuyForm = () => {
  return (
    <div>
      <div className='w-72 flex justify-between'>
        <Typography>ยอดคงเหลือ THB</Typography>
        <div className='w-24 flex justify-end align-middle'>
          <Skeleton className='w-14' />
          <Typography className='ml-2'>THB</Typography>
        </div>
      </div>
      <div className='w-72 flex justify-between'>
        <Typography>เครดิตค่าธรรมเนียม</Typography>
        <div className='w-24 flex justify-end align-middle'>
          <Typography className='text-yellow-500' align='right'>
            0
          </Typography>
          <Typography className='ml-2'>THB</Typography>
        </div>
      </div>
      <div className='flex flex-col w-72 my-2'>
        <TextField
          size='small'
          type='number'
          placeholder='0.00'
          inputProps={{ min: 0, style: { textAlign: 'right' } }}
          InputProps={{
            endAdornment: <InputAdornment position='end'>THB</InputAdornment>,
            startAdornment: (
              <InputAdornment position='start'>จำนวนที่ต้องจ่าย</InputAdornment>
            ),
          }}
        />
        <Slider
          step={1}
          max={100}
          valueLabelDisplay='auto'
          valueLabelFormat={(x) => `${x}%`}
          className='w-72'
        />
        <Button variant='contained' className='text-black dark:text-white'>
          ซื้อ
        </Button>
      </div>
    </div>
  );
};

export default BuyForm;
