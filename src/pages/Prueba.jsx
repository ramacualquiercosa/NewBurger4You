import React from "react";
import FormCompra from "../components/FormCompra";

function Prueba() {

  
return (   

    <>
    <div class="p-4 max-w-xl mx-auto mt-16">
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="flex items-center justify-between px-4 py-3 bg-gray-200">
            <h1 class="text-lg font-bold">Shopping Cart</h1>
            <span class="text-gray-600">(3 items)</span>
        </div>
        <div class="p-4">
            <div class="flex items-center mb-4">
                <img class="h-16 w-16 object-contain rounded-lg mr-4" src="https://picsum.photos/200/200"
                    alt="Product"> </img>
                <div class="flex-1">
                    <h2 class="text-lg font-bold">Product Title</h2>
                    <span class="text-gray-600">$29.99</span>
                </div>
                <button class="text-gray-600 hover:text-red-500">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M19 13H5v-2h14v2z" />
                    </svg>
                </button>
            </div>
            <div class="flex items-center mb-4">
                <img class="h-16 w-16 object-contain rounded-lg mr-4" src="https://picsum.photos/200/200"
                    alt="Product"> </img>
                <div class="flex-1">
                    <h2 class="text-lg font-bold">Product Title</h2>
                    <span class="text-gray-600">$19.99</span>
                </div>
                <button class="text-gray-600 hover:text-red-500">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M19 13H5v-2h14v2z" />
                    </svg>
                </button>
            </div>
            <div class="flex items-center">
                <img class="h-16 w-16 object-contain rounded-lg mr-4" src="https://picsum.photos/200/200"
                    alt="Product"> </img>
                <div class="flex-1">
                    <h2 class="text-lg font-bold">Product Title</h2>
                    <span class="text-gray-600">$24.99</span>
                </div>
                <button class="text-gray-600 hover:text-red-500">
                    <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                        <path d="M19 13H5v-2h14v2z" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="px-4 py-3 bg-gray-200">
            <div class="flex justify-between items-center">
                <span class="font-bold text-lg">Total:</span>
                <span class="font-bold text-lg">$74.97</span>
            </div>
            <button class="block w-full mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Checkout
            </button>
        </div>
    </div>
</div>
 
</>
)

}

export default Prueba
