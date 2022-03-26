// Sendgrid
import sgMail from "@sendgrid/mail";

// API Key
const SendGrid_APIKey = process.env.SendGrid_APIKey;

// API configuration
sgMail.setApiKey(SendGrid_APIKey);

// Function handler
export default async function handler(request, response) {
  // Get request body
  const { to, text } = request.body;

  // Build message object
  const message = {
    to,
    from: "ulisesaviles.dev@gmail.com",
    subject: "No subject",
    text,
    html: "<h1>Hello from sendGrid</h1>",
  };

  // Send the mail
  await sgMail
    .send(message)
    .then((res) => {
      // Send response
      return response.status(200).send(JSON.stringify(res));
    })
    .catch((e) => {
      // Catch error
      return response.status(500).send(e);
    });
}
