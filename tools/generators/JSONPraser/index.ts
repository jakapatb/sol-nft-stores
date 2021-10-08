import { Tree, logger } from '@nrwl/devkit';
import { GoogleSpreadsheet } from 'google-spreadsheet';
require('dotenv').config();

const fs = require('fs');
const path = require('path');
const keys = require('./key.json');

interface Schema {
  name: string;
}
export default async function (host: Tree, schema: Schema) {
  const doc = new GoogleSpreadsheet(
    '1U7ZaZecNWBCY0AsbcF1xKMykytpOUb7dp7KC__8LftA'
  );

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_BOT_EMAIL,
    private_key: process.env.GOOGLE_BOT_KEY,
  });
  await doc.loadInfo(); // loads document properties and worksheets

  console.log(doc.title);

  logger.info('🥳 Create All file success');

  return () => {};
}
