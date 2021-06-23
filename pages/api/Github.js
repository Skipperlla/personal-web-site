import { GetRepository } from "../../lib/Github";

export default async function Github(req, res) {
  const response = await GetRepository();
  const repos = await response.json();
  const status = response.status;
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=60, stale-while-revalidate=30"
  );
  return res.status(200).json({
    repos,
    status,
  });
}
