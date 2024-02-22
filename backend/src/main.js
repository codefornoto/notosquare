const sheetUrl =
  "https://docs.google.com/spreadsheets/d/1BHl2KApET-sL9_EdH258jxJJZKDKEXD6GuuJlAQyqpI/";

const sheet = SpreadsheetApp.openByUrl(sheetUrl).getSheetByName("main");

function doGet() {
  const data = sheet.getDataRange().getValues();
  data.shift();
  return ContentService.createTextOutput(JSON.stringify(data));
}

function test() {
  const data = doGet();
  console.log(data);
}
