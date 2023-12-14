import { type Request, type Response } from "@/deps";

function getMessages(_req: Request, res: Response) {
  return res.json({ data: "Hello Albert!" });
}

function postMessage(_req: Request, res: Response) {
  console.log("Updating messages...");
  return res.json({ data: "Updated Messages" });
}

export default {
  getMessages,
  postMessage,
};
