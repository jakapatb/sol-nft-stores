import { Tree } from '@nrwl/devkit'
require('dotenv').config()

const child_process = require('child_process')

interface Schema {
  mode: string
  application: string
}
export default async function (host: Tree, schema: Schema) {
  let options = []
  switch (schema.application) {
    case 'preview':
      options = [schema.mode, `./libs/vdo-creator/src/apps/${schema.application}/index.tsx`]
      break
    case 'render':
      options = [schema.mode, `./libs/vdo-creator/src/apps/${schema.application}/index.tsx`, 'Scene', 'dist/video.mp4']
      break
    default:
      break
  }
  const child = child_process.spawn('remotion', options)
  child.stdout.on('data', function (data) {
    console.log('stdout: ' + data)
  })
  return () => {}
}
