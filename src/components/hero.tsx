import Image from "next/image";
import "../style/hero.css";
function Hero() {
  return (
    <div className="header-container">
      <div className="header-boxes-con">
        <div>
          <Image
            src={"/image.jpg"}
            width={200}
            height={200}
            className="header-image"
            alt="profile"
          />
        </div>
        <div className="hero-right-div">
          <h1 className="title-hero">
            I&apos;m Farwa Tufail, Front-end Developer.{" "}
          </h1>
          <p className="des-hero">
            I&apos;m Farwa Tufail, a web developer skilled in Next.js, Tailwind
            CSS, and modern web technologies. I love creating interactive,
            user-friendly websites and am passionate about turning ideas into
            reality through clean and efficient code.
          </p>
          <button className="hero-btn">HIRE ME</button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
