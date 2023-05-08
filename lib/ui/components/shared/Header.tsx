import Image from "next/image";
import Link from "next/link";
import { FaUserPlus } from "react-icons/fa";
import { useUser } from "@auth0/nextjs-auth0/client";

const Header = () => {
  const { user, error, isLoading } = useUser();

  return (
    <header>
      <Image
        src="/images/logo_color.png"
        className="logo"
        alt="logo"
        width={100}
        height={70}
      />

      <nav className="navigation">
        <ul className="nav-links">
          <li className="link-item">
            <Link href="/app" className="link is-active">
              Dashboard
            </Link>
          </li>
          <li className="link-item">
            <Link href="/app/budgets" className="link">
              Budgets
            </Link>
          </li>
          <li className="link-item">
            <Link href="/app/spending" className="link">
              Spending
            </Link>
          </li>
          <li className="link-item">
            <Link href="#" className="link">
              Bills
            </Link>
          </li>

          <Link href="#">
            <FaUserPlus className="fas fa-user-plus user-icon" />
          </Link>
        </ul>
      </nav>
      {user && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="avatar">
            <Image
              width={40}
              height={40}
              src={user?.picture!}
              alt={user?.nickname!}
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
          <div>{user?.nickname}</div>
        </div>
      )}
    </header>
  );
};

export default Header;
