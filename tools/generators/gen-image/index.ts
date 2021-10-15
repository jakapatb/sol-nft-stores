import { Tree, logger } from '@nrwl/devkit'
import * as dayjs from 'dayjs'
require('dotenv').config()
import { createCanvas, loadImage } from 'canvas'
const fs = require('fs')
const path = require('path')

interface Schema {
  name: string
}
export default async function (host: Tree, schema: Schema) {
  const width = 600
  const height = 600
  fs.mkdirSync(`dist/images/${schema.name}`, { recursive: true })
  const tempArr = [...new Array(1)]
  logger.info('creating')
  tempArr.forEach((_, index) => {
    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')
    const text = index
    context.font = 'bold 34pt Menlo'
    context.textAlign = 'center'
    context.fillStyle = '#ffffff'
    context.fillText(`${schema.name}: ${text}`, 200, 450)
    // loadImage('path/to/png.png').then((image) => {
    //     context.drawImage(image, 375, 150, 350, 350)

    //   })
    fs.writeFileSync(`dist/images/${schema.name}/${index}.png`, canvas.toBuffer('image/png'), function (err) {
      if (err) throw err
    })
  })

  return () => {}
}
