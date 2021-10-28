import React, { useEffect, useState } from 'react';
import DropdownMenu from './DropdownMenu';
import {
  HiChevronDown,
  HiPlusCircle,
  HiHome,
  HiFire,
  HiGlobeAlt,
  HiClock,
  HiBell,
  HiChartBar,
  HiOutlineUserCircle,
  HiOutlineCog,
  HiOutlineLogout,
  HiOutlineSearch,
} from 'react-icons/hi';
import ButtonLogin from './ButtonLogin';
import Login from '../Login/Login';
import Register from '../Login/Register';
import DropdownMenuComu from './DropdownMenuComu';
import NotificationHead from './NotificationHead';
import SearchCard from './SearchCard';
import { removeToken } from '../../services/localStorage';
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { Link, useLocation } from 'react-router-dom';
import ResetPassword from '../Login/ResetPassword';
import ConfiremResetPassword from '../Login/ConfiremResetPassword';

const MOCK_DATA = [
  {
    name: 'r/javascript',
    members: '10,000',
    imgUrl: 'https://randomuser.me/api/portraits/men/85.jpg',
  },
  {
    name: 'r/dota2',
    members: '100,000',
    imgUrl: 'https://randomuser.me/api/portraits/men/65.jpg',
  },
  {
    name: 'r/css',
    members: '9,000',
    imgUrl: 'https://randomuser.me/api/portraits/men/60.jpg',
  },
  {
    name: 'r/tailwind',
    members: '12,000',
    imgUrl: 'https://randomuser.me/api/portraits/men/50.jpg',
  },
  {
    name: 'r/tailwind',
    members: '12,000',
    imgUrl: 'https://randomuser.me/api/portraits/men/20.jpg',
  },
];

const FEEDS = [
  {
    name: 'Home',
    icon: <HiHome className="h-5 w-5 mx-2" />,
  },
  {
    name: 'New',
    icon: <HiClock className="h-5 w-5 mx-2" />,
  },
  {
    name: 'Hot',
    icon: <HiFire className="h-5 w-5 mx-2" />,
  },
  {
    name: 'All',
    icon: <HiGlobeAlt className="h-5 w-5 mx-2" />,
  },
];

const OTHER = [
  {
    name: 'Create Post',
    icon: <HiPlusCircle className="h-5 w-5 mx-2" />,
  },
  {
    name: 'Notifications',
    icon: <HiBell className="h-5 w-5 mx-2" />,
  },
  {
    name: 'Top Commnities',
    icon: <HiChartBar className="h-5 w-5 mx-2" />,
  },
];

function Header() {
  const { user, setUser, arrUserCommu, Commu } = useContext(UserContext);

  const [target, setTarget] = useState({ name: '', icon: '' });
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showResetpass, setShowResetpass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');

  const location = useLocation();
  useEffect(() => {
    console.log(location.state);
    setShowLogin(location.state);
    // console.log(location);
  }, [location.state]);

  const handleSelectTarget = (name, icon) => {
    setTarget((cur) => ({ ...cur, name, icon }));
  };

  console.log(arrUserCommu);

  const handleLogOut = () => {
    setUser(null);
    removeToken();
  };

  return (
    <div>
      <div className="bg-white shadow ">
        <div className="max-w-none w-full px-2">
          <div className="flex items-center justify-between h-11">
            <div className=" flex items-center">
              <a className="flex-shrink-0" href="/">
                <div>LOGO</div>
              </a>
            </div>

            <div className="max-w-7xl w-full  items-center hidden md:flex  ">
              <div className="mt-1.5 group flex items-center md:ml-6 mr-8">
                <div className="relative">
                  <div className="relative inline-block text-left">
                    <div className="flex h-8 items-center shadow-md bg-gray-50 ">
                      <div className="bg-gray-50 p-1">
                        {Commu?.Community?.profileUrl ? (
                          <img
                            className="rounded-full w-5 h-5 mx-2"
                            alt="A"
                            src={Commu.Community.profileUrl}
                          />
                        ) : target.icon ? (
                          target.icon
                        ) : (
                          <HiHome className="h-5 w-5 mx-2" />
                        )}
                      </div>
                      <input
                        placeholder="Home"
                        value={target.name}
                        className="text-sm px-2 w-full bg-gray-50 appearance-none outline-none"
                        disabled
                      />
                      <div class="bg-gray-50 text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200">
                        <button class="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
                          <HiChevronDown />
                        </button>
                      </div>
                    </div>

                    {/* CARD */}
                    <div className="z-40 hidden group-hover:block origin-top-right absolute right-0 w-full rounded-sm shadow-lg bg-white  ring-1 ring-black ring-opacity-5 max-h-96 overflow-y-scroll">
                      <div className="py-1">
                        <div className="flex justify-center">
                          {/* Filter */}
                          <input
                            className="bg-gray-100 w-full h-7 px-2 mx-3 shadow appearance-none outline-none"
                            placeholder="Fillter"
                            onChange={(e) => setFilter(e.target.value)}
                          />
                        </div>
                        <div className="flex justify-between  items-center mt-2 ml-5">
                          <div className="text-xs font-bold text-gray-500">
                            My Commnities
                          </div>
                        </div>
                        <Link
                          to="#"
                          className="  px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 h-8 flex items-center"
                          role="menuitem"
                        >
                          <div className="flex items-center">
                            <div>
                              <HiPlusCircle className="h-7 w-5 mr-5" />
                            </div>
                            <span className="flex flex-col font-light text-sm">
                              <span>Create Commnity</span>
                            </span>
                          </div>
                        </Link>
                        {/* Community Dropdown Menu */}
                        {Commu.filter((item) => {
                          if (filter === '') {
                            return item;
                          } else if (
                            item.name
                              .toLowerCase()
                              .includes(filter.toLowerCase())
                          ) {
                            return item;
                          }
                        }).map((item, index) => (
                          <DropdownMenuComu
                            key={index}
                            item={item}
                            handleSelectTarget={handleSelectTarget}
                          />
                        ))}
                      </div>
                      <div className="flex justify-between  items-center mt-2 ml-5">
                        <div className="text-xs font-bold text-gray-500">
                          Feeds
                        </div>
                      </div>
                      {FEEDS.map((item) => (
                        <DropdownMenu
                          key={item.name}
                          item={item}
                          handleSelectTarget={handleSelectTarget}
                        />
                      ))}
                      <div className="flex justify-between  items-center mt-2 ml-5">
                        <div className="text-xs font-bold text-gray-500">
                          Other
                        </div>
                      </div>
                      {OTHER.map((item) => (
                        <DropdownMenu
                          key={item.name}
                          item={item}
                          handleSelectTarget={handleSelectTarget}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Search box */}
              <div className="max-w-xs w-full relative md:ml-6 mr-8">
                <div className="relative flex items-center w-full h-8 rounded-sm shadow-md bg-white overflow-hidden">
                  <div className="grid place-items-center h-full w-12 text-gray-300 bg-gray-100">
                    <HiOutlineSearch className="w-6 h-6" />
                  </div>

                  <input
                    className="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-gray-100"
                    type="text"
                    id="search"
                    placeholder="Search something.."
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>
                <div className="z-50 group-hover:block origin-top-right absolute right-0 w-full rounded-sm shadow-lg bg-white  ring-1 ring-black ring-opacity-5">
                  {/* Search Card */}
                  {search && user
                    ? arrUserCommu
                        .filter((item) => {
                          if (
                            (item?.name &&
                              item?.name
                                .toLowerCase()
                                .includes(search.toLowerCase())) ||
                            (item?.username &&
                              item?.username
                                .toLowerCase()
                                .includes(search.toLowerCase()))
                          ) {
                            console.log(item);
                            return item;
                          }
                        })
                        .map((item, index) => (
                          <SearchCard key={index} item={item} />
                        ))
                    : ''}
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="mr-4  items-center hidden md:flex">
              <Link to="#">
                <HiHome className="h-6 w-6 mr-4" />
              </Link>
              <Link to="#">
                <HiClock className="h-6 w-6 mr-4" />
              </Link>
              <Link to="#">
                <HiFire className="h-6 w-6 mr-4" />
              </Link>
              <Link to="#">
                <HiGlobeAlt className="h-6 w-6 mr-4" />
              </Link>

              <NotificationHead />
            </div>

            {/* Login menu */}
            <div className="hidden md:flex">
              <div className="group  flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div className="relative inline-block text-left ">
                    {user ? (
                      <>
                        <div className="flex items-center px-4 py-2 w-full justify-center">
                          {user.profileUrl ? (
                            <img
                              className="rounded-full h-8 mr-2"
                              alt="A"
                              src={user.profileUrl}
                            />
                          ) : (
                            <div className="mr-1">
                              <HiOutlineUserCircle className="w-7 h-7" />
                            </div>
                          )}
                          <div className="pr-4 font-extralight cursor-pointer">
                            {user.username}
                          </div>
                        </div>
                        <div className="z-50 hidden group-hover:block origin-top-right absolute right-0 w-56 rounded-sm shadow-lg bg-white  ring-1 ring-black ring-opacity-5">
                          <div
                            className="py-1 "
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="options-menu"
                          >
                            <div className="flex justify-between  items-center mt-2 ml-5">
                              <div className="text-xs font-bold text-gray-500">
                                My Service
                              </div>
                            </div>
                            <Link
                              to={`/profile/${user.id}`}
                              className="  px-2 pr-2 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 h-8 flex items-center"
                            >
                              <div className="flex items-center">
                                <div className="mr-2">
                                  <HiOutlineUserCircle className="w-5 h-5" />
                                </div>
                                <span className="flex flex-col text-sm">
                                  <span>Account</span>
                                </span>
                              </div>
                            </Link>
                            <Link
                              to={`/profile/${user.id}/edit`}
                              className="  px-2 pr-2 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 h-8 flex items-center"
                            >
                              <div className="flex items-center">
                                <div className="mr-2">
                                  <HiOutlineCog className="w-5 h-5" />
                                </div>
                                <span className="flex flex-col text-sm">
                                  <span>User Settting</span>
                                </span>
                              </div>
                            </Link>
                            <Link
                              to="#"
                              className="  px-2 pr-2 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 h-8 flex items-center"
                              role="menuitem"
                            >
                              <div className="flex items-center">
                                <div className="mr-2">
                                  <HiOutlineLogout className="w-5 h-5" />
                                </div>
                                <span
                                  onClick={handleLogOut}
                                  className="flex flex-col text-sm"
                                >
                                  <span>Log out</span>
                                </span>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </>
                    ) : (
                      <div className="flex items-center w-48">
                        <ButtonLogin
                          setShowLogin={setShowLogin}
                          setShowRegister={setShowRegister}
                        />
                      </div>
                    )}

                    {showLogin && (
                      <Login
                        setShowLogin={setShowLogin}
                        setShowRegister={setShowRegister}
                        setShowResetpass={setShowResetpass}
                      />
                    )}
                    {showRegister && (
                      <Register
                        setShowRegister={setShowRegister}
                        setShowLogin={setShowLogin}
                      />
                    )}
                    {showResetpass && (
                      <ResetPassword
                        setShowResetpass={setShowResetpass}
                        setShowConfirmPass={setShowConfirmPass}
                      />
                    )}
                    {showConfirmPass && <ConfiremResetPassword />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/#"
            >
              Home
            </Link>
            <Link
              className="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/#"
            >
              Gallery
            </Link>
            <Link
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/#"
            >
              Content
            </Link>
            <Link
              className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              to="/#"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
