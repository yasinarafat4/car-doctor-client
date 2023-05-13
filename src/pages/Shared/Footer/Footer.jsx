import logo from "../../../assets/logo.svg";
import "./Footer.css";
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-black text-white">
      <div>
        <img src={logo} className="logo" alt="" />
        <p>Providing reliable tech since 1992</p>
        <div className="flex justify-center items-center gap-4">
          <FaGoogle />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>

      <div>
        <span className="footer-title">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
  );
};

export default Footer;
