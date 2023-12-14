import { express } from "@/deps";
import messagesController from "@/controllers/messages.controller.ts";

const messagesRouter = express.Router();

messagesRouter.get("/", messagesController.getMessages);
messagesRouter.post("/", messagesController.postMessage);

export default messagesRouter;
