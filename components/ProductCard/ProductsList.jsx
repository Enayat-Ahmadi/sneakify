import ProductCard from "./Card";
import Link from "next/link";

export default function ProductsList({ products }) {
  return (
    <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
      {products?.map((product) => {
        return (
          <li key={product._id}>
            <Link href={`/details/${product._id}`}>
              <ProductCard product={product} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
