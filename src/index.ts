import * as express from "express";
import * as child_process from "child_process";
class App {
  public application: express.Application;
  constructor() {
    this.application = express();
  }
}
const app = new App().application;
app.get("/", (req: express.Request, res: express.Response) => {
  const execSync = child_process.execSync;
  const code = execSync("node -v");
  const whoami = execSync("whoami");
  const result = {
    code: code.toString().replace("\n", ""),
    whoami: whoami.toString().replace("\n", "")
  };
  res.json(result);
});

app.listen(4000, () => {
  console.log("start");
});
