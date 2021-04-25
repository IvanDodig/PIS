const SingleCar = () => {
   return (
      <div className="single-car-content">
         <div className="single-car card">
            <div className="col-1">
               <div className="image-div">
                  <img src="car.jpg" alt="auto" />
               </div>

               <form className="reservation-form">
                  <input />
                  <input />
                  <input className="submit-button" type="submit" />
               </form>
            </div>
         </div>
         <div className="single-car card">
            <div className="col-1 ">
               <div className="about">
                  <h2>OPIS VOZILA</h2>
                  <div className="about-grid">
                     <div className="about-col">
                        <span>Marka vozila:</span>
                        <h4>Audi</h4>
                     </div>
                     <div className="about-col">
                        <span>Model vozila:</span>
                        <h4>A4</h4>
                     </div>
                     <div className="about-col">
                        <span>Godina proizvodnje:</span>
                        <h4>2015</h4>
                     </div>
                     <div className="about-col">
                        <span>Vrsta karoserije:</span>
                        <h4>Crossover</h4>
                     </div>
                     <div className="about-col">
                        <span>Vrsta mjenjača:</span>
                        <h4>Ručni</h4>
                     </div>

                     <div className="about-col">
                        <span>Tip goriva:</span>
                        <h4>Diesel</h4>
                     </div>
                     <div className="about-col">
                        <span>Snaga motora:</span>
                        <h4>120ks</h4>
                     </div>
                     <div className="about-col">
                        <span>Broj vrata:</span>
                        <h4>4/5</h4>
                     </div>
                     <div className="about-col">
                        <span>Broj sjedala:</span>
                        <h4>5</h4>
                     </div>
                     <div className="about-col">
                        <span>Lokacija:</span>
                        <h4>Mostar</h4>
                     </div>
                  </div>
               </div>
               <div className="comments">
                  <h3>Komentari</h3>
                  <div className="comment"></div>
                  <div className="comment"></div>
                  <div className="comment"></div>
                  <div className="comment"></div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SingleCar;
