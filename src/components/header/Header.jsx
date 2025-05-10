import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-center w-full">
      <Link className="px-[61px] py-[32px] w-1440px w-full" to="/">
        <img className="cursor-pointer" src="/public/logo.svg" alt="siteLogo" />
      </Link>
    </header>
  );
};

export default Header;
