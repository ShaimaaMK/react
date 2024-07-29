import './styles.css';
import Home from "./home.js";
import Form from "./form.js";
import ExtraInfo from "./extraInfo.js";
import { useState, useEffect } from "react";
import emailjs from 'emailjs-com';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleRSVPClick = () => {
    setShowForm(true);
  };

  useEffect(() => {
    if (showForm) {
      emailjs.init("txTwiW34PtzEWDzFB");

      const form = document.getElementById('form');
      const btn = document.getElementById('button');

      const handleSubmit = (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const famName = document.getElementById('fam_name').value;
        const attendance = document.querySelector('input[name="attendance"]:checked') ? document.querySelector('input[name="attendance"]:checked').value : '';

        if (!name || !famName || !attendance) {
          alert('Please fill out the required fields.');
          btn.value = 'Send Email';
          return;
        }

        btn.value = 'Sending...';

        const serviceID = 'service_f2pny2z';
        const templateID = 'template_v0zxcft';

        emailjs.sendForm(serviceID, templateID, form)
          .then(() => {
            btn.value = 'Send Email';
            setShowForm(false);
            setShowInfo(true);
          }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
          });
      };

      form.addEventListener('submit', handleSubmit);

      return () => {
        form.removeEventListener('submit', handleSubmit);
      };
    }
  }, [showForm]);

  return (
    <div className="flex justify-center items-center h-screen font-cursive">
      {!showForm && !showInfo && <Home onRSVPClick={handleRSVPClick} className="bg-slate-500 max-w-96" />}
      {showForm && <Form />}
      {showInfo && <ExtraInfo />}
    </div>
  );
}

export default App;
