export function saveToXlsx(data) {
    import('./xlsxAdaptor.js')
        .then(({ default: XLSX }) => createXlsx(XLSX, data));
}

function createXlsx(XLSX, data) {
    var fileName = "export.xlsx";
    var sheetName = "SheetJS";

    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet(data);

    /* add worksheet to workbook */
    XLSX.utils.book_append_sheet(wb, ws, sheetName);

    /* write workbook */
    XLSX.writeFile(wb, fileName);
}
