import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function LayoutInicial() {
  return (
    <>
 <div className="max-w-2xl mx-auto  bg-black px-4  sm:px-6  lg:max-w-7xl lg:px-8 flex items-center " data-aos="zoom-in">
	<section className="bg-cover bg-center py-32 w-full bg-black" >
		<div className="container mx-auto text-left text-white">
			<div className="flex items-center">
				<div className="w-1/2">
					<h1 className="text-5xl font-medium mb-6">Sobre Nosotros</h1>
					<p className="text-xl mb-12">En nuestra hamburguesería, la historia de sabor y calidad se entrelaza con el compromiso de crear una experiencia inolvidable para nuestros clientes. Desde nuestros humildes comienzos, nos hemos esforzado por perfeccionar cada hamburguesa, fusionando técnicas tradicionales con un toque contemporáneo. Nuestra pasión por la comida nos ha llevado a explorar los sabores más auténticos y a seleccionar cuidadosamente los ingredientes más frescos. Con un equipo dedicado y amante de la cocina, cada hamburguesa es una expresión de nuestra devoción por el arte culinario. ¡Esperamos que cada visita te haga sentir como en casa y que disfrutes cada bocado tanto como nosotros disfrutamos preparándolo para ti!</p>
					<a href="/Nosotros" className="mt-6 w-full transform rounded-md bg-gray-800 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">Ver Mas</a>
				</div>
				<div className="w-1/2 pl-16">
					<img src="https://www.soho.co/resizer/0RlVd-yVs0AEyR4yvOQHxYaVzIU=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/2Q6ICXSHNJAZ3OK6DA6UHTGVUQ.jpg" className="h-64 w-full object-cover rounded-xl" alt=""/>
      </div>
				</div>
			</div>
	</section>
</div>
    </>
  );
}

export default LayoutInicial;
