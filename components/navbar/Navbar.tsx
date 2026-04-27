import Container from "../global/Container";
import CartButton from "./CartButton";
import DarkModeToggle from "./DarkModeToggle";
import Links from "./Links";
import Logo from "./Logo";
import Search from "./Search";
import UserIcon from "./UserIcon";

const Navbar = () => {
  return (
    <nav>
      <Container className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center sm:py-10 sm:px-4 border-b">
        <Logo />
        <Search />
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <CartButton />
          <DarkModeToggle />
          <Links />
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
