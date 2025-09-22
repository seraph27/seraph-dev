import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join } from 'path'

function fixAssert(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8')
    const fixed = content.replace(/assert\s*{\s*type:\s*['"]json['"]\s*}/g, 'with { type: "json" }')

    if (content !== fixed) {
      writeFileSync(filePath, fixed, 'utf8')
      console.log(`✅ Fixed: ${filePath}`)
    }
  } catch (error) {
    // Ignore errors
  }
}

function processDir(dirPath) {
  try {
    const items = readdirSync(dirPath)
    for (const item of items) {
      const fullPath = join(dirPath, item)
      const stat = statSync(fullPath)

      if (stat.isDirectory()) {
        processDir(fullPath)
      } else if (item.endsWith('.mjs')) {
        fixAssert(fullPath)
      }
    }
  } catch (error) {
    // Ignore errors
  }
}

// Fix contentlayer files
processDir('.contentlayer/generated')
