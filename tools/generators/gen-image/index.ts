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
  const width = 1200
  const height = 600
  fs.mkdirSync('dist/images', { recursive: true })
  const tempArr = [...new Array(2)]
  logger.info('creating')
  tempArr.forEach((_, index) => {
    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')
    const text = index
    context.fillStyle = '#000000'
    context.fillRect(0, 0, width, height)
    context.font = 'bold 70pt Menlo'
    context.textAlign = 'center'
    context.fillStyle = '#ffffff'
    context.fillText(`Hello ${schema.name}: ${text}`, 600, 170)
    // loadImage('path/to/png.png').then((image) => {
    //     context.drawImage(image, 375, 150, 350, 350)

    //   })
    fs.writeFileSync(`dist/images/${index}.png`, canvas.toBuffer('image/png'), function (err) {
      if (err) throw err
    })
  })

  return () => {}
}
