import React from "react";
import images from "../constant";

export const Modal = ({ SetShowModal }) => {
  return (
    <div
      onClick={() => SetShowModal(false)}
      className="fixed top-0 z-[100] w-full h-full bg-gray-300/75"
    >
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none p-2 ">
        <div className="relative w-full md:w-2/3 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Connect Wallet</h3>
              {/* <span className="material-symbols-outlined text-2xl font-bold">close</span> */}

              <button
                className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => SetShowModal(false)}
              >
                <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 space-y-8 flex-auto">
              <p className=" text-slate-500 text-md md:text-lg leading-relaxed">
                Choose your preferred wallet:
              </p>
              <div
                className=" text-black font-bold text-sm px-6 py-3 rounded-lg outline-none focus:outline-none ease-linear transition-all duration-150 flex justify-between border-2"
                onClick={() => SetShowModal(false)}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={images.metamasklogo}
                    alt="metamask"
                    className="h-10 w-10"
                  />
                  <span>Metamask</span>
                </div>

                <span className="material-symbols-outlined">chevron_right</span>
              </div>

              <div
                className=" text-black font-bold text-sm px-6 py-3 rounded-lg outline-none focus:outline-none ease-linear transition-all duration-15 flex justify-between border-2"
                onClick={() => SetShowModal(false)}
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={images.wallet}
                    alt="walletconnect"
                    className="h-10 w-10"
                  />
                  <span>WalletConnect</span>
                </div>

                <span className="material-symbols-outlined">chevron_right</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </div>
  );
};
