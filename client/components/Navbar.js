import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DDLIcon from "../public/images/ddl-logo-lr.svg";
export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="Navbar" id="Navbar">
      <ul
        className="nav nav-links"
        id={showLinks ? "nav-active" : "nav-hidden"}
      >
        <li className="nav-item">
          <Link className="nav-link phone-none" href="/">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="/services">
            Services
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/" className="phone-none">
            <Image
              priority
              className="icon fb-icon"
              src={DDLIcon}
              alt="dream-design-landscaping-icon"
              width={150}
              height={50}
            />
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="/portfolio">
            Portfolio
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" href="/pricing">
            Pricing
          </Link>
        </li>
      </ul>

      <Link className="nav-link pc-none" href="/">
        Home
      </Link>

      <div className="burger" onClick={() => setShowLinks(!showLinks)}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </div>
  );
}
