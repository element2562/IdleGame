import { Button, Form } from "react-bootstrap";
import { useAuth0 } from "@auth0/auth0-react";
const Login = () =>
{
    const { loginWithRedirect, isAuthenticated} = useAuth0();
    return(
        !isAuthenticated &&
        (
            <Form>
                <Form.Group>
                    <Form.Label>Login or create a new user to continue!</Form.Label>
                    <Button variant="primary" onClick={() => loginWithRedirect()}>Login</Button>
                </Form.Group>
            </Form>
        )
    )
}

export default Login;