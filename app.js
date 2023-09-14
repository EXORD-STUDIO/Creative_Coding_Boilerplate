import express from "express";
import { engine, create } from 'express-handlebars';
import path from "path";
import { fileURLToPath } from 'url';

const app = express();
const port = 3001;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Specify helpers which are only registered on this instance.
const hbs = create({
  helpers: {
    foo() { return 'FOO!'; },
    bar() { return 'BAR!'; }
  }
});

// handlebars
app.set('views', path.join(__dirname, './src/pages'));
app.engine('handlebars', engine({ 
  layoutsDir: path.join(__dirname, './src/pages/layouts'), // Pfad für Layouts, relativ zu __dirname
  partialsDir: path.join(__dirname, './src/components'),
}));
app.set('view engine', 'handlebars');
app.use("/public", express.static(path.join(__dirname, "./public")));
app.use("/dist", express.static(path.join(__dirname, "./dist")));

app.get("/", (req, res) => {
  res.render("home", { title: "Creative Coding Boilerplate by" });
})

app.get("/contact", (req, res) => {
  res.render("contact/contact", { title: "Contact us at:" });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})