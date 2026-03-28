#!/usr/bin/env node
const { execSync } = require('node:child_process')

const mappings = [
  {
    directory: 'packages/ui-vue/src/components',
    outFile: 'packages/ui-vue/src/components/index.ts',
  },
  {
    directory: 'packages/ui-react/src/components',
    outFile: 'packages/ui-react/src/components/index.ts',
  },
]

for (const map of mappings) {
  console.log(`Generating barrel for ${map.directory}...`)
  execSync(
    `barrelsby --directory ${map.directory} --outFile ${map.outFile} --delete --exclude node_modules --exclude dist`,
    { stdio: 'inherit' },
  )
}

console.log('All barrels generated ✅')
