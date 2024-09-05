import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsTwitterX,
  BsDiscord,
  BsInstagram,
  BsLinkedin,
  BsPinterest,
} from "react-icons/bs";

export default function FooterComponent() {
  return (
    <Footer container className="border-t-8 border-orange-400">
      <div className="w-full max-w-7xl mx-auto">
        <div className="w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-sm 
                  sm:text-xl font-semibold dark:text-white"
            >
              <span
                className="px-2 py-1 bg-gradient-to-r from-rose-400
                via-orange-300 to bg-yellow-100 text-purple-600"
              >
                ユニクロ
              </span>
              E-Commerce
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-3">
            <div className="">
              <Footer.Title title="About"></Footer.Title>
              <Footer.LinkGroup col>
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Buy whatever you want!!
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col className="mt-2">
                <Footer.Link
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ユニクロE-Commerce
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow Us"></Footer.Title>

              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col className="mt-2">
                <Footer.Link
                  href="https://github.com/schweizerwilsemann"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal"></Footer.Title>
              <Footer.LinkGroup col>
                <Footer.Link href="#">Privacy Policy</Footer.Link>
              </Footer.LinkGroup>
              <Footer.LinkGroup col className="mt-2">
                <Footer.Link href="#">Terms & Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:items-center sm:flex sm:justify-between">
          <Footer.Copyright
            href="#"
            by="ユニクロE-Commerce"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon
              href="https://www.facebook.com/akira.kiyoshi.16144"
              icon={BsFacebook}
            ></Footer.Icon>
            <Footer.Icon
              href="https://www.X.com/"
              icon={BsTwitterX}
            ></Footer.Icon>
            <Footer.Icon
              href="https://www.discord.com/"
              icon={BsDiscord}
            ></Footer.Icon>
            <Footer.Icon
              href="https://www.instagram.com/"
              icon={BsInstagram}
            ></Footer.Icon>
            <Footer.Icon
              href="https://www.linkedin.com/"
              icon={BsLinkedin}
            ></Footer.Icon>
            <Footer.Icon
              href="https://www.pinterest.com/"
              icon={BsPinterest}
            ></Footer.Icon>
          </div>
        </div>
      </div>
    </Footer>
  );
}
