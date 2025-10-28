import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 py-10">
        <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
            </h2>

            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 font-medium text-white bg-orange-700 rounded-lg hover:opacity-75 transition-opacity"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="white"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              <span className="ml-2">Download now</span>
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 flex justify-center sm:justify-start items-center">
          <img
            className="w-96 object-contain sm:my-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-viyatxgn9yrOqIB_oh3MiTNmLqQSNPBSJA&s"
            alt="Illustration related to download"
          />
        </div>
      </aside>

      <div className="grid place-items-center sm:mt-20 mt-10">
        <img
          className="sm:w-96 w-48 object-contain"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyBblaugnmRkfwD-tgPfzuDm8cQePizlXw6g&s"
          alt="Supporting illustration"
        />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        Lorem Ipsum Yojo
      </h1>
    </div>
  );
}