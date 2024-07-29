import React from 'react';
import chateau from './img/chateau.jpg';
import terraBotanica from './img/terra-botanica.jpg';
import musee from './img/musee.jpg';
import balade from './img/balade.webp';
import jardinDesPlantes from './img/jardin-des-plantes.jpg';
import cathedrale from './img/cathedrale.jpg';

const Activities = () => {
  return (
    <section className="py-5" id="activities">
      <div className="container mx-auto px-4">
        <h1 className="font-esthetic text-center py-3 text-brown-dark" data-aos="fade-down" data-aos-duration="1500" style={{ fontSize: '2rem' }}>Activités à Angers</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="col-span-1 mb-8" data-aos="fade-up" data-aos-duration="1500">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img src={chateau} className="w-full h-64 object-cover" alt="Château d'Angers" />
              <div className="bg-gray-800 p-4 text-white">
                <h5 className="text-xl font-bold mb-2">Château d'Angers</h5>
                <p className="text-gray-300">Explorez le magnifique château médiéval d'Angers, connu pour ses impressionnantes fortifications et la Tapisserie de l'Apocalypse.</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 mb-8 transform -translate-y-4" data-aos="fade-up" data-aos-duration="1500">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img src={terraBotanica} className="w-full h-64 object-cover" alt="Terra Botanica" />
              <div className="bg-gray-800 p-4 text-white">
                <h5 className="text-xl font-bold mb-2">Terra Botanica</h5>
                <p className="text-gray-300">Visitez ce parc à thème unique dédié aux plantes, offrant des jardins magnifiques, des attractions interactives et des spectacles.</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 mb-8" data-aos="fade-up" data-aos-duration="1500">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img src={musee} className="w-full h-64 object-cover" alt="Musée des Beaux-Arts" />
              <div className="bg-gray-800 p-4 text-white">
                <h5 className="text-xl font-bold mb-2">Musée des Beaux-Arts</h5>
                <p className="text-gray-300">Découvrez une riche collection d'art allant de l'archéologie à l'art moderne dans ce musée situé dans un superbe bâtiment historique.</p>
              </div>
            </div>
          </div>
          <div className="col-span-1" data-aos="fade-up" data-aos-duration="1500">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img src={balade} className="w-full h-64 object-cover" alt="Balade sur la Maine" />
              <div className="bg-gray-800 p-4 text-white">
                <h5 className="text-xl font-bold mb-2">Balade sur la Maine</h5>
                <p className="text-gray-300">Profitez d'une paisible balade en bateau sur la rivière Maine, offrant des vues pittoresques de la ville et de ses environs.</p>
              </div>
            </div>
          </div>
          <div className="col-span-1 transform -translate-y-4" data-aos="fade-up" data-aos-duration="1500">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img src={jardinDesPlantes} className="w-full h-64 object-cover" alt="Jardin des Plantes" />
              <div className="bg-gray-800 p-4 text-white">
                <h5 className="text-xl font-bold mb-2">Jardin des Plantes</h5>
                <p className="text-gray-300">Promenez-vous dans ce jardin botanique paisible, riche en diversité végétale et offrant un espace de détente en plein cœur de la ville.</p>
              </div>
            </div>
          </div>
          <div className="col-span-1" data-aos="fade-up" data-aos-duration="1500">
            <div className="rounded-lg shadow-lg overflow-hidden">
              <img src={cathedrale} className="w-full h-64 object-cover" alt="Cathédrale Saint-Maurice" />
              <div className="bg-gray-800 p-4 text-white">
                <h5 className="text-xl font-bold mb-2">Cathédrale Saint-Maurice</h5>
                <p className="text-gray-300">Visitez cette cathédrale gothique emblématique, connue pour ses magnifiques vitraux et son architecture impressionnante.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;
