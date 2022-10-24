const fs = require('fs')
const menu = './menu.json'

class Contenedor {
    Save = async(archivo) => {
        try{
            if(fs.existsSync(menu)){
                let read = JSON.parse(await fs.promises.readFile(menu, 'utf-8'));
                let newObj = read[read.length-1].id+1;
                archivo.id= newObj;
                read.push(archivo);
                await fs.promises.writeFile(menu, JSON.stringify(read, null, 2));
                return {status: "sucess", message: "nuevo producto agregado al menu"}
            }else{
                archivo.id = 1
                await fs.promises.writeFile(menu, JSON.stringify([archivo], null, 2))
                return {status: "sucess", message: "Nuevo producto"}
            }
        }catch(err){
            return {status: "error", message: err.message}
        }
    }
    getById = async(Number) => {
        if(fs.existsSync(menu)){
            let read = JSON.parse(await fs.promises.readFile(menu, 'utf-8'));
            let encuentraId = read.find(obj => obj.id === Number)
            console.log(encuentraId)
        }else {
            console.log("No se ha encontrado el elemento")
        }
    }
    getAll = async() => {
        if(fs.existsSync(menu)){
            let read = JSON.parse(await fs.promises.readFile(menu, 'utf-8'));
            console.log(read)
        }else {
            console.log("No se ha encontrado archivos")
        }
    }
    deleteById = async(Number) => {
        if(fs.existsSync(menu)){
            let read = JSON.parse(await fs.promises.readFile(menu, 'utf-8'));
            let encuentraId = read.filter(obj => obj.id !== Number);
            await fs.promises.writeFile(menu, JSON.stringify(encuentraId, null, 2));
        }
    }
    deleteAll = async() => {
        if(fs.existsSync(menu)){
            await fs.promises.writeFile(menu, JSON.stringify([], null, 2));
        }
    }
}
module.exports = Contenedor
