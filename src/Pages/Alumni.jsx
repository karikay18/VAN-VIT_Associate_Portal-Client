import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AlumniCard from "../Components/AlumniCard";

// Alumni Page

const Alumni = () => {
  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Navbar />
      <div
        className="flex-grow flex justify-center items-center"
        style={{ paddingTop: "96px" }} 
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-center gap-8 mb-[3rem] overflow-y-scroll no-scrollbar">
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
          <AlumniCard />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Alumni;
