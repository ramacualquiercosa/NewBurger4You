import React from 'react'
import {
  BookmarkIcon,
  MapPinIcon,
  ShieldCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Premio a mejor hamburguesa del país",
    description: "¡Estamos orgullosos de anunciar que hemos sido galardonados con el premio a la mejor hamburguesa del país! Este reconocimiento no solo es un testimonio de nuestro arduo trabajo, sino también del aprecio y lealtad de nuestros clientes. Cada hamburguesa que servimos es una sinfonía de sabores, un equilibrio perfecto entre ingredientes frescos y sazones exquisitos. Nos sentimos honrados de recibir este premio, y nos impulsa a seguir innovando y sorprendiendo a nuestros comensales con nuevas creaciones. ¡Gracias a todos nuestros apasionados clientes por hacer posible este logro!",
    icon: BookmarkIcon,
  },
  {
    name: "40000 clientes nos eligen cada año",
    description:"Agradecemos profundamente a los más de 40,000 clientes que nos eligen año tras año. Vuestra preferencia y fidelidad son el motor que nos impulsa a seguir mejorando y superando nuestras propias expectativas. Cada sonrisa satisfecha después de probar nuestras hamburguesas nos inspira a continuar ofreciendo un servicio excepcional y platos que deleiten vuestros sentidos. Sin vosotros, nuestros fieles comensales, no seríamos la hamburguesería que somos hoy. ¡Gracias por ser parte de nuestra historia!",
    icon:  UserGroupIcon,
  },
  {
    name: "Seleccionamos materia prima de mejor calidad",
    description: "En nuestra hamburguesería, creemos que la clave para ofrecer hamburguesas excepcionales reside en la calidad de los ingredientes. Trabajamos con dedicados proveedores y agricultores que comparten nuestra pasión por la excelencia culinaria. Cada ingrediente, desde la jugosa carne hasta los frescos vegetales y los panes suaves, es cuidadosamente seleccionado para asegurarnos de que cada hamburguesa sea una deliciosa obra de arte. Apostamos por la frescura, la sostenibilidad y la autenticidad en cada paso de nuestra cocina. Sabemos que, al ofrecer lo mejor, cada bocado te llevará a una experiencia de sabor incomparable.",
    icon:  ShieldCheckIcon,
  },
  {
    name: "Nos ubicamos en Buenos Aires, Argentina",
    description:"Nos encontramos en el corazón de Buenos Aires, una ciudad vibrante y apasionante, donde la cultura culinaria es tan diversa como su gente. Nuestra ubicación privilegiada nos permite capturar la esencia de esta ciudad y transmitirla a través de cada hamburguesa que servimos. Si visitas Buenos Aires, no puedes perderte la oportunidad de disfrutar de nuestras especialidades en un ambiente acogedor y lleno de sabores. Nos encontramos en Salta Nº 4632, C.A.B.A., ¡esperamos con ansias tu visita!",
    icon: MapPinIcon,
  },
];

function Nosotros() {
  return (
    <div className="bg-dark py-24 sm:py-32" data-aos="zoom-in">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="mb-4 text-3xl tracking-tight  text-center  text-white ">
            Burger 4U
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-2xl">
            Más de 40 años haciendo hamburguesas
          </p>
          <p className="mt-6 text-lg leading-8 text-white text-center">
          Bienvenidos a nuestra hamburguesería, un lugar donde la tradición y la pasión por la comida se fusionan para ofrecerte una experiencia única. Desde nuestros humildes comienzos hace más de 40 años, nos hemos dedicado a perfeccionar cada detalle de nuestras hamburguesas, preservando el auténtico sabor que nos ha caracterizado a lo largo del tiempo. Nuestro legado culinario es el resultado de décadas de dedicación y amor por la gastronomía, y hoy, seguimos comprometidos en brindarte la mejor hamburguesa que puedas encontrar.</p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-white ">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-900">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-white text-justify">
                  {feature.description}
                </dd>
              </div>
         
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Nosotros