const fs = require('fs')
const xml2js = require('xml2js')

const names = ['asg-content-wfam', 'asg-wfaf-fundprofiles', 'asg-pages', 'asg-assets-wfam', 'asg-assets-edocs']
const name = 'asg-content-wfam' //asg-wfaf-fundprofiles glrd-pages asg-pages glrd-assets-all asg-assets-wfam 'asg-assets-edocs'
const inputPath = '../input/'
const outputPath = '../output/json/'
const iFilename =  name+'.xml'
const oFilename =  name+'.json'
let json = null

// Read
const file = fs.readFileSync(inputPath+iFilename) //, { encoding: 'utf-8', flag: 'r'})

// Parse
xml2js.parseString(file, (err2, result) => {
  if(err2) throw err2
  json = JSON.stringify(result, null, 2)
})

// Write
fs.writeFileSync(outputPath+oFilename, json)

console.info('Done')
