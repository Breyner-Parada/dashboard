import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiShopware } from 'react-icons/si';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy';
import { useStateValue } from '../contexts/ContextProvider';

export const Sidebar = (): any => {
  const { activeMenu, setActiveMenu, screenWidth } = useStateValue();
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-[#00CCBB] text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-gray-700 dark:hover:text-black hover:bg-light-gray text-md m-2';

  const handleCloseSidebar = (): void => {
    if (activeMenu && screenWidth <= 768) setActiveMenu(false);
  };
  return (
    <div className='ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10'>
      {activeMenu && (
        <>
        <div className='flex justify-between items-center'>
          <Link to="/" onClick={handleCloseSidebar} className="items-center gap-3 ml-3 mt-4 flex text-xl font-extrabold tracking-tight dark:text-white text-slate-900">
            <SiShopware size={30} /> <span>Shoppy</span>
          </Link>
          <TooltipComponent content="Menu" position='BottomCenter'>
            <button type="button" onClick={() => { setActiveMenu((prev: boolean) => !prev); }} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden'>
              <MdOutlineCancel size={30} />
            </button>
          </TooltipComponent>
        </div>
        <div className='mt-10 '>
          {links.map((link) => (
            <div key={link.title}>
              <p className='text-gray-400 m-3 mt-4 uppercase'>{link.title}</p>
              {link.links.map((item) => (
                <NavLink to={`/${item.name}`} key={item.name} onClick={handleCloseSidebar} className={({ isActive }) => isActive ? activeLink : normalLink }>
                  {item.icon}
                  <span className='capitalize'>{item.name}</span>
                </NavLink>
              ))}
            </div>
          ))}
        </div>
        </>
      )}
    </div>
  );
};
