import { findOptimalPath } from "./solve";

test("test", () => {
  // Example usage
  const filePath = "./input.txt";
  findOptimalPath(filePath)
    .then((data) => {
      console.log(JSON.stringify(data, null, 2));
    })
    .catch((error) => {
      console.error(error);
    });
});
