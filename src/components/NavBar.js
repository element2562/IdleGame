import { useAuth0 } from "@auth0/auth0-react";
import { Navbar, Button } from "react-bootstrap";

const NavBar = () => {
    const { user, isAuthenticated, logout } = useAuth0();
    return(
        isAuthenticated && (
            <>
                <Navbar>
                    <Navbar.Brand>Welcome {user.name}!</Navbar.Brand>
                    <Button onClick={() => logout()}>Logout</Button>
                </Navbar>
            </>
        )
    )
}

export default NavBar;