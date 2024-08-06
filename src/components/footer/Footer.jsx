import {
  faFacebook,
  faSquareInstagram,
  faViber,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-neutral-800">
        <div class="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 flex gap-8 py-8 flex-wrap md:gap-0">
          <div class="md:flex-1 flex flex-col gap-2">
            <p class="text-white text-lg font-semibold">GiaoLưuCầuLông</p>
            <p class="text-neutral-500 text-sm">Copyright Ⓒ 2024</p>
          </div>
          <div class="md:flex-1 flex flex-col gap-2">
            <p class="text-white text-lg font-semibold">About</p>
            <a class="text-neutral-500 text-sm" href="https://ohasport.com/">
              About Us
            </a>
            <a class="text-neutral-500 text-sm" href="https://ohasport.com/">
              Contact
            </a>
          </div>
          <div class="md:flex-1 flex flex-col gap-2">
            <p class="text-white text-lg font-semibold">Legal</p>
            <a class="text-neutral-500 text-sm" href="/terms-and-conditions">
              Terms &amp; Conditions
            </a>
            <a class="text-neutral-500 text-sm" href="/privacy-policy">
              Privacy Policy
            </a>
          </div>
          <div class="md:flex-1 flex flex-col gap-2">
            <p class="text-white text-lg font-semibold">Help</p>
            <a
              class="text-neutral-500 text-sm"
              href="https://www.m.me/ohasports"
            >
              Support
            </a>
          </div>
          <div class="md:flex-1 flex flex-col gap-2">
            <p class="text-white text-lg font-semibold">Follow Us</p>
            <ul class="flex items-center gap-4">
              <li>
                <a
                  aria-label="Facebook"
                  class="block"
                  href="https://www.facebook.com/giaoluucaulongdotcom"
                >
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-white text-xl inline-block transition-transform transform hover:scale-125"
                  />
                </a>
              </li>
              <li>
                <a
                  aria-label="Zalo"
                  class="block"
                  href="https://zalo.me/0394173527"
                >
                  <FontAwesomeIcon
                    icon={faSquareInstagram}
                    className="text-white text-xl inline-block transition-transform transform hover:scale-125"
                  />
                </a>
              </li>
              <li>
                <a
                  aria-label="Zalo"
                  class="block"
                  href="https://zalo.me/0394173527"
                >
                  <FontAwesomeIcon
                    icon={faViber}
                    className="text-white text-xl inline-block transition-transform transform hover:scale-125"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
