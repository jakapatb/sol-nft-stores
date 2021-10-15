import { Tree } from '@nrwl/devkit'
import * as _ from 'lodash'
import { createCanvas, loadImage } from 'canvas'
require('dotenv').config()

const fs = require('fs')

interface Schema {
  name: string
}
//TODO shuffle output
export default async function (host: Tree, schema: Schema) {
  console.log('START GENERATE')
  const dirname = `apps/${schema.name}/assets`
  const parts = ['bg', 'shirt', 'bag', 'head', 'eye', 'core', 'horn', 'sticker'] //
  const rarity = ['C']
  //find all parts

  const payload = parts.reduce((prev, part) => {
    const flatParts = rarity.reduce((prevRank, rank) => {
      const length = fs.readdirSync(dirname + `/input/${part}/${rank}`)?.length || 0
      const metaBuffer = fs.readFileSync(dirname + `/input/${part}/config.json`, 'utf8')
      const meta = JSON.parse(metaBuffer)
      const trait_type = meta?.trait_type

      return [
        ...prevRank,
        [...new Array(length)].map((_, index) => {
          const name = meta?.values?.[rank]?.[index] ?? 'ERROR'
          return { path: dirname + `/input/${part}/${rank}/${index}.png`, rank, name, trait_type }
        })
      ].flat()
    }, [])
    return { ...prev, [part]: flatParts }
  }, {})
  console.log('payload Packed!!!!!!!')

  fs.mkdirSync(dirname + '/.temp', { recursive: true })
  fs.mkdirSync(dirname + '/output', { recursive: true })

  await recursiveDraw(dirname, parts, payload)

  // console.log('TODO shuffle here')
  // const nftLength = fs.readdirSync(dirname + `/.temp`)?.length / 2 || 0

  // if (nftLength) {
  //   const numberArr = [...new Array(nftLength)].map((_, index) => index)
  //   const shuffledArr = _.shuffle(numberArr)
  //   shuffledArr.forEach((oldIndex, newIndex) => {
  //     fs.renameSync(dirname + `/.temp/${oldIndex}.png`, dirname + `/output/${newIndex}.png`)
  //     const metaBuffer = fs.readFileSync(dirname + `/.temp/${oldIndex}.json`, 'utf8')
  //     const meta = JSON.parse(metaBuffer)
  //     const newMeta = {
  //       ...meta,
  //       name: meta?.name + ` #${index}`,
  //       image: `${index}.png`,
  //       properties: {
  //         ...meta?.properties,
  //         files: [
  //           {
  //             uri: `${index}.png`,
  //             type: 'image/png'
  //           }
  //         ]
  //       }
  //     }
  //     fs.writeFileSync(`${dirname}/output/${newIndex}.json`, JSON.stringify(newMeta), function (err) {
  //       if (err) throw err
  //     })
  //   })
  // }
  return () => {}
}

const recursiveDraw = async (dirname: string, partNames: string[], payload, imageStack = [], partIndex = 0) => {
  if (partIndex === partNames.length) {
    //? condition
    let _index = _.uniqueId()
    if (+_index % 10000 !== 0) return
    // if (imageStack.some(({ rank }) => rank === 'S')) {
    //   if (imageStack.some(({ rank }) => rank === 'B')) return true
    // }

    // const attributes = imageStack.map(({ name, trait_type }) => ({ trait_type, value: name }))
    // const metaBuffer = fs.readFileSync(dirname + `/input/config.json`, 'utf8')
    // const defaultMeta = JSON.parse(metaBuffer)?.default || {}

    // const sumMeta = {
    //   ...defaultMeta,
    //   attributes
    // }

    // console.log('start creating JSON #' + _index)

    // await fs.writeFileSync(`${dirname}/.temp/${_index}.json`, JSON.stringify(sumMeta), function (err) {
    //   if (err) throw err
    // })
    console.log('start drawing #' + _index)
    const width = 2000
    const height = 2000
    const canvas = createCanvas(width, height)
    const context = canvas.getContext('2d')

    await imageStack.forEach(async ({ path }) => {
      const image = await loadImage(path)
      context.drawImage(image, 0, 0, width, height)
    })
    await fs.writeFileSync(`${dirname}/.temp/${_index}.png`, canvas.toBuffer('image/png'), function (err) {
      if (err) throw err
    })
    return true
  } else if (partNames[partIndex] && payload[partNames[partIndex]]) {
    for (const partInfo of payload[partNames[partIndex]]) {
      await recursiveDraw(dirname, partNames, payload, [...imageStack, partInfo], partIndex + 1)
    }

    // await payload[partNames[partIndex]]?.forEach(async (partInfo, index) => {
    //   const result = await recursiveDraw(dirname, partNames, payload, [...imageStack, partInfo], partIndex + 1)
    //   return result
    // })
  }
  return false
}
