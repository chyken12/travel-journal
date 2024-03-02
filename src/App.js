
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";


function App() {
  return (
    <div className="container">
      <img src="../images/picture1.jpg" className="image" />
     <div className="content">
      <h5>
         <FontAwesomeIcon icon={faLocationDot} className="falacation"/>JAPAN 
         <a href="#" className="header-link">View on google</a>
         </h5>
      <h1>River Fuji</h1>
      <p><strong>12 Jan,2024 - 24 Jan,2024</strong> </p>
      <p>
      Japan is an island country in East Asia. It is in the northwest Pacific Ocean and is bordered on the west by the Sea of Japan, extending from the Sea of Okhotsk in the north toward the East China Sea, Philippine Sea, and Taiwan in
      </p>
      

     </div>
    </div>
  );
}

export default App;
