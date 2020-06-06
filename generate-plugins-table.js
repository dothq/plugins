const fs = require("fs")
const { resolve } = require("path")

const p = fs.readdirSync(__dirname)

let rmd = fs.readFileSync(resolve(__dirname, "README.md"))

let newTable = `
### Packages

| Package Name |
|:---|
`

p.forEach(dir => {
    if(!dir.startsWith(".") && !dir.includes(".") && dir !== "LICENSE") {
        newTable += `| [\`@dothq/${dir}\`](/tree/master/${dir}) |\n`
    }
})

const table = rmd.toString().substring(rmd.toString().lastIndexOf("<!-- PLUGINS-TABLE:START -->") + 1, rmd.toString().lastIndexOf("<!-- PLUGINS-TABLE:END -->")).split("!-- PLUGINS-TABLE:START -->")[1]

rmd = rmd.toString().replace(table, "")

rmd = rmd.replace(/<!-- PLUGINS-TABLE:START --><!-- PLUGINS-TABLE:END -->/, `<!-- PLUGINS-TABLE:START -->${newTable}<!-- PLUGINS-TABLE:END -->`)

fs.writeFileSync(resolve(__dirname, "README.md"), rmd)