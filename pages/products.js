import { Button } from "@/components/ui/button";
import ProductsList from "@/components/ProductCard/ProductsList";
import { useState } from "react";

export default function Products({ products }) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const brands = [...new Set(products.map((product) => product.brand))];

  function handleFilter(filterBy) {
    setFilteredProducts(
      products.filter((product) => product.brand === filterBy),
    );
  }
  function allProducts() {
    setFilteredProducts(products);
  }
  console.log(filteredProducts);
  return (
    <div>
      <div className="text-center p-6">
        <Button onClick={allProducts}>All Products</Button>
        {brands.map((brand) => (
          <Button key={brand} onClick={() => handleFilter(brand)}>
            {brand}
          </Button>
        ))}
      </div>
      <ProductsList products={filteredProducts} />
    </div>
  );
}
