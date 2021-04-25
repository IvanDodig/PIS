import "../../styles/components/pagination.css";

const Pagination = () => {
   return (
      <div className="pagination">
         <div>{"<"}</div>
         <div>1</div>

         <div className="active">7</div>
         <div>18</div>
         <div>{">"}</div>
      </div>
   );
};

export default Pagination;
