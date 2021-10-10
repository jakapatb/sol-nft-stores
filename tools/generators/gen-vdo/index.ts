import { Tree } from '@nrwl/devkit'
require('dotenv').config()

const child_process = require('child_process')

interface Schema {
  mode: string
  application: string
}
export default async function (host: Tree, schema: Schema) {
  const child = child_process.spawn('remotion', [schema.mode, `./libs/vdo-creator/src/apps/example/index.tsx`])
  child.stdout.on('data', function (data) {
    console.log('stdout: ' + data)
  })
  return () => {}
}
