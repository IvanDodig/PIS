import { Link } from "react-router-dom";

const Login = () => {
   return (
      <div className="auth">
         <div className="card">
            <h2>Prijavite se</h2>
            <form>
               <div>
                  <label>Email:</label>
                  <input className="width-100" placeholder="Unesite email" />
               </div>
               <div>
                  <label>Lozinka:</label>
                  <input
                     className="width-100"
                     type="password"
                     placeholder="Unesite loinku"
                  />
               </div>
               <div className="auth-buttons">
                  <Link to="/auth/register"> Registrirajte se.</Link>
                  <input
                     className="submit-button"
                     type="submit"
                     value="Prijavi se"
                  />
               </div>
            </form>
         </div>
      </div>
   );
};

export default Login;
