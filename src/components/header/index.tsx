"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getRoutes } from "@/utilities/routes/getRoute";
import { Path } from "@/types/path.types";

type User = {
  name: string;
};

export default function Header() {
  const [pages, setPages] = useState<Path[]>(getRoutes());
  const pathname = usePathname();

  return (
    <header className="header" id="header">
      <div className="header_toggle">
        <h2>Jacobs</h2>
      </div>
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

      <div className="dropdown">
        <div
          className="header_img float-end dropdown-toggle"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {" "}
          <img src="https://i.imgur.com/hczKIze.jpg" alt="" />{" "}
        </div>
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
