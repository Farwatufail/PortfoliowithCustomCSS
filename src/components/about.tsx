import Image from "next/image";
import "../style/hero.css";
import "../style/about.css";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
function About(){
    return(
        <div className="header-container">
            <div className="header-boxes-con">
                  <div>
                  <Image src={"/image.jpg"}
                  width={200}
                  height={200}
                  className="header-image"

                   alt="profile"/>
                   <div className="social-icons">
                   <Link href={""}> <FaYoutube className="s-icon-1"/></Link>
                   <Link href={""}> <FaFacebook className="s-icon-2"/></Link>
                   <Link href={""}> <FaInstagram className="s-icon-3"/></Link>
                   </div>
                  </div>
                 <div className="hero-right-div">
                    <h1 className="title-hero">About Us</h1>
                        <p className="des-hero">
                         </p>I'm Farwa Tufail, a web developer skilled in Next.js, Tailwind CSS, and modern web technologies. I love creating interactive, user-friendly websites and am passionate about turning ideas into reality through clean and efficient code
                         
                 </div>
            </div>
        </div>
    )
}
export default About