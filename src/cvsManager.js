// Module to capture CVS files and process them in an Array of objects to be processed.

// Service to convert a CSV data in an array containing an objects where Key = Colummn , value = value of row.

const parseRow = (row) => {
  let isQuote = false,
    entries = [],
    entry = [];
  row.split("").forEach((char) => {
    if (char === '"') {
      isQuote = !isQuote;
    } else {
      if (char === "," && !isQuote) {
        entries.push(entry.join(""));
        entry = [];
      } else {
        entry.push(char);
      }
    }
  });
  entries.push(entry.join(""));
  return entries;
};

const dataBuilder = (data) => {
  // get all rows in the CSV to process
  const rows = data.split("\n");
  // get the columns which are the elements of the first line.
  const columns = parseRow(rows[0]);

  // get rest of the rows
  const rowsData = rows.slice(1).map(parseRow);

  //Build the array of objects :
  const dataTable = rowsData.map((arr) => {
    let dataItem = {};
    columns.forEach((columnName, index) => {
      dataItem[columnName] = arr[index];
    });
    return dataItem;
  });
  return dataTable;
};

export default dataBuilder;
