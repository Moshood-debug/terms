import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-accent pt-9 pb-20 ">
      <div className="container mx-auto">
        <div className="grid grid-cols-2">
          <div className="space-y-8">
            <div className="flex  items-center gap-20 text-white">
              <p>Privacy</p>
              <p>Legal Notice</p>
              <p>Term & Conditions</p>
            </div>

            <div className="">
              <p className="text-white">&copy;XYZ 2024 All Rights Reserved</p>
            </div>
          </div>

          <div className="">
            <div className="flex justify-end items-center">
              <div className="flex items-center gap-5">
                <Link href={""}>
                  <div className="w-8 h-8 flex justify-center items-center rounded-full border-[1px] border-white  overflow-hidden">
                    <FaFacebookF size={20} className=" text-white" />
                  </div>
                </Link>

                <Link href={""}>
                  {" "}
                  <div className="w-8 h-8 flex justify-center items-center rounded-full border-[1px] border-white  overflow-hidden">
                    <FaInstagram size={20} className=" text-white" />
                  </div>
                </Link>
                <Link href={""}>
                  <div className="w-8 h-8 flex justify-center items-center rounded-full border-[1px] border-white  overflow-hidden">
                    <FaTwitter size={20} className=" text-white" />
                  </div>
                </Link>
                <Link href={""}>
                  {" "}
                  <div className="w-8 h-8 flex justify-center items-center rounded-full border-[1px] border-white  overflow-hidden">
                    <FaYoutube size={20} className=" text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
