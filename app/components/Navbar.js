import '../styles/navbar.scss';
import Link from 'next/link';

export default function Navbar () {

  return (
    <nav className="navbar">
      <Link className="nav-link" href='/' activeClassName="active">Home</Link>
      <Link className="nav-link" href='/services'>Services</Link>
      <Link className="nav-link" href=''>Portfolio</Link>
      <Link className="nav-link" href=''>Pricing</Link>
      <Link className="nav-link" href=''>Contact</Link>
    </nav>
  );
};
