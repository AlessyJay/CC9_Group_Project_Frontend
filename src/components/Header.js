import React from 'react';

function Header() {
  return (
    <div>
      <nav class="bg-white dark:bg-gray-800  shadow ">
        <div class="max-w-7xl mx-auto px-0">
          <div class="flex items-center justify-between h-11">
            <div class=" flex items-center">
              <a class="flex-shrink-0" href="/">
                <div>LOGO</div>
              </a>
              <div></div>
            </div>
            <div class="max-w-xl w-full mx-auto">
              <div class="relative flex items-center w-full h-9 rounded-sm shadow-md bg-white overflow-hidden">
                <div class="grid place-items-center h-full w-12 text-gray-300 bg-gray-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>

                <input
                  class="peer h-full w-full outline-none text-sm text-gray-700 pr-2 bg-gray-100"
                  type="text"
                  id="search"
                  placeholder="Search something.."
                />
              </div>
            </div>
            <div class="block">
              <div class="group ml-4 flex items-center md:ml-6">
                <div class="ml-3 relative">
                  <div class="relative inline-block text-left">
                    <div className="flex items-center hover:bg-gray-100">
                      <button
                        type="button"
                        class="  flex items-center justify-center w-full rounded-md  px-4 py-2 text-sm font-medium text-gray-700 "
                        id="options-menu"
                      >
                        <svg
                          width="20"
                          fill="currentColor"
                          height="20"
                          class="text-gray-800"
                          viewBox="0 0 1792 1792"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M1523 1339q-22-155-87.5-257.5t-184.5-118.5q-67 74-159.5 115.5t-195.5 41.5-195.5-41.5-159.5-115.5q-119 16-184.5 118.5t-87.5 257.5q106 150 271 237.5t356 87.5 356-87.5 271-237.5zm-243-699q0-159-112.5-271.5t-271.5-112.5-271.5 112.5-112.5 271.5 112.5 271.5 271.5 112.5 271.5-112.5 112.5-271.5zm512 256q0 182-71 347.5t-190.5 286-285.5 191.5-349 71q-182 0-348-71t-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z"></path>
                        </svg>
                      </button>
                      <div className="pr-4 font-extralight cursor-pointer">
                        DueNeighborhood6317
                      </div>
                    </div>
                    <div class="hidden group-hover:block origin-top-right absolute right-0 mt-1 w-56 rounded-sm shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
                      <div
                        class="py-1 "
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <a
                          href="#"
                          class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                          role="menuitem"
                        >
                          <span class="flex flex-col">
                            <span>Settings</span>
                          </span>
                        </a>
                        <a
                          href="#"
                          class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                          role="menuitem"
                        >
                          <span class="flex flex-col">
                            <span>Account</span>
                          </span>
                        </a>
                        <a
                          href="#"
                          class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                          role="menuitem"
                        >
                          <span class="flex flex-col">
                            <span>Logout</span>
                          </span>
                        </a>
                        <a
                          href="#"
                          class="block block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600"
                          role="menuitem"
                        >
                          <span class="flex flex-col">
                            <span>Logout</span>
                            <span>Logout</span>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Home
            </a>
            <a
              class="text-gray-800 dark:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Gallery
            </a>
            <a
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Content
            </a>
            <a
              class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              href="/#"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
