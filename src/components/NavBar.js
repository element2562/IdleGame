import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Button, Nav, Form, NavDropdown } from "react-bootstrap";

const NavBar = () => {
    const { user, isAuthenticated, logout } = useAuth0();
    return(
        isAuthenticated && (
            <>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand>Idle Game</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item>Action</NavDropdown.Item>
                    <NavDropdown.Item>Another action</NavDropdown.Item>
                    <NavDropdown.Item>Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item>Separated link</NavDropdown.Item>
                </NavDropdown>
                <h3 id="userWelcome">Welcome {user.name}!</h3>
                </Nav>
                <Form inline>
                    <Button variant="primary" onClick={() => logout()}>Logout</Button>
                </Form>
                </Navbar.Collapse>
                </Navbar>
            </>
        )
    )
}

export default NavBar;