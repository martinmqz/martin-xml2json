const fs = require('fs')

const name = 'asg-content-wfam' //asg-wfaf-fundprofiles glrd-pages asg-pages glrd-assets-all asg-assets-wfam 'asg-assets-edocs'
const inputPath = '../output/json/'
const outputtPath = '../output/txt/'
const iFilename =  name+'.json'
const oFilename =  name+'.txt'
const json = fs.readFileSync(inputPath+iFilename)
const obj = JSON.parse(json)
const items = obj['tcm:ListSearchResults']['tcm:Item']

console.info(items.length, 'items')

// Format: Name ID  Date  Path
const writer = fs.createWriteStream(outputtPath+oFilename)

for(let item of items) {
  writer.write(`${item.$.IsPublished}\t\t${item.$.Title}\t${item.$.ID}\t${item.$.Modified}\t${item.$.Path}\n`)
}
