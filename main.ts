import { express, type Request, type Response } from "@/deps";
import friendsRouter from "@/routes/friends.routes.ts";
import messagesRouter from "@/routes/messages.routes.ts";

const PORT = 3000;

const app = express();

/* logger */
app.use((req, _res, next) => {
  const start = Date.now();
  next();

  const delta = Date.now() - start;
  console.log(`${req.method} ${req.baseUrl}${req.url} ${delta}ms`);
});

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  const body = {
    "user-agent": `${req.headers["user-agent"] ?? "Unknown"}`,
  };

  res.status(200).type("application/json").send(JSON.stringify(body));
});

/* Routes */
app.use("/friends", friendsRouter);
app.use("/messages", messagesRouter);

console.log(`HTTP server running. Access it at: http://localhost:3000/`);
app.listen(PORT);
