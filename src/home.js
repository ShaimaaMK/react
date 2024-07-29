import { Link, useNavigate } from 'react-router-dom';
import cop from "./img/couple.jpg";

const Home = () => {
    const navigate = useNavigate();

    const handleRSVPClick = () => {
        navigate('/form');
    };

    return (
        <div className="flex items-center justify-center p-4 bg-gray-100 min-h-screen">
            <div className="flex flex-col sm:flex-row sm:w-[1100px] sm:h-[498px] w-full h-auto">
                <div className="w-full sm:w-[550px] h-[300px] sm:h-full flex-shrink-0">
                    <img src={cop} alt="Ceremony" className="w-full h-full object-cover rounded-lg shadow-lg" />
                </div>
                <div className="w-full sm:w-[550px] h-auto sm:h-full bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                    <h3 className="text-4xl text-gray-800 mb-4 ">Mariage Maria & Gilles </h3>
                    <p className="text-gray-600 mb-2">12 octobre 2024</p>
                    <h4 className="text-2xl text-gray-800 mb-2">16:00</h4>
                    <p className="text-gray-600 mb-4">adr, Anger, France</p>
                    <p className="text-primary mb-2">
                        <a href="/">Voir la carte</a>
                    </p>
                    <p className="text-primary mb-4">
                        <a href="/">Réservez la date</a>
                    </p>
                    
                    <button className="bg-gray-100 text-primary w-2/3 py-2 px-4 rounded hover:bg-primary hover:text-white" onClick={handleRSVPClick}>
                        RSVP
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
