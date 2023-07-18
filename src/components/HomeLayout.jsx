import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function HomeLayout() {
  return (
    <>
    <div className="h-screen px-16 bg-black flex items-center pt-16 " data-aos="zoom-in">
	<section className="w-full bg-cover bg-center py-32 rounded-lg shadow-inner" style={{ backgroundImage: `url('https://www.infobae.com/new-resizer/7SRvZWr_kQpTejEGhUeMhWZvtmo=/768x432/filters:format(webp):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/POXG5OOLHNFO3CY2E3I3ZFDMDA')` }}>
		<div className="container mx-auto text-center text-white">
			<h1 className="text-5xl font-medium mb-6">Bienvenido a Burger4U</h1>
			<p className="text-xl mb-12 px-16">¡Bienvenido a nuestra hamburguesería, donde los sabores auténticos y la pasión por la comida se combinan para ofrecerte una experiencia inigualable! Desde el primer bocado hasta el último, te garantizamos que cada hamburguesa te llevará a un viaje de sabor sin igual. Nuestro objetivo es deleitar a tus sentidos y hacer de cada visita una ocasión especial. ¡Únete a nosotros y descubre el arte de una hamburguesa verdaderamente excepcional!</p>
			<a href="/Productos" className="mt-6 w-full transform rounded-md bg-gray-800 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">Disfruta de nuestros productos</a>
		</div>
	</section>
</div>
    </>
  )
}
export default HomeLayout