// Sample api request accessible by the route <domain>/api/hello
export default function handler(req, res) {
  res.status(200).json({ text: "Hello" });
}
