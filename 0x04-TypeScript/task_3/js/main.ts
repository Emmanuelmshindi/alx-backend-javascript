/// <reference types="crud.d.ts" />

import { rowID, rowElement } from './interface.ts';

import * as CRUD from 'crud.js';

const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
};

const newRowID: RowID = insertRow();

const updatedRow: RowElement = updateRow(age, 23);

CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
