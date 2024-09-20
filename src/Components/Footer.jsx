import React from "react";
import {
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left w-full md:w-1/3">
              <p className="text-lg font-bold">Compliance Officer:</p>
              <p>Name: Shrikant Jagtap</p>
              <p>
                Email:{" "}
                <a href="mailto:shrikant.jagtap@moneyworks4me.com">
                  shrikant.jagtap@moneywork4me.com
                </a>
              </p>
              <p>
                Mobile No: <a href="tel:+919763800745">+91 97638 00745</a>
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left w-full md:w-1/3">
              <p className="text-lg font-bold">Grievance Officer:</p>
              <p>Name: Mukta Vaze</p>
              <p>
                Email:{" "}
                <a href="mailto:mukta.vaze@moneyworks4me.com">
                  mukta.vaze@moneyworks4me.com
                </a>
              </p>
              <p>
                Mobile No: <a href="tel:+919860919463">+91 98609 19463</a>
              </p>
            </div>
            <div className="flex flex-col items-center md:items-start space-y-2 text-center md:text-left w-full md:w-1/3">
              <p className="text-lg font-bold">Principal Officer:</p>
              <p>Name: Atharva Bhide</p>
              <p>
                Email:{" "}
                <a href="mailto:atharva.bhide@moneyworks4me.com">
                  atharva.bhide@moneyworks4me.com
                </a>
              </p>
              <p>
                Mobile No: <a href="tel:+919175899463">+91 91758 99463</a>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row  my-6 space-y-4 sm:space-y-0 sm:space-x-16">
            <button className="border px-8 py-2 bg-white text-black rounded-3xl">
              Sitemap
            </button>
            <button className="text-white border px-2 py-2 bg-green-400 rounded-3xl flex items-center text-center justify-center">
              <img
                src="playstorelogo.png"
                alt="Play Store"
                className="h-6 w-6 mr-2"
              />
              Download APP
            </button>

            <div className="flex  justify-center items-center space-x-8 mb-6">
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-3xl text-blue-500"
              >
                <FaLinkedin />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-3xl text-blue-800"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-3xl text-blue-400"
              >
                <FaTwitter />
              </a>
              <a href="#" aria-label="YouTube" className="text-xl text-red-900">
                <FaYoutube />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-3xl text-red-800"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                aria-label="Telegram"
                className="text-3xl text-blue-900"
              >
                <FaTelegram />
              </a>
            </div>
          </div>
          <div className="text-center">
            <p className="text-sm sm:text-base mb-2">
              Address: MoneyWorks4Me Investment Advisers, B-101, Signet Corner
              Building, Balewadi Phata, Baner, Pune, Maharashtra 411045
            </p>
            <p className="text-sm sm:text-base mb-2">
              <a href="#">Register a Complaint</a> |{" "}
              <a href="#">Complaint status</a> |{" "}
              <a href="#">Cancellation and Refund Policy</a> |{" "}
              <a href="#">PML Act</a> |{" "}
              <a href="#">Grievance Redressal Process</a> |{" "}
              <a href="#">Investor charter</a> |{" "}
              <a href="#">Terms & Conditions</a> | <a href="#">Disclaimer</a> |{" "}
              <a href="#">Disclosure</a>
            </p>
            <p className="text-sm sm:text-base">
              Data provided by Accord Fintech Pvt. Ltd.
            </p>
          </div>
          <div className="text-center mt-6">
            <p className="text-xs sm:text-sm mb-2">
              Warning: Investment in securities market are subject to market
              risks. Read all the related documents carefully before investing.
            </p>
            <p className="text-xs sm:text-sm">
              Disclaimer: Registration granted by SEBI, membership of BASL (in
              case of IAs) and certification from NISM in no way guarantee
              performance of the intermediary or provides any assurance of
              returns to investors.
            </p>
          </div>
        </div>
      </footer>
      <p className="bg-green-600 py-6 text-center text-sm sm:text-base">
        © 2024 The Alchemists Ark Pvt. Ltd. All rights reserved. MoneyWorks4Me
        is a registered trademark of The Alchemists Ark Pvt. Ltd.
      </p>
    </>
  );
};

export default Footer;
