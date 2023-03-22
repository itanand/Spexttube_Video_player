import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import Logo from "../images/logo.svg";


import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";

import { Context } from "../context/contextApi";
import Loader from "../shared/loader";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const { loading, mobileMenu, setMobileMenu } = useContext(Context);

    const navigate = useNavigate();

    const searchQueryHandler = (event) => {
        if (
            (event?.key === "Enter" || event === "searchButton") &&
            searchQuery?.length > 0
        ) {
            navigate(`/searchResult/${searchQuery}`);
        }
    };

    const mobileMenuToggle = () => {
        setMobileMenu(!mobileMenu);
    };

    const { pathname } = useLocation();
    const pageName = pathname?.split("/")?.filter(Boolean)?.[0];

    return (
        <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black dark:bg-black">
            {loading && <Loader />}

            <div className="flex h-5 items-center">
                {pageName !== "video" && (
                    <div
                        className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
                        onClick={mobileMenuToggle}
                    >
                        {mobileMenu ? (
                            <CgClose className="text-white text-xl" />
                        ) : (
                            <SlMenu className="text-white text-xl" />
                        )}
                    </div>
                )}
                <Link to="/" className="flex h-5 items-center">
                    <img
                        className="h-full hidden md:block"
                        src={Logo}
                        alt="Spexttube"
                    />
                    <img
                        className="h-full md:hidden"
                        src={Logo}
                        alt="Spexttube"
                    />
                </Link>
            </div>
            <div className="group flex items-center">
                <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                    <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                        <IoIosSearch className="text-white text-xl" />
                    </div>
                    <input
                        type="text"
                        className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        placeholder="How to Learn React...."
                        value={searchQuery}
                    />
                </div>
                <button
                    className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
                    onClick={() => searchQueryHandler("searchButton")}
                >
                    <IoIosSearch className="text-white text-xl" />
                </button>
            </div>
            <div className="flex items-center">
                <div className="hidden md:flex">
                    <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <RiVideoAddLine className="text-white text-xl cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                        <FiBell className="text-white text-xl cursor-pointer" />
                    </div>
                </div>
                <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                    <img src="data:image/jpeg;base64,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" />
                </div>
            </div>
        </div>
    );
};

export default Header;
