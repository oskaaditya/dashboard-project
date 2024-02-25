'use client';

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import React, { useState } from 'react';
import { CalendarIcon } from '../components/iconsComponent/icons/CalendarIcon';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { UpTrendIcon } from '../components/iconsComponent/icons/UpTrendIcon';
import { Area, AreaChart, ResponsiveContainer } from 'recharts';
import { totalChart } from './constants';
import { OptionsIcon } from '../components/iconsComponent/icons/OptionsIcon';

const Dashboard = () => {
  const [date, setDate] = useState<Date | undefined>();

  return (
    <div className='mt-7'>
      <div className='flex items-center justify-between'>
        <div>
          <h1 className='text-2xl font-semibold'>Application</h1>
          <ol className='flex items-center gap-2 text-sm text-gray-600'>
            <li>Dashboard</li>
            <li>&gt; Application</li>
          </ol>
        </div>
        <div>
          <Popover placement='bottom'>
            <PopoverTrigger>
              <Button
                endContent={
                  <CalendarIcon width={14} height={14} viewBox='0 0 14 14' />
                }
                className='border-gray-400 bg-gray-100 text-sm text-gray-500'
              >
                {date ? <p>{format(date, 'PPP')}</p> : 'Pick a date'}
              </Button>
            </PopoverTrigger>
            <PopoverContent>
              <div className='w-full'>
                <DayPicker
                  mode='single'
                  selected={date}
                  onSelect={setDate}
                  className='w-full'
                />
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      <Card className='shadow-normal mt-7 p-6'>
        <CardBody className='flex flex-row items-center space-x-4 pt-0'>
          <div className='flex w-full items-center justify-between'>
            <div>
              <h2 className='font-semibold'>Total Download</h2>
              <div className='mb-4 flex h-auto items-center gap-2'>
                <div className='rounded-full bg-success-50 p-1 text-success-600'>
                  <UpTrendIcon width={14} height={14} viewBox='0 0 14 14' />
                </div>
                <p className='text-xs text-gray-600'>+2.4%</p>
              </div>
              <p className='text-2xl font-semibold text-gray-800'>7,890</p>
            </div>
            <div>
              <AreaChart width={60} height={26} data={totalChart}>
                <defs>
                  <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor='#6418C3' stopOpacity={0.8} />
                    <stop offset='100%' stopColor='#6418C3' stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type='monotone'
                  dataKey='uv'
                  stroke='#6418C3'
                  dot={false}
                  fill='url(#colorUv)'
                />
              </AreaChart>
            </div>
          </div>
          <Divider orientation='vertical' />
          <div className='flex w-full items-center justify-between'>
            <div>
              <h2 className='font-semibold'>Total Download</h2>
              <div className='mb-4 flex h-auto items-center gap-2'>
                <div className='rounded-full bg-success-50 p-1 text-success-600'>
                  <UpTrendIcon width={14} height={14} viewBox='0 0 14 14' />
                </div>
                <p className='text-xs text-gray-600'>+2.4%</p>
              </div>
              <p className='text-2xl font-semibold text-gray-800'>7,890</p>
            </div>
            <div>
              <AreaChart width={60} height={26} data={totalChart}>
                <defs>
                  <linearGradient id='colorPv' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor='#3B82F6' stopOpacity={0.8} />
                    <stop offset='100%' stopColor='#3B82F6' stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type='monotone'
                  dataKey='pv'
                  stroke='#3B82F6'
                  dot={false}
                  fill='url(#colorPv)'
                />
              </AreaChart>
            </div>
          </div>
          <Divider orientation='vertical' />
          <div className='flex w-full items-center justify-between'>
            <div>
              <h2 className='font-semibold'>Total Download</h2>
              <div className='mb-4 flex h-auto items-center gap-2'>
                <div className='rounded-full bg-success-50 p-1 text-success-600'>
                  <UpTrendIcon width={14} height={14} viewBox='0 0 14 14' />
                </div>
                <p className='text-xs text-gray-600'>+2.4%</p>
              </div>
              <p className='text-2xl font-semibold text-gray-800'>7,890</p>
            </div>
            <div>
              <AreaChart width={60} height={26} data={totalChart}>
                <defs>
                  <linearGradient id='colorAmt' x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='5%' stopColor='#f59e0b' stopOpacity={0.8} />
                    <stop offset='100%' stopColor='#f59e0b' stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type='monotone'
                  dataKey='amt'
                  stroke='#f59e0b'
                  dot={false}
                  fill='url(#colorAmt)'
                />
              </AreaChart>
            </div>
          </div>
        </CardBody>
      </Card>
      <div className='mt-7 flex space-x-7'>
        <Card className='w-full p-0'>
          <CardHeader className='justify-between p-6'>
            <h2 className='text-sm font-semibold'>Avg. Earning</h2>
            <Button
              isIconOnly
              variant='flat'
              className='bg-transparent text-[#6B7280]'
            >
              <OptionsIcon width={20} height={20} viewBox='0 0 20 20' />
            </Button>
          </CardHeader>
          <CardBody className='overflow-hidden p-0'>
            <p className='px-6 text-2xl font-semibold'>$9,690</p>
            <div className='-mb-10 mt-8'>
              <ResponsiveContainer width='101%' height={186}>
                <AreaChart data={totalChart}>
                  <defs>
                    <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
                      <stop offset='5%' stopColor='#6418C3' stopOpacity={0.8} />
                      <stop offset='100%' stopColor='#6418C3' stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <Area
                    type='monotone'
                    dataKey='uv'
                    stroke='#6418C3'
                    dot={false}
                    fill='url(#colorUv)'
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardBody>
        </Card>
        <Card className='w-full p-0'>
          <CardHeader className='justify-between p-6'>
            <h2 className='text-sm font-semibold'>Total Profit</h2>
            <Button
              isIconOnly
              variant='flat'
              className='bg-transparent text-[#6B7280]'
            >
              <OptionsIcon width={20} height={20} viewBox='0 0 20 20' />
            </Button>
          </CardHeader>
          <CardBody className='p-0'></CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
