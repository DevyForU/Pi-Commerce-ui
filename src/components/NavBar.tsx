import React, { useState, ChangeEvent } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";

export default function NavBar() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const handleResetSearch = () => {
    setSearchValue("");
  };

  return (
    <Navbar shouldHideOnScroll className="border-none shadow-md flex justify-between items-center px-10 pt-3 pb-14 sm:py-3 sm:pt-0 sm:pb-0">
      <NavbarBrand className="grow">
        <p className="text-2xl font-semibold italic text-white">Vaika Store</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4 justify-between items-center">
        <NavbarItem>
          <Link color="foreground" href="/home" className="text-white">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" aria-current="page" className="text-white">
           Brands
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white">
             Cars
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="flex items-center lg:shrink-0 lg:flex-nowrap">
        <div className="relative flex items-center lg:ml-4 sm:mr-0 mr-2">
          <span className="absolute ml-4 leading-none -translate-y-1/2 top-1/2 text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-slate-800">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </span>
          <input
            className="block w-full min-w-[50px] py-3 pl-12 pr-4 text-base font-medium leading-normal bg-slate-200 border border-solid outline-none appearance-none placeholder:text-secondary-dark peer text-slate-200 border-none bg-clip-padding rounded-xl"
            placeholder="Search..."
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
          />
          <span onClick={handleSearchChange} className="absolute right-0 left-auto mr-4 leading-none -translate-y-1/2 peer-placeholder-shown:hidden top-1/2 hover:text-primary text-muted">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </span>
        </div>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="bg-slate-600 text-slate-200 px-2 py-2 rounded-lg shadow-slate-500 active:translate-y-[4px] active:shadow-none transition-all">
          <Button href="/sign-in"> Login </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
