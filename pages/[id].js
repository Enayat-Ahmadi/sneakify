import { useRouter } from "next/router";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="h-screen w-full flex flex-col gap-10 items-center ">
      <h1>this is Details page</h1>
      <h3>product id: {id}</h3>
    </div>
  );
};
export default Details;
