
"use client";
import Image from "next/image";
import { MagnifyingGlass } from "phosphor-react";
import { Navbar, Button } from "keep-react";
import Link from "next/link";
import logo from '../../public/logo.jpeg'

export const NavbarComponent = () => {
  return (
    <Navbar fluid={true}>
      <Navbar.Container className="flex items-center justify-between py-5">
        <Navbar.Container className="flex items-center">
          <Navbar.Brand>
            <Image
              src={logo}
              alt="keep"
              width="70"
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
