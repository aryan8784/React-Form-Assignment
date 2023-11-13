import React from "react";
import Form from "react-bootstrap/Form";

const Forms = () => {
  return (
    <>
      <p className=" text-center mt-4  mb-3">
        Already have a Formstack account?{" "}
        <span className="text-blue-500 cursor-pointer">Start your Trail in app</span>
      </p>

      <div className="mainn p-4 mt-3 rounded-lg shadow-lg">
        <Form className=" d-flex gap-4">
          <Form.Group
            className="mb-3 w-50"
            controlId="exampleForm.ControlInput1"
          >
            <Form.Label>First Name</Form.Label>
            <Form.Control type="email" placeholder="john" />
          </Form.Group>
          <Form.Group className=" w-50" controlId="exampleForm.ControlInput1">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="email" placeholder="Doe" />
          </Form.Group>
        </Form>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Work Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Your Email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPlaintextPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Your Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Oraganization Name</Form.Label>
            <Form.Control type="email" placeholder="ABC Oraganization" />
          </Form.Group>
        </Form>

        <Form className="mb-3">
          <Form.Label>Oraganization Size</Form.Label>

          <Form.Select aria-label="Default select example">
            <option>--Select--</option>
            <option value="1">JavaScript</option>
            <option value="2">React</option>
            <option value="3">Node.Js</option>
          </Form.Select>
        </Form>

        <Form className="mb-3 ">
          <Form.Label>INDUSTRY</Form.Label>

          <Form.Select aria-label="Default select example">
            <option>--Select--</option>
            <option value="1">JavaScript</option>
            <option value="2">React</option>
            <option value="3">Node.Js</option>
          </Form.Select>
        </Form>

        <p>
          Formstack has updated our Terms of services effective January 4,2023.
        </p>
        <p className="mb-3">
          We encourge you to read the documents in its entirely{" "}
        </p>

        <Form>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
            />
            <label className="form-check-label" for="flexCheckDefault">
              I understand and agree to the{" "}
              <span className="text-blue-500 cursor-pointer">
                {" "}
                Formstack Privacy Policy, Softwear
                Services Agreement{" "}
              </span>{" "}
              and <span className="text-blue-500 cursor-pointer"> acceptable use Policy </span>
            </label>
          </div>
        </Form>

        <div className="mt-4">
          <button className="btn btn-primary w-100 text-2xl ">Start Free Trail</button>
        </div>
      </div>
    </>
  );
};

export default Forms;
