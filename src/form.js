import React from "react";

const Form = () => {
    return ( 
        <div className="flex items-center justify-center p-4 bg-gray-100 min-h-screen">
            <form id="form" className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl mb-4">RSVP Form</h3>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                        Name:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="name"
                        type="text"
                        placeholder="Your name"
                        name="from_name"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Your email"
                        name="user_email"
                    />
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
