
// components/Navbar.js
import Link from 'next/link';
 // Assuming you use CSS Modules

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/Aboutus">About</Link>
        </li>
        <li>
          <Link href="/Events">Events</Link>
        </li>
        <li>
          <Link href="/Inquisitor">Inquisitor</Link>
        </li>
        <li>
          <Link href="/Team">Team</Link>
        </li>
        <li>
          <Link href="/Gallary">Gallery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

