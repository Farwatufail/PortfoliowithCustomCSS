import "../style/services.css";
import { GiSpartanHelmet } from "react-icons/gi";
import { HiMiniPhoto } from "react-icons/hi2";
import { RiAdvertisementFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";
function Services() {
  return (
    <main className="main">
      <div className="ser-container">
        <div className="top-div-ser">
          <h2 className="title-ser">My Services</h2>
          <p className="des-ser">
          </p>
        </div>
        <div className="boxes-con">
          <div className="box">
            <FaLaptopCode className="ser-icon" />
            <h3>App Development</h3>
          </div>
          <div className="box">
            <GiSpartanHelmet  className="ser-icon" />
            <h3>UI/UX Design</h3>
          </div>
          <div className="box">
            <HiMiniPhoto className="ser-icon" />
            <h3>Photo Editing</h3>
          </div>
          <div className="box">
            <RiAdvertisementFill className="ser-icon" />
            <h3>Digital Marketing</h3>
            </div>
        </div>
      </div>
    </main>
  );
}
export default Services;
