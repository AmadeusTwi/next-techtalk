import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const response = await fetch("https://api.github.com/repos/vercel/next.js");
  const data = await response.json();

  res.status(200).json({ stars: data.stargazers_count });
}
