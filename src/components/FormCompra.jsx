import React, {  useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

AOS.init();

 function FormCompra({allProducts, postCart, total, clearCart}) {

    const [nombre, setNombre]=useState("");
    const [direccion, setDireccion]=useState("");
    

     async function Comprar(){

        if(nombre.trim() === "" || direccion.trim() === "" || allProducts.length === 0 ){
            alert("faltan datos");
            return;
        }

        let objCompraEnviar = {
            "address_buyer": direccion,
            "date_buy":new Date().toString(),
            "name_buyer": nombre,
            "product_list" : allProducts,
            "total":total            
        };

         let r = await postCart(objCompraEnviar);
         console.log(r);  

      

         await Alert();

         clearCart();

         window.location.href = "/home"
       
    }

    async function Alert() {
        try {
          await Swal.fire({
            position: 'center',
            icon: 'success',
            text: 'Tu compra ha sido enviada',
            showConfirmButton: false,
            timer: 2000,
            type: "success"            
          })         
        } catch (error) {
          console.error(error);
        }
      }
 

  return (
    
    <div className=" text-white lg:mx-6 mt-8 lg:w-1/2">

            <div className="mx-4 overflow-hidden rounded-xl bg-red-900 px-8 py-10 shadow-2xl dark:bg-gray-900 lg:max-w-xl">
                <h1 className="text-2xl font-medium text-white dark:text-gray-200">
                  Confirmar tu pedido
                </h1>

              
                  <div className="flex-1">
                    <label className="mb-2 block text-sm text-white dark:text-gray-200">
                      Nombre
                    </label>
                    <input
                    value={nombre} onChange={e => setNombre(e.target.value)}
                      type="text"
                      required
                      placeholder="Juan Pérez"
                      className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </div>

                  <div className="mt-6 flex-1">
                    <label className="mb-2 block text-sm text-white dark:text-gray-200">
                      Dirección
                    </label>
                    <input
                     value={direccion} onChange={e => setDireccion(e.target.value)}
                      type="text"
                      required
                      placeholder="Calle Los Nogales 4444"
                      className="mt-2 block w-full rounded-md border border-gray-200 bg-white px-5 py-3 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                    />
                  </div>

               

                  <button
                    type="submit"
                    className="mt-6 w-full transform rounded-md bg-gray-800 px-6 py-3 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-300 hover:bg-gray-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                   onClick={()=>Comprar()}
                  >
                    Finalizar Compra
                  </button>
               
              </div>
      
    </div>
  );
}

export default FormCompra;
