import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import images from "../constant";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";

export const Navbar = () => {
  const { logo } = images;
  const [showNav, SetShowNav] = useState(false);
  const [showModal, SetShowModal] = useState(false);

  const navlink = "text-gray-500 transition hover:text-gray-500/75";

  return (
    <nav>
      <header className="bg-white">
        <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Link to="/" className="block text-teal-600">
                <span className="sr-only">Home</span>
                <img src={logo} alt="logo" id="logo" className="h-8" />
              </Link>
            </div>

            <div className="hidden md:block">
              <nav>
                <ul className="flex flex-col md:flex-row md:items-center md:gap-6 text-md">
                  <li>
                    <Link className={navlink} to="/">
                      Home
                    </Link>
                  </li>

                  <li>
                    <Link className={navlink} to="/place">
                      Place to stay
                    </Link>
                  </li>

                  <li>
                    <Link className={navlink} to="/">
                      NFTs
                    </Link>
                  </li>

                  <li>
                    <Link className={navlink} to="/">
                      Community
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <div className="hidden sm:flex">
                  <button
                    onClick={() => SetShowModal((show) => !show)}
                    className="rounded-md bg-[#A02279] px-5 py-2.5 text-sm font-medium text-white shadow"
                    type="button"
                  >
                    Connect wallet
                  </button>
                </div>
              </div>

              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                  onClick={() => SetShowNav((prev) => !prev)}
                >
                  {!showNav && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  )}
                  {showNav && (
                    <span class="material-symbols-outlined">close</span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {showNav && (
        <div
          className="block absolute z-[100] w-full h-full bg-white md:hidden p-6"
          onClick={() => SetShowNav(false)}
        >
          <ul className="flex flex-col gap-6 text-md">
            <li className=" bg-slate-300 w-full p-2 rounded-2xl">
              <Link className={`${navlink} text-2xl text-white`} to="/">
                Home
              </Link>
            </li>

            <li className=" bg-slate-300 w-full p-2 rounded-2xl">
              <Link className={`${navlink} text-2xl text-white`} to="/place">
                Place to stay
              </Link>
            </li>

            <li className=" bg-slate-300 w-full p-2 rounded-2xl">
              <Link className={`${navlink} text-2xl text-white`} to="/">
                NFTs
              </Link>
            </li>

            <li className=" bg-slate-300 w-full p-2 rounded-2xl">
              <Link className={`${navlink} text-2xl text-white`} to="/">
                Community
              </Link>
            </li>

            <li className=" bg-slate-300 w-full p-2 rounded-2xl">
              <button
                onClick={() => SetShowModal((show) => !show)}
                className={`${navlink} text-2xl text-white`}
              >
                Connect Wallet
              </button>
            </li>
          </ul>
        </div>
      )}
      {showModal && (
      <Modal SetShowModal={SetShowModal} />
      )}
      <Outlet />
    </nav>
  );
};
