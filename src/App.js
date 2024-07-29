import './styles.css';
import Home from "./home.js";
import Form from "./form.js";
import {useState, useEffect} from "react";
import emailjs from 'emailjs-com';

function App() {
  const [showForm, setShowForm] = useState(false);

  const handleRSVPClick = () => {
    setShowForm(true);
  };

  useEffect(() => {
    if (showForm) {
      emailjs.init("txTwiW34PtzEWDzFB");

      const form = document.getElementById('form');
      const btn = document.getElementById('button');

      form.addEventListener('submit', function(event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_f2pny2z';
        const templateID = 'template_v0zxcft';

        emailjs.sendForm(serviceID, templateID, this)
          .then(() => {
            btn.value = 'Send Email';
            alert('Sent!');
            setShowForm(false)
          }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
          });
      });

      return () => {
        form.removeEventListener('submit', () => {});
      };
    }
  }, [showForm]);

  return (
    <div className="flex justify-center items-center h-screen font-cursive">
      {showForm ? <Form /> : <Home onRSVPClick={handleRSVPClick} className="bg-slate-500 max-w-96"/>}
    </div>
  );
}

export default App;
