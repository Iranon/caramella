import AdmZip from "adm-zip";
import { spawn } from "child_process";
import { mkdir } from "fs/promises";

const extractGum = (urn: string, ext: 'tar.gz' | 'zip') =>
    new Promise<string | undefined>(async (resolve, reject) => {
    //Extracting
    console.log("Extracting...\n");
    try {
        const destination = `${__dirname}/gum`;
        await mkdir(destination, {recursive: true});
        if (ext === 'zip') {
            const archive = new AdmZip(`${__dirname}/${urn}`);
            archive.extractAllToAsync(destination, /*overwrite*/true, undefined);
        }
        else {
            const cmd = `tar -xvzf ${__dirname}/${urn} -C ${destination}`;
            spawn(cmd, {
                shell: true,
                cwd: __dirname,
                stdio: [process.stdin, process.stdout, process.stderr]
            })
            .on('error', error => { console.log(error, `\nExecuting: ${cmd}`) });
        }
        console.log("Extraction complete\n");
        resolve(destination); //extraction destination
    }
    catch {
        reject("ERROR: Invalid or unsupported format.");
    }
});

export default extractGum;
