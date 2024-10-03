import { Link } from "react-router-dom";
import Header from "./Header/Header.jsx";
import CardContent from "./CardContent/CardContent.jsx";
function HomePage() {
  return (
    <div className="text-center p-6">
      <Header />
      <CardContent />
      {/* <Link to="/create-order">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Create Order
        </button>
      </Link> */}
    </div>
  );
}

export default HomePage;
