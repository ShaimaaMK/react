import React from "react";
import { useState } from "react";

const Form = () => {
    const [attendance, setAttendance] = useState('');
    const [attendanceGuest, setAttendanceGuest] = useState('');
    // const [guest_name, setGuestName] = useState('');
    // const [guest_fam_name, setGuestFamName] = useState('');
    const [food, setFood] = useState(false);
    const [foodText, setFoodText] = useState('');
    const [count, setCount] = useState(0);

    const handleRadioChange = (event) => {
        setAttendance(event.target.value);
    };

    const handleRadioChangeFood = (event) => {
        setFood(event.target.value === 'yes');
    };

    const handleFoodTextChange = (event) => {
        setFoodText(event.target.value);
    };
    const handleGuestChangeYes = (event) => {
            setAttendanceGuest('yes there is one i would like to invite ')
    };

    const handleGuestChangeNo = (event) => {
            setAttendanceGuest('no im coming alone')
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

    return (
        <div className="flex items-center justify-center p-4 bg-gray-100 ">
            
            <form id="form" className="bg-white p-6 rounded-lg shadow-lg md:w-cc">
                <h3 className="text-2xl mb-4">RSVP Form</h3>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Prénom *
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                        <div className="flex justify-between">
                            <span className="p-2">Oui</span>
                            <input
                                type="radio"
                                name="attendance"
                                value="Oui"
                                className="w-4"
                                onChange={handleRadioChange}
                            />
                        </div>
                        <div className="flex justify-between">
                            <span className="p-2">Non</span>
                            <input
                                type="radio"
                                name="attendance"
                                value="Non"
                                className="w-4"
                                onChange={handleRadioChange}
                            />
                        </div>
                        <div className="flex justify-between">
                            <span className="w-s1 lg:w-auto p-2">Je ne suis pas encore sûr(e).</span>
                            <input
                                type="radio"
                                name="attendance"
                                value="Je ne suis pas encore sûr."
                                className="w-4"
                                onChange={handleRadioChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="food">
                        Avez-vous des restrictions alimentaires ? (végétarien, végétalien, allergies, etc.)
                    </label>
                    <div className="flex justify-between">
                        <span className="p-2">Oui</span>
                        <input
                            type="radio"
                            name="food"
                            value="yes"
                            className="w-4"
                            onChange={handleRadioChangeFood}
                        />
                    </div>
                    <div className="flex justify-between">
                        <span className="p-2">Non</span>
                        <input
                            type="radio"
                            name="food"
                            value="no"
                            className="w-4"
                            onChange={handleRadioChangeFood}
                        />
                    </div>
                    {food && (
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="foodText">
                                Veuillez spécifier vos restrictions alimentaires :
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="foodText"
                                type="text"
                                placeholder="Restrictions alimentaires"
                                value={foodText}
                                name="foodIs"
                                onChange={handleFoodTextChange}
                            />
                        </div>
                    )}
                    <div className="mt-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guestCount">
                            Voulez-vous amener un invité ?
                        </label>
                        <div className="flex items-center">
                            <button
                                type="button"
                                className="bg-gray-200 p-2 rounded"
                                onClick={handleDecrement}
                                onChange={handleGuestChangeNo}
                            >
                                -
                            </button>
                            <span className="mx-4">{count}</span>
                            <button
                                type="button"
                                className="bg-gray-200 p-2 rounded"
                                onClick={handleIncrement}
                                onChange={handleGuestChangeYes}
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
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="guest_name"
                                    type="text"
                                    placeholder="Prénom"
                                    name="guest_name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="guest_fam_name">
                                    Nom de famille de l'invité *
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="guest_fam_name"
                                    type="text"
                                    placeholder="Nom de famille"
                                    name="guest_fam_name"
                                />
                            </div>
                        </div>
                    )}
                </div>
                <button
                    className="bg-gray-100 text-primary w-full py-2 px-4 rounded hover:bg-primary hover:text-white"
                    type="submit"
                    id="button"
                >
                    Send Email
                </button>
            </form>
        </div>
    );
}

export default Form;
