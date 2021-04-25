import CarCard from "./CarCard";
import "../styles/cars/all-cars.css";
import Pagination from "../components/pagination/Pagination";
import FilterForm from "./FilterForm";

const AllCars = () => {
   return (
      <>
         <FilterForm />
         <div className="all-cars">
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
         </div>
         <Pagination />
      </>
   );
};

export default AllCars;
