import { Injectable } from '@angular/core';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() {
    (<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
  }

  generatePdf(documentDefinition: any, action = 'open') {
    switch (action) {
      case 'open': pdfMake.createPdf(documentDefinition).open(); break;
      case 'print': pdfMake.createPdf(documentDefinition).print(); break;
      case 'download': pdfMake.createPdf(documentDefinition).download(); break;

      default: pdfMake.createPdf(documentDefinition).open(); break;
    }
  }

  generateTable(data: any[], columns: any[]) {
    const tableBody = [];
    tableBody.push(columns.map(column => {
      return { text: column.header.toLocaleUpperCase(), alignment: 'center', bold: true };
    }));
    //tableBody.push(columns.map(column => column.header.toLocaleUpperCase()));
    data.forEach(item => {
      /* const rowData = columns.map(column => item[column.columnDef]);
      tableBody.push(rowData); */
      tableBody.push(columns.map(column => {
        return { text: item[column.columnDef], alignment: column.alignment };
      }));
    });
    return tableBody;
  }
}
