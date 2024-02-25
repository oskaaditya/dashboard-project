import React, { FC } from 'react';
import Navbar from './components/navbar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div>
      <div>
        <aside></aside>
      </div>
      <div className='px-7 py-4'>
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
