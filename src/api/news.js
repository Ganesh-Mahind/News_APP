export default async function handler(req, res) {
  const { q, page, pageSize } = req.query;

  const url = `https://newsapi.org/v2/everything?q=${q}&page=${page}&pageSize=${pageSize}&apiKey=${process.env.NEWS_API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ status: "error" });
  }
}
