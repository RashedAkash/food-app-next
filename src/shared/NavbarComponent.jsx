
"use client";
import Image from "next/image";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
import Link from "next/link";

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <Image
              src="/images/keep.svg"
              alt="keep"
              width="100"
              height="40"
            />
          </Navbar.Brand>
          <Navbar.Divider></Navbar.Divider>
          <Navbar.Container
            tag="ul"
            className="lg:flex hidden items-center justify-between gap-8"
          >
            <Link href='/'>
              Home
            </Link>
            <Link href='/about'>
              About
            </Link>
            <Link href='/menu'>
              Menu
            </Link>
            <Link href='/contact'>
              Contact
            </Link>
            
          </Navbar.Container>
          <Navbar.Collapse collapseType="sidebar">
            <Navbar.Container tag="ul" className="flex flex-col gap-5">
              <Link href='/'>
              Home
            </Link>
            <Link href='/about'>
              About
            </Link>
            <Link href='/menu'>
              Menu
            </Link>
            <Link href='/contact'>
              Contact
            </Link>
            
            </Navbar.Container>
          </Navbar.Collapse>
        </Navbar.Container>

        <Navbar.Container className="flex gap-2">
          
          <Link href='/login'>
           <Button size="sm" type="primary">
            Login
          </Button>
          </Link>
          <Navbar.Toggle />
        </Navbar.Container>
      </Navbar.Container>
    </Navbar>
  );
}
