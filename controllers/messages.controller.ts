import { path, type Request, type Response } from "@/deps";

function getMessages(_req: Request, res: Response) {
  const pathToFile = path.join(Deno.cwd(), "public", "Passport.jpg");

  res.sendFile(pathToFile);
  // return res.json({ data: "Hello Albert!" });
}

function postMessage(_req: Request, res: Response) {
  console.log("Updating messages...");
  return res.json({ data: "Updated Messages" });
}

export default {
  getMessages,
  postMessage,
};
