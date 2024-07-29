import cop from "./img/b8054ff5eac6_normal.jpg";

const Home = ({ onRSVPClick }) => {
    return (
        <div className="flex items-center justify-center p-4 bg-gray-100 min-h-screen">
            <div className="flex flex-col sm:flex-row sm:w-[1100px] sm:h-[498px] w-full h-auto">
                <div className="w-full sm:w-[550px] h-[300px] sm:h-full flex-shrink-0">
                    <img src={cop} alt="Ceremony" className="w-full h-full object-cover rounded-lg shadow-lg" />
                </div>
                <div className="w-full sm:w-[550px] h-auto sm:h-full bg-white p-6 rounded-lg shadow-lg flex flex-col justify-center items-center">
                    <h3 className="text-4xl text-gray-800 mb-4 ">La cérémonie</h3>
                    <p className="text-gray-600 mb-2">26 octobre 2024</p>
                    <h4 className="text-2xl text-gray-800 mb-2">20:00</h4>
                    <p className="text-gray-600 mb-4">Route d'Ifrane - Mejjat, Meknès, Maroc</p>
                    <p className="text-primary mb-2">
                        <a href="/">Voir la carte</a>
                    </p>
                    <p className="text-primary mb-4">
                        <a href="/">Voir la carte</a>
                    </p>
                    <button className="bg-gray-100 text-primary w-2/3 py-2 px-4 rounded hover:bg-primary hover:text-white" onClick={onRSVPClick}>
                        RSVP
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
