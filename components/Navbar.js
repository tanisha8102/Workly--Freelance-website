import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { IoSearch } from "react-icons/io5";
import { LuMenu } from "react-icons/lu";

const logo = new URL("../assets/workly-logo.png", import.meta.url).href;

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handlePricingScroll = (e) => {
    e.preventDefault();
    if (pathname === "/") {
      const pricingSection = document.getElementById("pricing-section");
      if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/").then(() => {
        setTimeout(() => {
          const pricingSection = document.getElementById("pricing-section");
          if (pricingSection) {
            pricingSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md py-4 px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <Image src={logo} alt="Ziro Logo" width={140} height={56} className="cursor-pointer" />
          </Link>

          {/* Hamburger Menu for Small Devices */}
          <div className="lg:hidden">
            <LuMenu
              className="text-2xl cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8 text-gray-800 font-medium">
            <li>
              <Link href="/" className={`hover:text-purple-600 ${pathname === "/" ? "text-purple-600" : ""}`}>Home</Link>
            </li>
            <li>
              <Link href="#" onClick={handlePricingScroll} className="hover:text-purple-600">Pricing</Link>
            </li>
            <li>
              <Link href="/blog" className={`hover:text-purple-600 ${pathname === "/blog" ? "text-purple-600" : ""}`}>Blog</Link>
            </li>
            <li>
              <Link href="/job" className={`hover:text-purple-600 ${pathname === "/job" ? "text-purple-600" : ""}`}>Become a Member</Link>
            </li>
          </ul>

          {/* Search Bar */}
          <div className="hidden lg:block relative">
            <input
              type="text"
              placeholder="Search here..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-4 pr-10 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <IoSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg" />
          </div>

          {/* Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <button className="px-6 py-2 rounded-full bg-purple-100 text-gray-800 hover:bg-purple-200">Log In</button>
            <button className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700">Sign Up</button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4">
            <ul className="flex flex-col gap-4 text-gray-800 font-medium">
              <li>
                <Link href="/" className="hover:text-purple-600">Home</Link>
              </li>
              <li>
                <Link href="#" onClick={handlePricingScroll} className="hover:text-purple-600">Pricing</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-purple-600">Blog</Link>
              </li>
              <li>
                <Link href="/job" className="hover:text-purple-600">Become a Member</Link>
              </li>
            </ul>
            <div className="flex flex-col gap-4 mt-4">
              <button className="px-6 py-2 rounded-full bg-purple-100 text-gray-800 hover:bg-purple-200">Log In</button>
              <button className="px-6 py-2 rounded-full bg-purple-600 text-white hover:bg-purple-700">Sign Up</button>
            </div>
          </div>
        )}
      </nav>

      {/* Add top padding to main content */}
      <main className="pt-20">
        {/* Page content goes here */}
      </main>
    </>
  );
};

export default Navbar;
