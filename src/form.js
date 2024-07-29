import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Form = () => {
    const [attendance, setAttendance] = useState('');
    const [food, setFood] = useState(false);
    const [foodText, setFoodText] = useState('');
    const [count, setCount] = useState(0);
    const [guestName, setGuestName] = useState('');
    const [guestFamName, setGuestFamName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleRadioChange = (event) => {
        setAttendance(event.target.value);
    };

    const handleRadioChangeFood = (event) => {
        setFood(event.target.value === 'yes');
    };

    const handleFoodTextChange = (event) => {
        setFoodText(event.target.value);
    };

    const handleIncrement = () => {
        if (count < 1) {
            setCount(count + 1);
        }
    };

    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsSubmitting(true);

        const form = event.target;
        emailjs.sendForm('service_mloo4lo', 'template_mds0cq4', form, 'jFSRPrfZUOgWblCeU')
            .then((result) => {
                console.log(result.text);
                alert('Sent!');
                setIsSubmitting(false);
            }, (error) => {
                console.log(error.text);
                alert('Failed: ' + JSON.stringify(error));
                setIsSubmitting(false);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form id="form" className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl" onSubmit={handleSubmit}>
                <h3 className="text-2xl mb-4">RSVP Form</h3>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Prénom *
                    </label>
                    <input
                        className="shadow appearance-none border border-yellow-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-700"
                        id="name"
                        type="text"
                        placeholder="Prénom"
                        name="name"
                        autoComplete="off"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fam_name">
                        Nom de famille *
                    </label>
                    <input
                        className="shadow appearance-none border border-yellow-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-700"
                        id="fam_name"
                        type="text"
                        placeholder="Nom de famille"
                        name="fam_name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="attendance">
                        Serez-vous présent ?
                    </label>
                    <div className="flex flex-col">
                        <div className="flex justify-between items-center">
                            <span className="p-2">Oui</span>
                            <input
                                type="radio"
                                name="attendance"
                                value="Oui"
                                className="form-radio text-yellow-600 focus:ring-yellow-600 shadow-sm focus:shadow-outline focus:border-yellow-700"
                                onChange={handleRadioChange}
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="p-2">Non</span>
                            <input
                                type="radio"
                                name="attendance"
                                value="Non"
                                className="form-radio text-yellow-600 focus:ring-yellow-600 shadow-sm focus:shadow-outline focus:border-yellow-700"
                                onChange={handleRadioChange}
                            />
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="w-s1 lg:w-auto p-2">Je ne suis pas encore sûr(e).</span>
                            <input
                                type="radio"
                                name="attendance"
                                value="Je ne suis pas encore sûr."
                                className="form-radio text-yellow-600 focus:ring-yellow-600 shadow-sm focus:shadow-outline focus:border-yellow-700"
                                onChange={handleRadioChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="food">
                        Avez-vous des restrictions alimentaires ? (végétarien, végétalien, allergies, etc.)
                    </label>
                    <div className="flex justify-between items-center">
                        <span className="p-2">Oui</span>
                        <input
                            type="radio"
                            name="food"
                            value="yes"
                            className="form-radio text-yellow-600 focus:ring-yellow-600 shadow-sm focus:shadow-outline focus:border-yellow-700"
                            onChange={handleRadioChangeFood}
                        />
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="p-2">Non</span>
                        <input
                            type="radio"
                            name="food"
                            value="no"
                            className="form-radio text-yellow-600 focus:ring-yellow-600 shadow-sm focus:shadow-outline focus:border-yellow-700"
                            onChange={handleRadioChangeFood}
                        />
                    </div>
                    {food && (
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="foodText">
                                Veuillez spécifier vos restrictions alimentaires :
                            </label>
                            <input
                                className="shadow appearance-none border border-yellow-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-700"
                                id="foodText"
                                type="text"
                                placeholder="Restrictions alimentaires"
                                value={foodText}
                                name="foodText"
                                onChange={handleFoodTextChange}
                            />
                        </div>
                    )}
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guestCount">
                        Voulez-vous amener un invité ?
                    </label>
                    <div className="flex items-center">
                        <button
                            type="button"
                            className="bg-gray-200 p-2 rounded border border-yellow-600 shadow-sm focus:shadow-outline focus:border-yellow-700"
                            onClick={handleDecrement}
                        >
                            -
                        </button>
                        <span className="mx-4">{count}</span>
                        <button
                            type="button"
                            className="bg-gray-200 p-2 rounded border border-yellow-600 shadow-sm focus:shadow-outline focus:border-yellow-700"
                            onClick={handleIncrement}
                        >
                            +
                        </button>
                    </div>
                </div>
                {count === 1 && (
                    <div className="mt-4">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guest_name">
                                Prénom de l'invité *
                            </label>
                            <input
                                className="shadow appearance-none border border-yellow-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-700"
                                id="guest_name"
                                type="text"
                                placeholder="Prénom"
                                name="guest_name"
                                value={guestName}
                                onChange={(e) => setGuestName(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guest_fam_name">
                                Nom de famille de l'invité *
                            </label>
                            <input
                                className="shadow appearance-none border border-yellow-600 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-yellow-700"
                                id="guest_fam_name"
                                type="text"
                                placeholder="Nom de famille"
                                name="guest_fam_name"
                                value={guestFamName}
                                onChange={(e) => setGuestFamName(e.target.value)}
                            />
                        </div>
                    </div>
                )}
                <button
                    className="bg-yellow-600 text-white w-full py-2 px-4 rounded hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-700 focus:ring-opacity-50"
                    type="submit"
                    id="button"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Soumettre'}
                </button>
            </form>
        </div>
    );
};

export default Form;
