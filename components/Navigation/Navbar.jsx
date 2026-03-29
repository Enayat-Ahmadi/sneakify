import Link from "next/link";
import { ShoppingCart, Heart, Menu, X, Search } from "lucide-react";
import { useRouter } from "next/router";
import useWishlist from "@/hooks/useWishlist";
import useCart from "@/hooks/useCart";
import { cn } from "@/lib/utils";
import { useState } from "react";
import SearchOverly from "../SearchOverly";
import { navItems } from "./navItems";
import MobileMenu from "./MobileMenu";

export default function Navbar({ products }) {
  const [openSearch, setOpenSearch] = useState(false);
  const router = useRouter();
  const { pathname, query } = router;
  const { wishlist } = useWishlist();
  const { productCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const totalItems = productCart.reduce(
    (sum, Product) => sum + Product.quantity,
    0,
  );

  function isActive(item) {
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname === "/products" && query.gender === item.gender;
  }

  return (
    <>
      <nav className="border-b ">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl font-bold text-foreground icon-hover"
            >
              SNEAK<span className="italic text-lime-400">ify</span>
            </Link>
          </div>
          <div className="hidden gap-6 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium",
                    active
                      ? "text-destructive font-semibold"
                      : "text-foreground icon-hover",
                  )}
                >
                  {item.label}
                  <span
                    className={cn(
                      "absolute w-full left-0 bottom-0 h-0.5 bg-destructive transition",
                      active ? "opacity-100" : "opacity-0",
                    )}
                  />
                </Link>
              );
            })}
          </div>

          <div className="flex gap-6">
            <Search
              onClick={() => setOpenSearch(true)}
              className="icon-hover"
            />
            {openSearch && (
              <div className="fixed mx-auto inset-0 z-100 p-4">
                <div
                  className="absolute inset-0 bg-black/50"
                  onClick={() => setOpenSearch(false)}
                />
                <SearchOverly
                  products={products}
                  onClose={() => setOpenSearch(false)}
                />
              </div>
            )}
            <div className="relative">
              <Link href="/wishlist">
                <Heart className="w-7 h-7 icon-hover" />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs text-white">
                  {wishlist.length}
                </span>
              </Link>
            </div>
            <div className="relative">
              <Link href="/cart">
                <ShoppingCart className="w-7 h-7 icon-hover" />
                <span className="absolute -right-2 -top-2 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-xs text-white">
                  {totalItems}
                </span>
              </Link>
            </div>
            <button
              variant="ghost"
              className="lg:hidden z-50 w-6 h-7"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>
      {/* Mobile  Menu*/}
      <MobileMenu
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
    </>
  );
}
