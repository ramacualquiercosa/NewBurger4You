import "./App.css";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
//Componentes   
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
//Paginas
import Home from "./pages/Home";
import Productos from "./pages/Productos";
import Contacto from "./pages/Contacto";
import Nosotros from "./pages/Nosotros";
import { FloatingBotton } from "./components/FloatingButton";
import ConfirmarCompra from "./pages/ConfirmarCompra";


//Contextos
export const productsContext = React.createContext();



function App() {



  const [allProducts, aa] = useState(
    JSON.parse(localStorage.getItem("productsCart")) || []
       );

	const [total, setTotal] = useState(calcularTotal);
	const [countProducts, setCountProducts] = useState(contarItems);


  function clearCart () {
    aa([]);
    setTotal(0);
    setCountProducts(0);
    localStorage.removeItem('productsCart');
  };

function contarItems(){
  let itemsCarrito = JSON.parse(localStorage.getItem("productsCart")) || [];
  let tot = 0;
  for(let i of itemsCarrito){
    tot += i.quantity;
  } 
  return tot;
}

function calcularTotal(){
  let itemsCarrito = JSON.parse(localStorage.getItem("productsCart")) || [];
  let tot = 0;
  for(let i of itemsCarrito){
    tot += i.quantity * i.price;
  } 
  return tot;
}


function setAllProducts(products) {

  localStorage.setItem('productsCart', JSON.stringify(products));

  //setCountProducts(777);

  console.log(products);
  aa(products);

}


  //Estados
    const [products, setProducts] = useState([]);
  

  useEffect(() => {    
    getProducts();    
  }, []);

 //Fetch  
  async function getProducts() {
    const respProducts = await axios.get("https://burger4you-77ef8-default-rtdb.firebaseio.com/products.json");
    setProducts(respProducts.data);
  }

  async function postCart(objCart) {
   
    console.log("ENVIAR OBJ");
    console.log(objCart);

    await axios
    .post("https://burger4you-77ef8-default-rtdb.firebaseio.com/shoppingcart.json",       
       objCart
    )
    .then((response) => {
      //console.log(response.data);
      return  response.data;
    });    
  }


  
  return (
    <>
    <productsContext.Provider value={products}>
      
    
            <Navbar allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
              clearCart={clearCart}
              />
           <FloatingBotton/> 
              
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Home" element={<Home />} />
              <Route exact path="/Contacto" element={<Contacto/>} />
              <Route exact path="/Nosotros" element={<Nosotros/>} />
              <Route exact path="/ConfirmarCompra" element={<ConfirmarCompra
              allProducts={allProducts}
              postCart={postCart}
              total={total}
              countProducts={countProducts}
              clearCart={clearCart}
              />} />
              <Route exact path="/Productos" element={<Productos 
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              total={total}
              setTotal={setTotal}
              countProducts={countProducts}
              setCountProducts={setCountProducts}
                            
              />}></Route>
            
            </Routes>

            <Footer/>
            
         
          
      </productsContext.Provider>
    </>
  );
}

export default App;

// API
// https://products-736ef-default-rtdb.firebaseio.com/products.json

