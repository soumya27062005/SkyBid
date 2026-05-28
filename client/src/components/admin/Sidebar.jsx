import { Caption, CustomNavLink, Title } from "../common/Design";
import { CiGrid41 } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineCategory } from "react-icons/md";
import { RiAuctionLine } from "react-icons/ri";
import { IoIosHeartEmpty, IoIosLogOut } from "react-icons/io";
import { CgProductHunt } from "react-icons/cg";
import { TbCurrencyDollar } from "react-icons/tb";
import { FiUser } from "react-icons/fi";
import { FaPlusCircle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { User1 } from "../hero/Hero";

export const Sidebar = () => {
  const location = useLocation();
  const role = "admin"; // Change dynamically based on user role
  const className = "flex items-center gap-3 mb-2 p-4 rounded-full";

  return (
    <section className="sidebar flex flex-col justify-between h-full">
      {/* Profile Section */}
      <div className="profile flex items-center text-center justify-center gap-8 flex-col mb-8">
        <img src={User1} alt="User Profile" className="w-32 h-32 rounded-full object-cover" />
        <div>
          <Title className="capitalize">Soumya Gupta</Title>
          <Caption>guptasoumya2706@gmail.com</Caption>
        </div>
      </div>

      {/* Navigation Links */}
      <div>
        <CustomNavLink href="/dashboard" isActive={location.pathname === "/dashboard"} className={className}>
          <CiGrid41 size={22} />
          <span>Dashboard</span>
        </CustomNavLink>

        {/* Seller & Admin Links */}
        {(role === "seller" || role === "admin") && (
          <>
            <CustomNavLink href="/product" isActive={location.pathname === "/product"} className={className}>
              <MdOutlineCategory size={22} />
              <span>My Products</span>
            </CustomNavLink>

            <CustomNavLink href="/create-product" isActive={location.pathname === "/create-product"} className={className}>
              <FaPlusCircle size={22} />
              <span>Create Product</span>
            </CustomNavLink>
          </>
        )}

        {/* Admin-Specific Links */}
        {role === "admin" && (
          <>
            <CustomNavLink href="/userlist" isActive={location.pathname === "/userlist"} className={className}>
              <FiUser size={22} />
              <span>All Users</span>
            </CustomNavLink>

            <CustomNavLink href="/product/admin" isActive={location.pathname === "/product/admin"} className={className}>
              <CgProductHunt size={22} />
              <span>All Product List</span>
            </CustomNavLink>

            <CustomNavLink href="/category" isActive={location.pathname === "/category"} className={className}>
              <MdOutlineCategory size={22} />
              <span>Categories</span>
            </CustomNavLink>

            <CustomNavLink href="/admin/income" isActive={location.pathname === "/admin/income"} className={className}>
              <TbCurrencyDollar size={22} />
              <span>Income</span>
            </CustomNavLink>

            <CustomNavLink href="/account" isActive={location.pathname === "/account"} className={className}>
              <CgProductHunt size={22} />
              <span>Wallet</span>
            </CustomNavLink>
          </>
        )}

        {/* Common Links for All Users */}
        <CustomNavLink href="/winning-products" isActive={location.pathname === "/winning-products"} className={className}>
          <RiAuctionLine size={22} />
          <span>Winning Bids</span>
        </CustomNavLink>

        <CustomNavLink href="/myfavorite" isActive={location.pathname === "/myfavorite"} className={className}>
          <IoIosHeartEmpty size={22} />
          <span>My Favorites</span>
        </CustomNavLink>

        <CustomNavLink href="/profile" isActive={location.pathname === "/profile"} className={className}>
          <IoSettingsOutline size={22} />
          <span>Personal Profile</span>
        </CustomNavLink>

        <CustomNavLink href="/payment" isActive={location.pathname === "/payment"} className={className}>
          <TbCurrencyDollar size={22} />
          <span>Make Payment</span>
        </CustomNavLink>

        {/* Logout Button */}
        <button className="flex items-center w-full gap-3 mt-4 bg-red-500 mb-3 hover:text-white p-4 rounded-full text-white">
          <IoIosLogOut size={22} />
          <span>Log Out</span>
        </button>
      </div>
    </section>
  );
};
