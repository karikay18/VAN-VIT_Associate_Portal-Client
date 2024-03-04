import { Link } from "react-router-dom";
import College from "../assets/Collge.png";

// Footer component
const Footer = () => {
  return (
    <footer
      className="text-white
    -600 body-font bg-slate-600 shadow-md josefin-sans font-bold"
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 flex flex-col gap-5 text-center font-semibold text-xl justify-center items-center">
            <img src={College} style={{ width: "10rem" }} />
            <h2>Vellore Institute of  Technology, Bhopal</h2>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10 h-full flex flex-col justify-between font-semibold text-xl">
              <Link
                to="https://vitbhopal.ac.in/"
                target="_blank"
                className="text-white hover:text-gray-300 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                VIT Bhopal Website
              </Link>
              <Link
                to="https://cdc.vit.ac.in/"
                target="_blank"
                className="text-white-600 hover:text-gray-300 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                Training and Placement Cell
              </Link>
              <Link
                to="https://vitbhopal.ac.in/faculty/"
                target="_blank"
                className="text-white-600 hover:text-gray-300 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                Faculty in Charge
              </Link>
              <Link
                to="#"
                target="_blank"
                className="text-white-600 hover:text-gray-300 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                Tender Invitations
              </Link>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <nav className="list-none mb-10 h-full flex flex-col justify-between font-semibold text-xl">
              <Link
                to="https://vitbhopal.ac.in/studentwelfare/"
                target="_blank"
                className="text-white-600 hover:text-gray-300 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                Holidays
              </Link>
              <Link
                to="https://vitbhopal.ac.in/placements-and-training/"
                target="_blank"
                className="text-white-600 hover:text-gray-300 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                Recruitments
              </Link>
              <Link
                to="https://vitbhopal.ac.in/caltech-vit/"
                target="_blank"
                className="text-white-600 hover:text-gray-300 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                IT Infrastructure
              </Link>
              <Link
                to="#"
                target="_blank"
                className="text-white-600 hover:text-gray-300 mb-3 transition-all transform hover:translate-x-2 hover:underline"
              >
                RTI
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
