import express from "express";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve Ultraviolet static build output (adjust if your fork uses a different folder)
app.use(express.static(path.join(__dirname, "dist")));

// Serve Ultraviolet core files
app.use("/uv/", express.static(uvPath));

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Ultraviolet backend is running!");
});

// IMPORTANT: Render assigns a dynamic port via process.env.PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Ultraviolet server listening on port ${PORT}`);
});
