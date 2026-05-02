const fs = require ('fs');

const promesas = async () => {
    await fs.promises.writeFile('promesas.txt', 'Hola mundo');

    const resultado = await fs.promises.readFile('promesas.txt', 'utf-8');

    console.log(resultado);

    await fs.promises.appendFile('promesas.txt', '\nAdios mundo querido');

    const resultado2 = await fs.promises.readFile('promesas.txt', 'utf-8');

    console.log(resultado2);

    await fs.promises.unlink('promesas.txt');
}

promesas();