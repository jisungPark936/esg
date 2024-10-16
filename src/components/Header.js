import { Disclosure, DisclosureButton } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';
import { Link } from 'react-scroll';

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };

  const handleMouseOut = () => {
    setActiveIndex(null);
  };

  return (
    <Disclosure as="nav" className="bg-white shadow">
      <div className="mx-auto max-w-[93rem] px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between">
          <div className="flex flex-shrink-0 items-center">
            <img
              alt="Your Company"
              src="https://cdn.imweb.me/thumbnail/20240722/31b28b3daf3b5.png"
            />
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8 header-text">
              {/* Navigation Links */}
              <a
                href="#"
                className={`inline-flex items-center px-1 pt-1 font-medium text-headerGreen ${
                  activeIndex === 0 ? 'nav_leaf' : ''
                }`}
                onMouseOver={() => handleMouseOver(0)}
                onMouseOut={handleMouseOut}
              >
                홈
              </a>
              <Link
                to="section1"
                smooth={true}
                duration={500}
                className={`inline-flex items-center px-1 pt-1 font-medium text-gray-500 hover:text-headerGreen ${
                  activeIndex === 1 ? 'nav_leaf' : ''
                }`}
                onMouseOver={() => handleMouseOver(1)}
                onMouseOut={handleMouseOut}
              >
                시간표
              </Link>
              <Link
                to="section2"
                smooth={true}
                duration={500}
                className={`inline-flex items-center px-1 pt-1 font-medium text-gray-500 hover:text-headerGreen ${
                  activeIndex === 2 ? 'nav_leaf' : ''
                }`}
                onMouseOver={() => handleMouseOver(2)}
                onMouseOut={handleMouseOut}
              >
                신청하기
              </Link>
            </div>
          </div>

          <div className="-mr-2 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="sm:hidden">
        <div className="space-y-1 pb-3 pt-2">
          <DisclosureButton
            as="a"
            href="https://crsa.or.kr/"
            className="block bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
          >
            홈
          </DisclosureButton>
          <DisclosureButton
            as={Link}
            to="section1" // The ID of the section to scroll to
            smooth={true}
            duration={500}
            className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            시간표
          </DisclosureButton>
          <DisclosureButton
            as={Link}
            to="section2" // The ID of the section to scroll to
            smooth={true}
            duration={500}
            className="block py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
          >
            신청하기
          </DisclosureButton>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  );
}
