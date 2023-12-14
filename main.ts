import { express, type Request, type Response } from "@/deps";
import messagesController from "./controllers/messages.controller.ts";
import friendsController from "./controllers/friends.controller.ts";

const PORT = 3000;

const app = express();

app.use((req, _res, next) => {
  const start = Date.now();
  next();

  const delta = Date.now() - start;
  console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const body = {
    "user-agent": `${req.headers["user-agent"] ?? "Unknown"}`,
  };

  res.status(200).type("application/json").send(JSON.stringify(body));
});

app.get("/friends", friendsController.getfriends);
app.post("/friends", friendsController.postFriend);
app.get("/friends/:friendId", friendsController.getFriend);

app.get("/messages", messagesController.getMessages);
app.post("/messages", messagesController.postMessage);

console.log(`HTTP server running. Access it at: http://localhost:3000/`);
app.listen(PORT);
