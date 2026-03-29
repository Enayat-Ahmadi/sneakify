const navItems = [
  { label: "Home", href: "/" },
  { label: "Men", href: "/products?gender=men", gender: "men" },
  { label: "Women", href: "/products?gender=women", gender: "women" },
  { label: "Kids", href: "/products?gender=kids", gender: "kids" },
];
const brands = [
  { label: "Nike", src: "/brands/nike.png", href: "/products?search=nike" },
  {
    label: "Adidas",
    src: "/brands/adidas.png",
    href: "/products?search=adidas",
  },
  {
    label: "New balance",
    src: "/brands/newbalance.png",
    href: "/products?search=new balance",
  },
];

export { navItems, brands };
