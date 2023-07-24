import React from "react";

 
function DetalleCompra({allProducts, total, countProducts}) {

    return (
  
        <div className="mx-4 text-white lg:mx-6 mt-8 lg:w-1/2 ">  

        <div className=" bg-white shadow-lg rounded-xl overflow-hidden ">
                <div className="flex items-center justify-between px-4 py-3 bg-red-900">
                    <h1 className="text-2xl font-medium text-white dark:text-gray-200"> ( {countProducts} ) Productos en total </h1>
                    
                </div>
            <div className="p-4 text-black items-center mb-4 overflow-y-auto h-72">
                <table className="max-w-full">
                            <thead>
                                <tr>
                                    <th className="px-4 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                                    <th className="px-4 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Descripción</th>
                                    <th className="px-4 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Cantidad</th>
                                    <th className="px-4 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Precio Unitario</th>
                                </tr>
                                </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                
                {
                
                    allProducts?.map((p) => (
                                               
                            
                                <tr key={p.id}>
                                    <td className="px-4 whitespace-nowrap"><img src = {p.img} className="h-14 w-14 object-contain rounded-lg mr-4" alt="Product"/> </td>
                                    <td className="px-4 whitespace-nowrap text-center">{p.name}</td>
                                    <td className="px-4 whitespace-nowrap text-center">{p.quantity}</td>
                                    <td className="px-4 whitespace-nowrap text-center">$ {p.price}</td>
                                </tr>
                              
                    ))
                    
                }

                            </tbody>
                </table>
            </div>
                <div className="px-4 py-3 bg-red-900 text-sm font-medium capitalize">
                    <div className="flex justify-between items-center ">
                        <span className="font-bold text-lg ml-8">Total:</span>
                        <span className="font-bold text-lg mr-8">$ {total}</span>
                    </div>
            
        </div>

       
        </div>

        </div> 
  );
}

export default DetalleCompra;
