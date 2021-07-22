const SIZE = 8;
const places = Array(SIZE);
let solutions = 0;

//r - row !== c - column --> where c is number of column and r number of row.
//r - row !== c - column --> means that the distance from the actual position should be same number far
//from the both column and row. In other words positioned on the same diagonal.
const checkPlace = (column, row) =>
  places.slice(0, column).every((r, c) => r !== row && Math.abs(r - row) !== column - c);

const finder = (column = 0) => {
  if (column === SIZE) {
    // all columns tried out?
    console.log(places.map(x => x + 1)); // print out solution
    solutions++; // count it
  } else {
    const testRowsInColumn = j => {
      if (j < SIZE) {
        if (checkPlace(column, j)) {
          places[column] = j;
          finder(column + 1);
        }
        testRowsInColumn(j + 1);
      }
    };
    testRowsInColumn(0);
  }
};
finder();

console.log(`Solutions found: ${solutions}`);
