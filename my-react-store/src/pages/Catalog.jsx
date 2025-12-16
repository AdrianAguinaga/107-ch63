import Product from "../components/Product";
import "./Catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/dataService";

function Catalog() {
    const [products, setProducts] = useState([]); // to hold products   
    const [categories, setCategories] = useState([]);//to hold categories
    const [productsToShow, setProductsToShow] = useState([]);// to hold products to show based on category filter

    function loadCatalog() {
        let cats = ["fruit", "merchandise", "grocery"];
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
        setCategories(cats);

    }
    useEffect(() => {
        // Load your data here
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
        loadCatalog();
    }, []);// We specify how many times this effect runs 

    function filter(category) {
        let list = [];
        // find products that match the category
        // create the for loop to travel the array and filter the products
        // we already have the products in the products variable
        for (let i = 0; i < products.length; i++) {
            let prod = products[i];
            if (prod.category === category) {
                list.push(prod);
            }
        }
        setProductsToShow(list);
    }

    function clearFilter() {
        setProductsToShow(products);
    }

    return (
        <div className="catalog">
            <h1>Our amazing catalog</h1>
            {/* please render back all the products */}
            {/* you need to create a fuction that clear the filter   */}
            <button className="btn btn-sm btn-dark" onClick={clearFilter}>All</button>
            

            {categories.map(cat => <button key={cat} className="btn btn-sm btn-outline-dark" onClick={() => filter(cat)}>{cat}</button>)}
            {/* for(i=0;i<categories.length;i++)
                let cat = categories[i];
                <button>{cat}</button>
            */}
            <br></br>
            {productsToShow.map(prod => <Product key={prod._id} data={prod} />)}

        </div>
    );
}

export default Catalog;