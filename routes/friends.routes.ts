import { express } from "@/deps";
import friendsController from "@/controllers/friends.controller.ts";

const friendsRouter = express.Router();

friendsRouter.use((req, _res, next) => {
  console.log("IP Address:", req.ip);
  next();
});
friendsRouter.get("/", friendsController.getfriends);
friendsRouter.post("/", friendsController.postFriend);
friendsRouter.get("/:friendId", friendsController.getFriend);

export default friendsRouter;
