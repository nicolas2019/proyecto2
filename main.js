/*
NOTAS:(CURSO DE UDEMY VIDEO 79-80-81......)
1)Por consola: npm init | npm install express --save | npm install body-parser --save
2)crear repositorio en github : 'proyecto2'
3)Mandar a repositorio por servidor HEROKU (idem Proyecto3_Web(Render))
*/
require("./variableglobal.js"); //modulo con variables globales
const paqExpres = require("express")
let expres = new paqExpres();

expres.get("/usuarios", (req, res) => { //Obtener de web
    res.json("usando get")
})

//Para que funcione el post:____________________________________
const bodyparser = require("body-parser")
expres.use(bodyparser.urlencoded({ extended: false }))
expres.use(bodyparser.json());

expres.post("/usuarios", (req, res) => { //Envio a web
        let datosbody = req.body;
        if (datosbody.nombre === undefined) {
            res.status(400).json({
                mensaje: 'no se cargo el nombre'
            })

        } else { //el status-code es 200 
            res.json({
                persona: datosbody
            })
        }
    })
    //_______________________________________________________________
expres.put("/usuarios/:id", (req, res) => { //actualizacion

    let elId = req.params.id; //Va a leer lo que pongamos en el postman despues de /usuarios/
    res.json({
        elId
    })
})

expres.delete("/usuarios", (req, res) => {
    res.json("usando delete")
})


expres.listen(process.env.PORT, () => {
    console.log(`Puerto ${process.env.PORT} en uso`)
})