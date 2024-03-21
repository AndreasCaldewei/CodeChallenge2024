import * as fs from "fs";
import * as readline from "readline";

export interface Point {
  x: number;
  y: number;
  score?: number; // Score is optional, only for Silver Points
}

export interface Tile {
  id: string;
  cost: number;
  available: number;
}

export interface InputData {
  width: number;
  height: number;
  goldenPoints: Point[];
  silverPoints: Point[];
  tiles: Tile[];
}

export async function parseInputFile(filePath: string): Promise<InputData> {
  const fileStream = fs.createReadStream(filePath);
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const inputData: InputData = {
    width: 0,
    height: 0,
    goldenPoints: [],
    silverPoints: [],
    tiles: [],
  };

  let lineNumber = 0;
  let goldenPointsCount = 0;
  let silverPointsCount = 0;
  let tilesCount = 0;

  for await (const line of rl) {
    lineNumber++;
    const parts = line.split(" ");

    if (lineNumber === 1) {
      inputData.width = parseInt(parts[0], 10);
      inputData.height = parseInt(parts[1], 10);
      goldenPointsCount = parseInt(parts[2], 10);
      silverPointsCount = parseInt(parts[3], 10);
      tilesCount = parseInt(parts[4], 10);
    } else if (lineNumber <= 1 + goldenPointsCount) {
      inputData.goldenPoints.push({
        x: parseInt(parts[0], 10),
        y: parseInt(parts[1], 10),
      });
    } else if (lineNumber <= 1 + goldenPointsCount + silverPointsCount) {
      inputData.silverPoints.push({
        x: parseInt(parts[0], 10),
        y: parseInt(parts[1], 10),
        score: parseInt(parts[2], 10),
      });
    } else {
      inputData.tiles.push({
        id: parts[0],
        cost: parseInt(parts[1], 10),
        available: parseInt(parts[2], 10),
      });
    }
  }

  return inputData;
}
