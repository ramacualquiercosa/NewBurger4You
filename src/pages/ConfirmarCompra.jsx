import React from "react";
import FormCompra from "../components/FormCompra";
import DetalleCompra from "../components/DetalleCompra";

function ConfirmarCompra ({allProducts, postCart, total, countProducts, clearCart}) {

  
return (   

    <div>
          <div className="bg-dark py-24 sm:py-32" data-aos="zoom-in" hidden={countProducts === 0}>
      
              <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="mb-4 text-3xl tracking-tight  text-center  text-white ">
                    Detalle de la Compra
                    </h2>
                    
              </div>

          <div className="container lg:flex mx-auto">
              
              <DetalleCompra allProducts={allProducts} postCart={postCart} total={total} 
                clearCart={clearCart} countProducts={countProducts}></DetalleCompra>
              <FormCompra allProducts={allProducts} postCart={postCart} total={total} 
                clearCart={clearCart}></FormCompra>
                
          </div>
          </div>
    
          <div className="bg-dark py-24 sm:py-32" data-aos="zoom-in" hidden={ !(countProducts === 0) }>
              <div className="mx-auto max-w-7xl px-6 lg:px-8" >
                  <div className="mx-auto max-w-2xl lg:text-center">
                      <h2 className="mb-4 text-3xl tracking-tight  text-center  text-white "> El carrito está vacío </h2>
                 </div>
                  <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                  </div>
              </div>
          </div>



    </div>
)} 

export default ConfirmarCompra



//   <div>
//     <div className="bg-dark py-24 sm:py-32" data-aos="zoom-in" hidden={allProducts.length === 0}>
//       <div className="mx-auto max-w-7xl px-6 lg:px-8" >
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <h2 className="mb-4 text-3xl tracking-tight  text-center  text-white ">
//             Detalle ({countProducts} productos en total)
//           </h2>
          
//         </div>
//         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
//           <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          
//                   {allProducts?.map((p) => (
//                   <div  className="text-white relative pl-16">
//                     {p.name} - {p.price} - cant: {p.quantity} --- subtotal: {p.price*p.quantity}
//                   </div>
            
//                 ))} 
//           </dl>
//         </div>
//       </div>
//       <div  className="text-white relative pl-16">TOTAL : {total}</div>
//       <FormCompra allProducts={allProducts} postCart={postCart} total={total} 
//       clearCart={clearCart}></FormCompra>
//   </div>

//   <div className="bg-dark py-24 sm:py-32" data-aos="zoom-in" hidden={ !(allProducts.length === 0) }>
//       <div className="mx-auto max-w-7xl px-6 lg:px-8" >
//         <div className="mx-auto max-w-2xl lg:text-center">
//           <h2 className="mb-4 text-3xl tracking-tight  text-center  text-white ">
//            El carrito está vacío
//           </h2>
          
//         </div>
//         <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
//           <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          
//           </dl>
//         </div>
//       </div>      
//   </div>
//  </div>