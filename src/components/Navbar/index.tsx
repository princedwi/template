"use client";

import Link from "next/link";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getRoutes } from "@/utilities/routes/getRoute";
import { Path } from "@/types/path.types";

type User = {
  name: string;
};

export default function Navbar() {
  const [pages, setPages] = useState<Path[]>(getRoutes());
  const pathname = usePathname();

  return (
    <nav id="sidebar">
      <div className="sidebar-header">
        <img src="/symbol.png" className="" />
      </div>

      <ul className="list-unstyled components">
        <li className="active">
          <a
            href="#homeSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Home
          </a>
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
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a
            href="#pageSubmenu"
            data-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle"
          >
            Pages
          </a>
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
        <li>
          <a href="#">Portfolio</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
