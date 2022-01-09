import React from 'react'
import { RichText } from 'prismic-reactjs'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactForm = ({ slice }) => {
  function submitForm(event) {
    event.preventDefault();

    const { name, email } = event.target;

    // Use your API endpoint URL you copied from the previous step
    const endpoint =
      "<https://5ntvcwwmec.execute-api.us-east-1.amazonaws.com/default/sendContactEmail>";
    // We use JSON.stringify here so the data can be sent as a string via HTTP
    const body = JSON.stringify({
      senderName: name.value,
      senderEmail: email.value,
      message: 'sample message'
    });
    const requestOptions = {
      method: "POST",
      body
    };

    fetch(process.env.NEXT_PUBLIC_API_FORM , requestOptions)
      .then((response) => {
        if (!response.ok) throw new Error("Error in fetch");
        return response.json();
      })
      .then((response) => {
        document.getElementById("result-text").innerText =
          "Email sent successfully!";
      })
      .catch((error) => {
        console.log(error)
        document.getElementById("result-text").innerText =
          "An unkown error occured.";
      });
  }

  return(
    <section className={`col-12`}>
      <p id="result-text"></p>
      <Form className={`text-left`} onSubmit={(e)=> submitForm(e)}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <style jsx>{`
          section {
            max-width: 600px;
            margin: 4em auto;
          }
          .title {
            color: #8592e0;
          }
          .text-left {
            text-align: left;
          }
      `}</style>
    </section>
  )
}

export default ContactForm