import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import "./category.styles.scss";
import { CategoriesContext } from "../../contexts/categories.context";
import ProductCard from "../../component/product-card/Product-card.component";

const Category = () => {
    const { category } = useParams() ;
    const { categoriesMap } = useContext(CategoriesContext)
    const [ products, setProducts ] = useState(categoriesMap[category])

    useEffect(()=> {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <div className="category-container-product">
            {
                products && products.map((product) => <ProductCard key={product.id} product={product} />)
            }
        </div>
    )
    
}

export default Category;