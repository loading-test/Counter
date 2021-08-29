import React from "react";

const NavBar = ({ totalItem }) => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="/">
          Active
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/">
          Link
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link disabled position-relative"
          href="/"
          tabIndex="-1"
          aria-disabled="true"
        >
          Корзина{" "}
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {totalItem}
            <span className="visually-hidden">unread messages</span>
          </span>
        </a>
      </li>
    </ul>
  );
};

export default NavBar;
