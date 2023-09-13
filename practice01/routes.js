const fs = require("fs");
const { text } = require("stream/consumers");
const requestHandler = (req, res) => {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  // res.setContentType("text/html;charset=utf-8");
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Welcome</title></head>");
    res.write("<body>");
    res.write("<p>Hi~Please input you nickname</p>");
    res.write("<p>你好～</p>");
    res.write("<form action='/user' method='POST'>");
    res.write("<lable for='username'>UserName</lable>");
    res.write("<input name='username' id='username' />");
    res.write("<button for='username'>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</head>");
  }
  if (req.url === "/user" && req.method === "POST") {
    const finalText = [];
    req.on("data", (chunk) => {
      finalText.push(chunk);
    });
    return req.on("end", () => {
      const final = Buffer.concat(finalText).toString().split("=")[1];
      // console.log(final);
      const texts = fs.readFileSync("user.txt", {
        encoding: "utf8",
      });
      let writeText = final;
      if (typeof texts === "string") writeText = texts.concat(final, ",");

      fs.writeFile("user.txt", writeText, (err) => {
        const arr = writeText.split(",");
        res.write("<html>");
        res.write("<head><title>Welcome</title></head>");
        res.write("<body>");
        res.write("<p>Hi~</p>");
        res.write("<ul>");
        res.write(
          `${arr
            .map((name) => (name != "" ? `<li>${name}</li>` : ""))
            .join("")}`
        );
        res.write("</ul>");
        res.write("</form>");
        res.write("</body>");
        res.write("</head>");
        res.end();
      });
    });
  }
  res.end();
};

module.exports = requestHandler;
