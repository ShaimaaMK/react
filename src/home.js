import { useNavigate } from 'react-router-dom';
import maria from "./img/maria.jpeg"; 
import benimellal from "./img/up.jpeg";

const Home = () => {
    const navigate = useNavigate();

    const handleRSVPClick = () => {
        navigate('/form');
    };

    return (
        <div className="flex items-center justify-center p-4 bg-gray-100 min-h-screen">
            <div className="flex flex-col sm:flex-row sm:w-[1100px] sm:h-[600px] w-full h-auto">
                <div className="w-full sm:w-[550px] h-[300px] sm:h-full flex-shrink-0 flex flex-col justify-center">
                    <img src={maria} alt="Maria" className="w-full h-1/2 object-cover rounded-lg shadow-lg mb-4" />
                    <img src={benimellal} alt="Benimellal" className="w-full h-1/2 object-cover rounded-lg shadow-lg" />
                </div>
                <div className="w-full sm:w-[550px] h-auto sm:h-full bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                    <h3 className="text-3xl text-gray-800 mb-4 text-center">Nous allons nous dire oui, soyez là pour en témoigner!</h3>
                    <h4 className="text-gray-600 mb-2 text-4xl font-bold">Gilles&Maria</h4>
                    <p className="text-gray-600 mb-2">12 octobre 2024</p>
                    <h4 className="text-2xl text-gray-800 mb-2">16:00</h4>
                    <p className="text-gray-600 mb-4">adr, Anger, France</p>
                    <p className="text-primary mb-2">
                        <a href="https://www.google.com/maps?q=Angers,France" target="_blank" rel="noopener noreferrer">Voir la carte</a>
                    </p>
                    <p className="text-primary mb-4">
                        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Mariage+de+Gilles+et+Maria&details=Nous+allons+nous+dire+oui,+soyez+là+pour+en+témoin!&location=Angers,+France&dates=20241012T140000Z/20241012T150000Z" target="_blank" rel="noopener noreferrer">Réservez la date</a>
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
