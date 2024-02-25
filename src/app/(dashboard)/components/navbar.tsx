'use client';

import React from 'react';
import { NavbarLinks } from '../constants';
import { Avatar, Button, Link } from '@nextui-org/react';
import { usePathname } from 'next/navigation';
import SearchIcon from '@/app/components/icons/SearchIcon';

const Navbar = () => {
  const pathName = usePathname();

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
          variant='ghost'
          className='border-0 p-[11px] hover:bg-transparent'
          size='lg'
        >
          <SearchIcon
            height={24}
            width={24}
            fill='#6B7280'
            label='search-icon'
          />
        </Button>
        <Button
          isIconOnly
          aria-label='Search'
          variant='ghost'
          className='border-0 p-[11px] hover:bg-transparent'
          size='lg'
        >
          <SearchIcon
            height={24}
            width={24}
            fill='#6B7280'
            label='search-icon'
          />
        </Button>
        <Button
          isIconOnly
          aria-label='Search'
          variant='ghost'
          className='border-0 p-[11px] hover:bg-transparent'
          size='lg'
        >
          <SearchIcon
            height={24}
            width={24}
            fill='#6B7280'
            label='search-icon'
          />
        </Button>
        <Button
          isIconOnly
          aria-label='Search'
          variant='ghost'
          className='border-0 p-[11px] hover:bg-transparent'
          size='lg'
        >
          <SearchIcon
            height={24}
            width={24}
            fill='#6B7280'
            label='search-icon'
          />
        </Button>
        <Button
          isIconOnly
          aria-label='Search'
          variant='ghost'
          className='border-0 p-[11px] hover:bg-transparent'
          size='lg'
        >
          <SearchIcon
            height={24}
            width={24}
            fill='#6B7280'
            label='search-icon'
          />
        </Button>
        <Avatar src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
      </div>
    </div>
  );
};

export default Navbar;
