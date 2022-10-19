import { spawn } from 'child_process';
import { GUM_VERSION } from '../globals';

const getGum = (target: string) => new Promise((resolve, reject) => {
    if (!target) reject('ABORTED: OS not recognized!');
    
    console.log("Target: ", target);
    const cmd = `curl -OL https://github.com/charmbracelet/gum/releases/download/v${GUM_VERSION}/${target} --progress-bar`;
    console.log(`Downloading Gum (path: ${__dirname})...\n`);
    spawn(cmd, {
        shell: true,
        cwd: __dirname,
        stdio: [process.stdin, process.stdout, process.stderr]
        })
        .on('close', (code: number) => {
            if (code === 0) {
                resolve("-> Download Completed!");
            }
            else {
                reject(`ERROR executing ${cmd}`);
            }
        });
});

export default getGum;
