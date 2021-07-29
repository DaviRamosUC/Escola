import app from "./app";

const port = 3001;
app.listen(port, () => {
  console.log();
  console.log(`Server is running at http://localhost:${port}`);
  console.log();
});
