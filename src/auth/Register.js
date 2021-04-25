import { Link } from "react-router-dom";

const Register = () => {
   return (
      <div className="auth">
         <div className="card">
            <h2>Registrirajte se</h2>
            <form>
               <div className="input-split">
                  <div>
                     <label>Ime:</label>
                     <input className="width-100" placeholder="Unesite ime" />
                  </div>
                  <div>
                     <label>Prezime:</label>
                     <input
                        className="width-100"
                        placeholder="Unesite prezime"
                     />
                  </div>
               </div>
               <div>
                  <label>Email:</label>
                  <input className="width-100" placeholder="Unesite email" />
               </div>
               <div>
                  <label>Datum rodjenja:</label>
                  <input
                     className="width-100"
                     placeholder="Vaš datum rođenja:"
                  />
               </div>
               <div className="input-split">
                  <div>
                     <label>Lozinka:</label>
                     <input
                        className="width-100"
                        type="password"
                        placeholder="Unesite lozinku"
                     />
                  </div>
                  <div>
                     <label>Ponovljena lozinka:</label>
                     <input
                        className="width-100"
                        type="password"
                        placeholder="Ponovite lozinku"
                     />
                  </div>
               </div>

               <div className="auth-buttons">
                  <Link to="/auth/login">Prijavite se</Link>
                  <input
                     className="submit-button"
                     type="submit"
                     value="Registracija"
                  />
               </div>
            </form>
         </div>
      </div>
   );
};

export default Register;
