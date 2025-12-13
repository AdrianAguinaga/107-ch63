import Product from "../components/Product";
import "./Catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog(){
    const [products, setProducts] = useState([]); 
    // const products = []; 

    useEffect (()=> {
        // Load your data here
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
    }, []);// We specify how many times this effect runs 
    
    
    return(
        <div className="catalog">
            <h1>Our amazing catalog</h1>
            {products.map(prod => <Product key={prod._id} data={prod}/>)}
            
        </div>
    );    
}

export default Catalog;