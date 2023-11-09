const fs = require("node:fs");

 try {
    const files = await fs.readdirSync(".");
    console.log("files: ", files);
    const content = await fs.readFileSync(files[0], { encoding: "utf-8" });
    console.log("content: ", content);
  } catch (err) {
    console.log("err: ", err);
  }
