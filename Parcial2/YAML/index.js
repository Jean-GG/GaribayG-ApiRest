const fs = require('fs');
//const path = require('path');
const yaml = require('js-yaml');

try {
    //const archivo = fs.readFileSync(path.join(__dirname,"/test.yaml"),'utf8')
    const fileContents = fs.readFileSync('./test.yaml', 'utf8');
    //const estYaml = YAML.parse(archivo);
    const data = yaml.load(fileContents);
    console.log(data);
    console.log(data.nombre);
    console.log(data.apellido);
    console.log(data.edad);
    //console.log(typeof estYaml)
    console.table(data)
} catch (e) {
    console.error(e);
} 
