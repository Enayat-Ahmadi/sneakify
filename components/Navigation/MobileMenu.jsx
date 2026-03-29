import Link from "next/link";
import { cn } from "@/lib/utils";
import { navItems, brands } from "./navItems";
import { useRouter } from "next/router";

export default function MobileMenu({ mobileMenuOpen, setMobileMenuOpen }) {
  const router = useRouter();
  const { pathname, query } = router;
  function isActive(item) {
    if (item.href === "/") {
      return pathname === "/";
    }
    return pathname === "/products" && query.gender === item.gender;
  }
  return (
    <div
      onClick={() => setMobileMenuOpen(false)}
      className={cn(
        "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
        mobileMenuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0",
      )}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={cn(
          "absolute right-0 top-15 w-full h-[calc(100vh-4rem)] rounded-l-3xl  max-w-sm glass p-6 shadow-xl transition-transform duration-300",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex items-end justify-between">
          {navItems.map((item) => {
            const active = isActive(item);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "relative text-sm transition px-4 py-2 rounded-lg card-hover bg-card/30 font-semibold",
                  active ? "text-destructive " : "text-muted",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 mt-5">
          <p className="text-center text-muted">Top Brands</p>
          {brands.map((brand) => (
            <Link
              key={brand.href}
              href={brand.href}
              onClick={() => setMobileMenuOpen(false)}
              className="
                    flex justify-between items-center p-4 h-14 text-sm font-semibold bg-card/30 text-muted transition overflow-hidde
                    rounded-2xl card-hover"
            >
              {brand.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
