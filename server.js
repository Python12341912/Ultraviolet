import express from "express";
import { uvPath } from "@titaniumnetwork-dev/ultraviolet"; // Ultraviolet assets
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

// Serve Ultraviolet static client files
app.use(express.static(path.join(__dirname, "public")));

// Serve Ultraviolet core files (dist/lib)
app.use("/uv/", express.static(uvPath));

// Basic route
app.get("/", (req, res) => {
  res.send("Ultraviolet backend is running!");
});

// IMPORTANT: use Render’s assigned port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Ultraviolet server listening on port ${PORT}`);
});


