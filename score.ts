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

export function calculateScore(
  silverPoints: SilverPoint[],
  tiles: Tile[],
  paths: Path[],
): number {
  let totalScore = paths.reduce((total, path) => {
    const pathScore = path.silverPoints.reduce((score, pointId) => {
      const point = silverPoints.find((point) => point.id === pointId);
      return score + (point ? point.score : 0);
    }, 0);
    return total + pathScore;
  }, 0);

  const uniqueTileIds = new Set(paths.flatMap((path) => path.tiles));
  const totalTileCost = Array.from(uniqueTileIds).reduce((total, tileId) => {
    const tile = tiles.find((tile) => tile.id === tileId);
    return total + (tile ? tile.cost : 0);
  }, 0);

  const finalScore = totalScore - totalTileCost;
  return finalScore > 0 ? finalScore : 0;
}
