const fs = require('fs');
const readline = require('readline');
const { once } = require('node:events');
// import { creacionGrupos } from './algoritmo';
const algoritmo = require('./algoritmo');

try {
    var user_file = './input.txt';
    var r = readline.createInterface({
        input: fs.createReadStream(user_file)
    });

    async function processFileLineByLine() {
        r.on('line', function (text) {
            if (indexLine++ === 0) {
                let parts = text.split(" ")
                numTrabajadores = parseInt(parts[0]);
                sizeGrupos = parseInt(parts[1]);
            } else {
                rendimiento.push(parseInt(text));
            }
        });
        await once(r, 'close');
    };
    function createOutPutFile(result) {
        let text = "";
        result.forEach(element => {
            text += (element[0] + 1) + " " + (element[1] + 1) + "\n"
        });
        fs.open('output.txt', 'w', function (err, file) {
            if (err) throw err;
            fs.writeFile(file, text, err => {
                if (err) {
                    console.error(err);
                }
                // file written successfully
            });
        });
    }
    var numTrabajadores = 0;
    var sizeGrupos = 0;
    var rendimiento = [];
    let indexLine = 0;
    processFileLineByLine().then(() => {
        if (numTrabajadores != rendimiento.length)
            throw new Error("La cantidad de trabajadores es diferente");

        var resultado = algoritmo.grupos(rendimiento, numTrabajadores, sizeGrupos)
        console.log("En el archivo output.txt se expresa el resultado utilizando la numeración humana (Se cuenta desde 1)")
        createOutPutFile(resultado);
    }).catch((error) => {
        console.error(error)
    });

} catch (error) {
    console.error("errorrr ", error)
    fs.open('output.txt', 'w', function (err, file) {
        if (err) throw err;
        fs.writeFile(file, error.message, err => {
            if (err) {
                console.error(err);
            }
        });
    });
}