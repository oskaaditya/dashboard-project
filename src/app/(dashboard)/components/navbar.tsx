'use client';

import React, { useState } from 'react';
import { NavbarLinks } from '../constants';
import { Avatar, Button, Link } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import { SearchIcon } from '@/app/components/iconsComponent/icons/SearchIcon';
import { MessageIcon } from '@/app/components/iconsComponent/icons/MessageIcon';
import { MenuIcon } from '@/app/components/iconsComponent/icons/MenuIcon';
import { NotificationIcon } from '@/app/components/iconsComponent/icons/NotificationIcon';
import { ThemeIcon } from '@/app/components/iconsComponent/icons/ThemeIcon';

const Navbar = () => {
  const pathName = usePathname();
  const [totalNotif, settotalNotif] = useState(2);

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        {NavbarLinks.map((link, index) => (
          <Link
            key={index}
            href={link.path}
            className={`rounded-lg px-[22px] py-[11px] font-medium ${pathName === link.path ? 'bg-primary-25 text-primary-500' : 'text-gray-600'}`}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className='flex items-center gap-4'>
        <Button
          isIconOnly
          aria-label='Search'
          variant='flat'
          className='border-0 bg-transparent p-[11px] text-gray-500'
          size='lg'
        >
          <SearchIcon width={20} height={20} viewBox='0 0 20 20' />
        </Button>
        <Button
          isIconOnly
          aria-label='Message'
          variant='flat'
          className='border-0 bg-transparent p-[11px] text-gray-500'
          size='lg'
        >
          <MessageIcon width={20} height={20} viewBox='0 0 20 20' />
        </Button>
        <Button
          aria-label='Notification'
          variant='flat'
          className='relative min-w-0 border-0 bg-transparent p-[11px] text-gray-500'
          size='lg'
        >
          <div className='absolute top-2 ml-3 h-[14px] rounded-full bg-primary-500 px-[4px] '>
            <p className='mt-[1px] text-[10px] leading-none text-white'>
              {totalNotif}
            </p>
          </div>
          <NotificationIcon width={20} height={20} viewBox='0 0 20 20' />
        </Button>
        <Button
          isIconOnly
          aria-label='Message'
          variant='flat'
          className='border-0 bg-transparent p-[11px] text-gray-500'
          size='lg'
        >
          <MenuIcon width={20} height={20} viewBox='0 0 20 20' />
        </Button>
        <Button
          isIconOnly
          aria-label='Message'
          variant='flat'
          className='border-0 bg-gray-100 p-[11px] text-primary-500'
          size='lg'
        >
          <ThemeIcon width={20} height={20} viewBox='0 0 20 20' />
        </Button>
        <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
      </div>
    </div>
  );
};

export default Navbar;
