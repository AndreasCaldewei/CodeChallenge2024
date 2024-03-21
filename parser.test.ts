import { parseInputFile } from "./parser";

test("test", () => {
  // Example usage
  const filePath = "./input.txt";
  parseInputFile(filePath)
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
});
