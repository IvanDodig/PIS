import { Link } from "react-router-dom";

const CarCard = () => {
   return (
      <div className="car-card">
         <Link to="/car">
            <div className="image-div">
               <img src="car.jpg" alt="auto" />
            </div>
         </Link>
         <div className="content">
            <h3>MARKA VOZILA</h3>
         </div>
      </div>
   );
};

export default CarCard;
