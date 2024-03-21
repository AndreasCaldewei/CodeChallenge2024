import { calculateScore } from "./score";
import { findOptimalPath } from "./solve";

interface SilverPoint {
  id: string; // Unique identifier for each Silver Point
  score: number;
}

interface Tile {
  id: string; // Unique identifier for each Tile
  cost: number;
}

interface Path {
  silverPoints: string[]; // Array of Silver Point IDs
  tiles: string[]; // Array of Tile IDs used in this path
}

// Sample data structures for demonstration
const silverPoints: SilverPoint[] = [
  { id: "S1", score: 100 },
  { id: "S2", score: 100 },
  { id: "S3", score: 150 },
  // Add more Silver Points as needed
];

const tiles: Tile[] = [
  { id: "T1", cost: 6 },
  { id: "T2", cost: 8 },
  { id: "T3", cost: 2 },
  // Add more Tiles as needed
];

const paths: Path[] = [
  // Define paths linking Golden Points pairs
  { silverPoints: ["S1", "S2"], tiles: ["T1", "T2"] },
  { silverPoints: ["S2", "S3"], tiles: ["T2", "T3"] },
  // Add more paths as needed
];

test("test", () => {
  const score = calculateScore(silverPoints, tiles, paths);
  console.log(score);
});
