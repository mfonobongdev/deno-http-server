import { type Request, type Response } from "@/deps";
import friends from "../models/friends.model.ts";

function getfriends(_req: Request, res: Response) {
  res.json(friends);
}

function postFriend(req: Request, res: Response) {
  if (!req.body.name) {
    return res.status(400).json({ error: "missing friend name" });
  }

  const newFriend = {
    id: friends.length,
    name: req.body?.name,
  };

  friends.push(newFriend);

  res.json(newFriend);
}

function getFriend(req: Request, res: Response) {
  const friendId = Number(req.params.friendId);
  const friend = friends[friendId];

  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).json({ error: "friend does not exist!!!" });
  }
}

export default {
  getfriends,
  postFriend,
  getFriend,
};
