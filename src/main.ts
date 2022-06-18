// GASはexport const ... 不可
const CONFIG = {
  SHEET_FILE_ID: "1sZY_rcWYvgWEHSVmXs66aQk764VxxOHObFCXKtux3ME",
} as const;

const main = () => {
  const now = new Date();
  const spreadSheet = SpreadsheetApp.openById(CONFIG.SHEET_FILE_ID);
  const sheet = spreadSheet.getSheets()[0];
  // const sheet = spreadSheet.getActiveSheet(); // 多分上と同じ
  const cell = sheet.getRange("B3");
  cell.setValue(now.toISOString());
};

main();
