import React from 'react';
import Countdown from 'react-countdown';

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#f8f9fa', // gris clair
    borderRadius: '9999px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 10px',
  },
  section: {
    fontSize: '1.1rem', // Agrandir la taille du texte
  },
  link: {
    color: '#8B4513', // Marron
    textDecoration: 'none',
  },
  bold: {
    fontWeight: 'bold',
  },
};

const renderer = ({ days, hours, minutes, seconds }) => {
  return (
    <div style={styles.container}>
      <div style={styles.item}>
        <h2>{days}</h2>
        <span>jours</span>
      </div>
      <div style={styles.item}>
        <h2>{hours}</h2>
        <span>heures</span>
      </div>
      <div style={styles.item}>
        <h2>{minutes}</h2>
        <span>minutes</span>
      </div>
      <div style={styles.item}>
        <h2>{seconds}</h2>
        <span>secondes</span>
      </div>
    </div>
  );
};

const DateComponent = () => {
  return (
    <div className="container mx-auto px-4 text-center">
      <h1 className="font-esthetic py-3" style={{ fontSize: '2rem' }}>Compte à rebours</h1>
      <Countdown date={new Date('2024-10-26T16:00:00')} renderer={renderer} />
      <section className="py-5" id="deplacement">
        <div className="container mx-auto px-4">
          <h1 className="font-esthetic text-center py-3" style={{ fontSize: '2rem' }}>Comment se déplacer ?</h1>
          <div className="text-left" style={styles.section}>
            <h2>Accès à Angers, France</h2>
            <p style={styles.bold}>Avion :</p>
            <ul>
              <li>
                <strong>Aéroport de Nantes Atlantique</strong> <a href="https://www.nantes.aeroport.fr/" style={styles.link}>https://www.nantes.aeroport.fr/</a>
                <br />
                L'aéroport le plus proche est situé à environ 1 heure d'Angers. Des navettes et des trains relient Nantes à Angers.
              </li>
              <li>
                <strong>Aéroport de Paris Charles de Gaulle</strong> <a href="https://www.parisaeroport.fr/" style={styles.link}>https://www.parisaeroport.fr/</a>
                <br />
                Aéroport situé à environ 3 heures en TGV d'Angers.
              </li>
            </ul>
            <p style={styles.bold}>Train :</p>
            <ul>
              <li>La SNCF relie les grandes villes de France, y compris des TGV directs de Paris à Angers.</li>
            </ul>
            <p style={styles.bold}>Bus :</p>
            <ul>
              <li>Compagnies privées comme FlixBus et Ouibus offrent des trajets interurbains vers Angers.</li>
            </ul>
            <p style={styles.bold}>Location de voiture :</p>
            <ul>
              <li>Pour plus de liberté, il y a des agences de location de voitures dans tous les aéroports et gares.</li>
            </ul>
            <p style={styles.bold}>Taxi :</p>
            <ul>
              <li>Pour les déplacements courts en ville, vous pouvez utiliser les taxis disponibles à Angers.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DateComponent;
