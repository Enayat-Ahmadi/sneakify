import ProductsList from "@/components/ProductCard/ProductsList";
import useWishlist from "@/hooks/useWishlist";
import EmptyState from "@/components/ui/EmpatyState";
import { Heart } from "lucide-react";

export default function WishList({ products }) {
  const { wishlist } = useWishlist();
  const wishlistProducts =
    products?.filter((product) => wishlist.includes(product._id)) || [];
  if (wishlistProducts.length === 0) {
    return (
      <EmptyState
        title="Your wishlist is empty"
        message="Save your favorite sneakers to find them quickly later."
        icon={<Heart className="h-10 w-10" />}
      />
    );
  }

  return (
    <div className="min-h-screen w-full flex flex-col items-center">
      <ProductsList products={wishlistProducts} />
    </div>
  );
}
