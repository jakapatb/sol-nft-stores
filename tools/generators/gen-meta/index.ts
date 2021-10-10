import { Tree, logger } from '@nrwl/devkit'
import { getGETNFT } from './apps/GETNFT'
require('dotenv').config()

const fs = require('fs')
const path = require('path')

interface Schema {
  name: string
}
export default async function (host: Tree, schema: Schema) {
  let metaList = []
  switch (schema.name) {
    case 'get-nft':
      metaList = await getGETNFT()
      break
    default:
      break
  }

  if (metaList.length !== 0) {
    //?GENERATE JSONs
    const dirPath = `./apps/${schema.name}/assets`
    fs.mkdirSync(dirPath, { recursive: true })
    metaList.forEach((meta, index) => {
      fs.writeFileSync(`${dirPath}/${index}.json`, JSON.stringify(meta))
    })
  }

  return () => {}
}
