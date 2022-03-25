// Sendgrid
import sgMail from "@sendgrid/mail";

// API Key
const SendGrid_APIKey = process.env.SendGrid_APIKey;

// API configuration
sgMail.setApiKey(SendGrid_APIKey);

// Function handler
export default async function handler(request, response) {
  // Get request body
  const { subject } = request.body;

  // Build message object
  const message = {
    to: "ulisesaviles.dev@gmail.com",
    from: "ulisesaviles.dev@gmail.com",
    subject: subject ? subject : "No subject",
    text: "Hello from sendGrid.",
    html: "<h1>Hello from sendGrid</h1>",
  };

  // Send the mail
  await sgMail
    .send(message)
    .then((res) => {
      // Send response
      return response.status(200).send("SUCCESS.");
    })
    .catch((e) => {
      // Catch error
      return response.status(500).send("Err");
    });
}
