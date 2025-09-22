import { readFileSync, writeFileSync, readdirSync, statSync, existsSync } from 'fs'
import { join } from 'path'

console.log('🔧 Fixing contentlayer assert syntax...')

function fixAssert(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8')
    const fixed = content.replace(/assert\s*{\s*type:\s*['"]json['"]\s*}/g, 'with { type: "json" }')
    
    if (content !== fixed) {
      writeFileSync(filePath, fixed, 'utf8')
      console.log(`✅ Fixed: ${filePath}`)
      return true
    }
    return false
  } catch (error) {
    console.log(`⚠️  Could not fix ${filePath}: ${error.message}`)
    return false
  }
}

function processDir(dirPath) {
  if (!existsSync(dirPath)) {
    console.log(`ℹ️  Directory ${dirPath} does not exist, skipping...`)
    return 0
  }

  try {
    const items = readdirSync(dirPath)
    let fixedCount = 0
    
    for (const item of items) {
      const fullPath = join(dirPath, item)
      const stat = statSync(fullPath)
      
      if (stat.isDirectory()) {
        fixedCount += processDir(fullPath)
      } else if (item.endsWith('.mjs')) {
        if (fixAssert(fullPath)) {
          fixedCount++
        }
      }
    }
    
    return fixedCount
  } catch (error) {
    console.log(`⚠️  Could not process directory ${dirPath}: ${error.message}`)
    return 0
  }
}

// Fix contentlayer files
const totalFixed = processDir('.contentlayer/generated')
console.log(`🎉 Fixed ${totalFixed} files with assert syntax issues`)
console.log('✅ Contentlayer assert fix completed')
