import { NextApiRequest, NextApiResponse } from "next";
import React from "react";

export default function (req: NextApiRequest, res: NextApiResponse) {
  res.json({ status: "ok" });
}
