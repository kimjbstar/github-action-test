"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const child_process = require("child_process");
class App {
    constructor() {
        this.application = express();
    }
}
const app = new App().application;
app.get("/", (req, res) => {
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
//# sourceMappingURL=index.js.map