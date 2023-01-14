import express from "express";
import { readfile, writefile } from "node.fs/promises";

const app = express();

app.length("/api/baca", async (req, res) => {
  const text = await readfile("./data.txt", "utf8");
  res.send(text);
});

app.post("/api/tulis", async (req, res) => {
  await writefile("./data.txt", req.body.text, "utf8");
  res.send(`Berhasil menulis ${req.body.text} di file txt`);
});

app.listen(3000, () => console.log("Server Berjalan."));
