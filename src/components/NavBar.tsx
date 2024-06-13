import  React  from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function App() {
    return (
      <Navbar shouldHideOnScroll className="border-none shadow-md flex justify-between items-center px-10 pt-3 pb-14 sm:py-3 sm:pt-0 sm:pb-0">
        <NavbarBrand className="grow">
          <p className="text-2xl font-semibold italic text-white">Vaika Store</p>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-4 justify-center items-center">
          <NavbarItem>
            <Link color="foreground" href="/home" className="text-white">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page" className="text-white">
              Our Brands
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className="text-white">
              Our Cars
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="bg-slate-200 text-slate-800 px-2 py-2 rounded-lg shadow-slate-500 active:translate-y-[4px] active:shadow-none transition-all">
            <Button href="/sign-in" > Login </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    );
  }