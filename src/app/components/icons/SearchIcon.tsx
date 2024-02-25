import React, { FC } from 'react';

interface IconProps {
  fill?: string;
  size?: number;
  height?: number;
  width?: number;
  label?: string;
}

const SearchIcon: FC<IconProps> = ({
  fill = 'currentColor',
  size,
  height,
  width,
  label,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox='0 0 20 20'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M18.7604 16.5174L14.6041 12.3611C14.0823 13.1354 13.4145 13.8035 12.6399 14.3253L16.7962 18.4816C17.3385 19.024 18.218 19.024 18.7604 18.4816C19.3021 17.941 19.3021 17.059 18.7604 16.5174Z'
        fill={fill}
      />
      <path
        opacity='0.4'
        d='M8.57993 1.11108C4.62227 1.11108 1.38892 4.34478 1.38892 8.33334C1.38892 12.3219 4.62227 15.5556 8.57993 15.5556C12.5376 15.5556 15.8022 12.3219 15.8022 8.33334C15.8022 4.34478 12.6008 1.11108 8.57993 1.11108ZM8.57993 12.7778C6.12922 12.7778 4.13546 10.784 4.13546 8.33334C4.13546 5.88263 6.12922 3.88887 8.57993 3.88887C11.0306 3.88887 13.0244 5.88263 13.0244 8.33334C13.0244 10.7847 11.0626 12.7778 8.57993 12.7778Z'
        fill={fill}
      />
    </svg>
  );
};

export default SearchIcon;
