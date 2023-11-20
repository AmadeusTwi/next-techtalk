import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = process.env.GITHUB_TOKEN;
  const headers = {
    Authorization: `token ${token}`,
  };
  const response = await fetch("https://api.github.com/repos/vercel/next.js", {
    headers,
  });
  const data = await response.json();

  res.status(200).json({ stars: data.stargazers_count });
}
