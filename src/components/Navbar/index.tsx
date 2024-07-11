"use client";

import Link from "next/link";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getRoutes } from "@/utilities/routes/getRoute";
import { Path } from "@/types/path.types";
import React from "react";
type User = {
  name: string;
};

export default function Navbar({ changeNav, posNav }: { changeNav: any, posNav: any }) {
  const [pages, setPages] = useState<Path[]>(getRoutes());
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    changeNav(!isOpen);
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  React.useEffect(() => {
    if (posNav === false) {
      changeNav(false);
      setIsOpen(false);
    }
  }, [posNav])


  return (
    <>
      <nav id="sidebar" style={isOpen ? { width: "inherit" } : { width: "4rem" }}>
        <div className="sidebar-header relative">
          <div className='hamburger-H' style={{ display: `${isOpen ? '' : ''}` }} onClick={toggleMenu}>
            <div className='line-H'></div>
            <div className='line-H'></div>
            <div className='line-H'></div>
          </div>
          {/* <img src="/symbol.png" className="" style={{ position: "absolute", left: "0px", height: "3rem", marginLeft: "6px" }} /> */}
          <button className='closeButton-H' onClick={closeMenu}>X</button>
        </div>
        <div className={`sidebar-logo`} style={isOpen ? { display: "none" } : {}}>
          <div style={{ listStyle: 'none' }} className="sidebar-logo-ui">
            <div onClick={() => { toggleMenu() }} className="sidebar-logo-li sidebar-logo-li-active items-center flex justify-center">
              <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25px" height="30px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M62.79,29.172l-28-28C34.009,0.391,32.985,0,31.962,0s-2.047,0.391-2.828,1.172l-28,28 c-1.562,1.566-1.484,4.016,0.078,5.578c1.566,1.57,3.855,1.801,5.422,0.234L8,33.617V60c0,2.211,1.789,4,4,4h16V48h8v16h16 c2.211,0,4-1.789,4-4V33.695l1.195,1.195c1.562,1.562,3.949,1.422,5.516-0.141C64.274,33.188,64.356,30.734,62.79,29.172z"></path> </g></svg>
            </div> 
            <div onClick={() => { toggleMenu() }} className="sidebar-logo-li items-center flex justify-center">
              <svg width="32px" height="32px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48" fill="#fffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M37,40H11l-6,6V12c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,37.3,40.3,40,37,40z"></path> <g fill="#000000"> <rect x="22" y="20" width="4" height="11"></rect> <circle cx="24" cy="15" r="2"></circle> </g> </g></svg>
            </div>
            <div onClick={() => { toggleMenu() }} className="sidebar-logo-li items-center flex justify-center">
              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xmlSpace="preserve" width="25px" height="25px" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="XMLID_50_"> <g> <polygon fill="#ffffff" points="480,110 480,480 110,480 110,425 280,425 280,147.5 202.5,70 110,70 110,10 380,10 380,110 "></polygon> <polygon fill="#AFB6BB" points="480,110 380,110 380,10 "></polygon> <polygon fill="#E7ECED" points="280,147.5 280,425 110,425 10,425 10,70 110,70 202.5,70 202.5,147.5 "></polygon> <polygon fill="#AFB6BB" points="280,147.5 202.5,147.5 202.5,70 "></polygon> </g> <g> <path fill="#231F20" d="M489.976,110c-0.001-2.602-0.993-5.158-2.905-7.071l-100-100c-1.913-1.912-4.47-2.903-7.071-2.904 V0H110c-5.523,0-10,4.477-10,10v50H10C4.477,60,0,64.478,0,70v355c0,5.522,4.477,10,10,10h90v45c0,5.522,4.477,10,10,10h370 c5.523,0,10-4.478,10-10V110H489.976z M390,34.143L455.858,100H390V34.143z M20,80h172.5v67.5c0,5.523,4.477,10,10,10H270V415H20 V80z M212.5,94.143l43.357,43.357H212.5V94.143z M120,470v-35h160c5.523,0,10-4.478,10-10V147.5c0-2.652-1.054-5.195-2.929-7.071 l-77.5-77.5C207.696,61.054,205.152,60,202.5,60H120V20h250v90c0,5.522,4.477,10,10,10h90v350H120z"></path> <rect x="310" y="160" fill="#231F20" width="130" height="20"></rect> <rect x="310" y="220" fill="#231F20" width="130" height="20"></rect> <rect x="310" y="280" fill="#231F20" width="130" height="20"></rect> <rect x="310" y="340" fill="#231F20" width="130" height="20"></rect> <rect x="310" y="400" fill="#231F20" width="130" height="20"></rect> <rect x="45" y="105" fill="#231F20" width="65" height="20"></rect> <rect x="45" y="145" fill="#231F20" width="65" height="20"></rect> <rect x="45" y="205" fill="#231F20" width="200" height="20"></rect> <rect x="45" y="255" fill="#231F20" width="200" height="20"></rect> <rect x="45" y="305" fill="#231F20" width="200" height="20"></rect> <rect x="45" y="355" fill="#231F20" width="200" height="20"></rect> </g> </g> </g> </g></svg>
            </div>
            <div onClick={() => { toggleMenu() }} className="sidebar-logo-li items-center flex justify-center">
              <svg width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M4 5H.78c-.37 0-.74.32-.69.84l1.56 9.99S3.5 8.47 3.86 6.7c.11-.53.61-.7.98-.7H10s-.7-2.08-.77-2.31C9.11 3.25 8.89 3 8.45 3H5.14c-.36 0-.7.23-.8.64C4.25 4.04 4 5 4 5zm4.88 0h-4s.42-1 .87-1h2.13c.48 0 1 1 1 1zM2.67 16.25c-.31.47-.76.75-1.26.75h15.73c.54 0 .92-.31 1.03-.83.44-2.19 1.68-8.44 1.68-8.44.07-.5-.3-.73-.62-.73H16V5.53c0-.16-.26-.53-.66-.53h-3.76c-.52 0-.87.58-.87.58L10 7H5.59c-.32 0-.63.19-.69.5 0 0-1.59 6.7-1.72 7.33-.07.37-.22.99-.51 1.42zM15.38 7H11s.58-1 1.13-1h2.29c.71 0 .96 1 .96 1z"></path> </g> </g></svg>
            </div>
            <div onClick={() => { toggleMenu() }} className="sidebar-logo-li items-center flex justify-center">
              <svg fill="#ffffff" height="35px" width="35px" version="1.1" id="XMLID_199_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="contact-card"> <g> <path d="M12,20H0v-3.5c0-2.4,1.3-4.5,3.2-5.6C2.5,10.2,2,9.2,2,8.1c0-2.2,1.8-4,4-4s4,1.8,4,4c0,1.1-0.4,2.1-1.2,2.8 c1.9,1.1,3.2,3.3,3.2,5.6V20z M2,18h8v-1.5c0-2.4-1.8-4.5-4-4.5c-2.1,0-4,2.1-4,4.5V18z M6,6C4.9,6,4,6.9,4,8s0.9,2,2,2s2-0.9,2-2 S7.1,6,6,6z M24,17H14v-2h10V17z M21,13h-7v-2h7V13z M24,9H14V7h10V9z"></path> </g> </g> </g></svg>
            </div>
          </div>
        </div>
        <div className='container-H' style={{}}>
          <div className={`${'menu-H'} ${isOpen ? 'open-H' : ''}`}>
            <ul className="list-unstyled components">
              <li className="active">
                <Link href="/dashboard" style={{ display: "flex", justifyContent: "", justifyItems: "center" }} passHref={true}>
                  <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25px" height="30px" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xmlSpace="preserve" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M62.79,29.172l-28-28C34.009,0.391,32.985,0,31.962,0s-2.047,0.391-2.828,1.172l-28,28 c-1.562,1.566-1.484,4.016,0.078,5.578c1.566,1.57,3.855,1.801,5.422,0.234L8,33.617V60c0,2.211,1.789,4,4,4h16V48h8v16h16 c2.211,0,4-1.789,4-4V33.695l1.195,1.195c1.562,1.562,3.949,1.422,5.516-0.141C64.274,33.188,64.356,30.734,62.79,29.172z"></path> </g></svg>
                  <h5 className="" style={{ marginTop: "0.5rem", marginLeft: "1rem" }}>Home</h5>
                </Link>
                {/* <a href="/dashboard" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
            Home
          </a> */}
                <ul className="collapse list-unstyled" id="homeSubmenu">
                  <li>
                    <a href="#">Home 1</a>
                  </li>
                  <li>
                    <a href="#">Home 2</a>
                  </li>
                  <li>
                    <a href="#">Home 3</a>
                  </li>
                </ul>
              </li>
              <li className="navbar-li" style={{ display: "flex", justifyContent: "", justifyItems: "center", paddingLeft: "0.4rem" }}>
                <div className="" style={{ justifyItems: "center", display: "flex", justifyContent: "center", margin: "auto 0" }}>
                  <svg width="32px" height="32px" viewBox="0 0 48 48" version="1" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 48 48" fill="#fffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="#ffffff" d="M37,40H11l-6,6V12c0-3.3,2.7-6,6-6h26c3.3,0,6,2.7,6,6v22C43,37.3,40.3,40,37,40z"></path> <g fill="#000000"> <rect x="22" y="20" width="4" height="11"></rect> <circle cx="24" cy="15" r="2"></circle> </g> </g></svg>
                </div>
                <a href="#" style={{ marginTop: "0rem", marginLeft: "0.3rem" }}>About</a>
              </li>
              <li className="navbar-li" style={{ display: "flex", justifyContent: "", justifyItems: "center", paddingLeft: "0.4rem" }}>
                <div style={{ display: "flex", justifyContent: "", justifyItems: "center" }}>
                  <div className="" style={{ justifyItems: "center", display: "flex", justifyContent: "center", margin: "auto 0" }}>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xmlSpace="preserve" width="25px" height="25px" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g id="XMLID_50_"> <g> <polygon fill="#ffffff" points="480,110 480,480 110,480 110,425 280,425 280,147.5 202.5,70 110,70 110,10 380,10 380,110 "></polygon> <polygon fill="#AFB6BB" points="480,110 380,110 380,10 "></polygon> <polygon fill="#E7ECED" points="280,147.5 280,425 110,425 10,425 10,70 110,70 202.5,70 202.5,147.5 "></polygon> <polygon fill="#AFB6BB" points="280,147.5 202.5,147.5 202.5,70 "></polygon> </g> <g> <path fill="#231F20" d="M489.976,110c-0.001-2.602-0.993-5.158-2.905-7.071l-100-100c-1.913-1.912-4.47-2.903-7.071-2.904 V0H110c-5.523,0-10,4.477-10,10v50H10C4.477,60,0,64.478,0,70v355c0,5.522,4.477,10,10,10h90v45c0,5.522,4.477,10,10,10h370 c5.523,0,10-4.478,10-10V110H489.976z M390,34.143L455.858,100H390V34.143z M20,80h172.5v67.5c0,5.523,4.477,10,10,10H270V415H20 V80z M212.5,94.143l43.357,43.357H212.5V94.143z M120,470v-35h160c5.523,0,10-4.478,10-10V147.5c0-2.652-1.054-5.195-2.929-7.071 l-77.5-77.5C207.696,61.054,205.152,60,202.5,60H120V20h250v90c0,5.522,4.477,10,10,10h90v350H120z"></path> <rect x="310" y="160" fill="#231F20" width="130" height="20"></rect> <rect x="310" y="220" fill="#231F20" width="130" height="20"></rect> <rect x="310" y="280" fill="#231F20" width="130" height="20"></rect> <rect x="310" y="340" fill="#231F20" width="130" height="20"></rect> <rect x="310" y="400" fill="#231F20" width="130" height="20"></rect> <rect x="45" y="105" fill="#231F20" width="65" height="20"></rect> <rect x="45" y="145" fill="#231F20" width="65" height="20"></rect> <rect x="45" y="205" fill="#231F20" width="200" height="20"></rect> <rect x="45" y="255" fill="#231F20" width="200" height="20"></rect> <rect x="45" y="305" fill="#231F20" width="200" height="20"></rect> <rect x="45" y="355" fill="#231F20" width="200" height="20"></rect> </g> </g> </g> </g></svg>
                  </div>
                  <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle" style={{ marginTop: "0rem", marginLeft: "0.7rem" }}>
                    Pages
                  </a>
                </div>
                <ul className="collapse list-unstyled" id="pageSubmenu">
                  <li>
                    <a href="#">Page 1</a>
                  </li>
                  <li>
                    <a href="#">Page 2</a>
                  </li>
                  <li>
                    <a href="#">Page 3</a>
                  </li>
                </ul>
              </li>
              <li className="navbar-li" style={{ display: "flex", justifyContent: "", justifyItems: "center", paddingLeft: "0.4rem" }}>
                <div className="" style={{ justifyItems: "center", display: "flex", justifyContent: "center", margin: "auto 0" }}>
                  <svg width="30px" height="30px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect x="0" fill="none" width="20" height="20"></rect> <g> <path d="M4 5H.78c-.37 0-.74.32-.69.84l1.56 9.99S3.5 8.47 3.86 6.7c.11-.53.61-.7.98-.7H10s-.7-2.08-.77-2.31C9.11 3.25 8.89 3 8.45 3H5.14c-.36 0-.7.23-.8.64C4.25 4.04 4 5 4 5zm4.88 0h-4s.42-1 .87-1h2.13c.48 0 1 1 1 1zM2.67 16.25c-.31.47-.76.75-1.26.75h15.73c.54 0 .92-.31 1.03-.83.44-2.19 1.68-8.44 1.68-8.44.07-.5-.3-.73-.62-.73H16V5.53c0-.16-.26-.53-.66-.53h-3.76c-.52 0-.87.58-.87.58L10 7H5.59c-.32 0-.63.19-.69.5 0 0-1.59 6.7-1.72 7.33-.07.37-.22.99-.51 1.42zM15.38 7H11s.58-1 1.13-1h2.29c.71 0 .96 1 .96 1z"></path> </g> </g></svg>
                </div>
                <a href="#" style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }} >Portfolio</a>
              </li>
              <li className="navbar-li" style={{ display: "flex", justifyContent: "", justifyItems: "center", paddingLeft: "0.4rem" }}>
                <div className="" style={{ justifyItems: "center", display: "flex", justifyContent: "center", margin: "auto 0" }}>
                  <svg fill="#ffffff" height="30px" width="30px" version="1.1" id="XMLID_199_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="contact-card"> <g> <path d="M12,20H0v-3.5c0-2.4,1.3-4.5,3.2-5.6C2.5,10.2,2,9.2,2,8.1c0-2.2,1.8-4,4-4s4,1.8,4,4c0,1.1-0.4,2.1-1.2,2.8 c1.9,1.1,3.2,3.3,3.2,5.6V20z M2,18h8v-1.5c0-2.4-1.8-4.5-4-4.5c-2.1,0-4,2.1-4,4.5V18z M6,6C4.9,6,4,6.9,4,8s0.9,2,2,2s2-0.9,2-2 S7.1,6,6,6z M24,17H14v-2h10V17z M21,13h-7v-2h7V13z M24,9H14V7h10V9z"></path> </g> </g> </g></svg>
                </div>
                <a href="#" style={{ marginTop: "0.5rem", marginLeft: "0.5rem" }}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
