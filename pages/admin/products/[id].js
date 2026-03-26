import { useRouter } from "next/router";
import useSWR from "swr";

export default function AdminProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product, error } = useSWR(`/api/products/${id}`);
  console.log(product);

  return <main>Product id :{id}</main>;
}
