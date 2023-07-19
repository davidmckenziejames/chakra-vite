import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Signin() {
  return (
    <div className="page-sign">
      <Card className="card-sign">
        <CardHeader>
          <Link to="/" className="header-logo mb-4">
            dashbyte
          </Link>
          <CardTitle>Sign In</CardTitle>
          <CardText>Welcome back! Please signin to continue</CardText>
        </CardHeader>
        <CardBody>
          <Form method="get" action="/dashboard/finance">
            <div className="mb-4">
              <FormLabel>Email address</FormLabel>
              <FormControl
                type="text"
                placeholder="Enter your email address"
                value="me@themepixelscom"
              />
            </div>
            <div className="mb-4">
              <FormLabel className="d-flex justify-content-between">
                Password <Link to="">Forgot password?</Link>
              </FormLabel>
              <FormControl
                type="password"
                placeholder="Enter your password"
                value="password123"
              />
            </div>
            <Button type="submit" variant="primary" className="btn-sign">
              Sign In
            </Button>

            <Box className="divider">
              <span>or sign in with</span>
            </Box>

            <Stack direction="row" spacing={2}>
              <Button variant="" className="btn-facebook">
                <i className="ri-facebook-fill"></i> Facebook
              </Button>
              <Button variant="" className="btn-google">
                <i className="ri-google-fill"></i> Google
              </Button>
            </Stack>
          </Form>
        </CardBody>
        <CardFooter>
          Don't have an account?{" "}
          <Link to="/pages/signup">Create an Account</Link>
        </CardFooter>
      </Card>
    </div>
  );
}
