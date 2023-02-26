import React from 'react';
import { KeyboardArrowRight } from '@mui/icons-material';

const SidebarContent = ({ title, one, two, three }) => {
  return (
    <div className="ppy-3 border-b-[1px] border-b-gray-300">
      <h3 className="text-lg font-titleFont font-semibold mb-1 px-6">
        {title}
      </h3>
      <ul>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {one}
          <span>
            <KeyboardArrowRight />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {two}
          <span>
            <KeyboardArrowRight />
          </span>
        </li>
        <li className="flex items-center justify-between hover:bg-zinc-200 px-6 py-2 cursor-pointer">
          {three}
          <span>
            <KeyboardArrowRight />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default SidebarContent;
