import { stat } from "fs/promises";

const checkGum = () => new Promise<string>(async (resolve, reject) => {
    //check if the gum executable exists (if not fs.stat throw an error and trigger the catch branch)
    try {
        await stat(`${__dirname}/gum/gum`);
        resolve(`${__dirname}/gum/gum`);
    }
    catch { //if the executable is not found
        reject('');
    }
});

export default checkGum;
