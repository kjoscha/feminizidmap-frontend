import { Container, Nav, Navbar, NavbarToggle, NavbarCollapse } from 'react-bootstrap';
import Link from 'next/link';

export default function Navigation() {
  return (
    <Navbar expand="lg">
      <Container>
        <NavbarToggle aria-controls="basic-navbar-nav" />
        <NavbarCollapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-between w-100">
            <Link className="nav-link" href="/">HOME</Link>
            <Link className="nav-link" href="/about">ABOUT</Link>
            <Link className="nav-link" href="/map">MAP</Link>
            <Link className="nav-link" href="/about">DATABASE</Link>
            <Link className="nav-link" href="/about">REPORTS</Link>
            <Link className="nav-link" href="/about">TEAM</Link>
            <Link className="nav-link" href="/about">FAQ</Link>
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};
