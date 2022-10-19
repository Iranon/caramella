import { spawn } from "child_process";
import { GUM } from "./gumInstance";

const runGum = (args: string[] = []) => {
    
    spawn(`${GUM.getInstance().exec}`, args, {stdio: 'inherit'});
};

export default runGum;
