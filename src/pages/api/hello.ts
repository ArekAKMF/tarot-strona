// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  // console.log(req, 'REQ')

  // res.end(`Post: ${pid}`)

  const con = await res.status(200).json({ name: "John Doe" })

  console.log(con, 'COOOO');

  return con;
}
