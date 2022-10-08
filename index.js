class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre= nombre;
        this.apellido= apellido;
        this.libros= libros;
        this.mascotas= mascotas;
    }
    getFullName(){
        return (`${this.nombre} ${this.apellido}`)
    }
    addMascota(){   
            let newMascota= "gatito";
            this.mascotas.push(newMascota)
            return(`${newMascota}= ${this.mascotas}`)
        
        }
        countMascotas(){
        return (`${this.mascotas.length}`)
    }
    addBook(){
        let newBook= {nombre: "Hamlet", autor: "william Shakespeare"};
        this.libros.push(newBook);
        return(this.libros.map(obj => ` ${obj.nombre}/${obj.autor}`))
    }
    getBookNames(){
        return(this.libros.map(obj => obj.nombre))
    }
}

const Perez= new Usuario(
    `Pepito`,
    'Perez', 
    libros= [{nombre: "El Resplandor", autor: "Stephen King"}, 
             {nombre: "El Principito", autor: "Antoine de Saint-Exupéry"}],
    mascotas= ["mono", "perro"]
    );


const list = document.getElementById("list");

let body = document.createElement("div")
body.innerHTML= `<p>nombre: ${Perez.getFullName()}</p>
                 <p>nueva mascota: ${Perez.addMascota()}</p> 
                 <p>numero de mascotas: ${Perez.countMascotas()}</p>
                 <p>nuevo libro: ${Perez.addBook()}</p>
                 <p>titulos de libros:${Perez.getBookNames()}</p>`

                 list.append(body)
                 