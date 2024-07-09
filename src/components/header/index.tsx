"use client";

import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getRoutes } from "@/utilities/routes/getRoute";
import { Path } from "@/types/path.types";

type User = {
  name: string;
};

export default function Header({ changeNav, posNav }: { changeNav: any, posNav:any }) {
  const router = useRouter();
  const [pages, setPages] = useState<Path[]>(getRoutes());
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here
    router.push("/login");
  };
  return (
    <header className="header" id="header" style={{
      width: "100vw",
      // position:"absolute"
    }}>
      {/* <div className="header_toggle">
       
        <img src="/symbol.png" className=""></img>
      </div> */}
      <div className="nav-menu">
        {pages.map((e: Path, index) => (
          <Link
            href={e.url}
            key={index}
            className={pathname == e.url ? "nav-item active" : "nav-item"}
          >
            {e.name}
          </Link>
        ))}
      </div>
      <img src="/symbol.png" className="" style={{ position: "absolute", left: "0px", height: "85%", marginLeft: "6px" }} onClick={()=>{if(posNav===true)changeNav(false)}} />
      <div><h2 style={{
        color: "white"
      }}>WebApp</h2></div>

      <div className="dropdown">
        <div
          className="header_img container-P"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {" "}
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Free-Download.png" // Replace with your profile picture source
            alt="Profile"
            className='profilePic-P'
            onClick={toggleMenu}
            style={{ zIndex: "10" }}
          />

        </div>
        {isOpen && (
          <div className='menu-P'>
            <ul>
              <li className='logout-P' onClick={handleLogout}>Log Out</li>
            </ul>
          </div>
        )}
        {/* <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown button
        </button> */}
        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>
    </header>
  );
}
