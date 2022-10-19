#! /usr/bin/env node


import installGum from "./gum/installGum";
import checkGum from "./gum/checkGum";
import { GUM } from "./gum/gumInstance";
import runGum from "./gum/runGum";
import resolveUserInput from "./resolveUserInput";

const args = process.argv.slice(2); // command line arguments start at position 2

const gum: GUM = GUM.getInstance(); //GUM singleton instance

// Running
//-------------
(async () => {
    try {
        gum.exec = await checkGum();
        // console.log("\nGUM executable found!\n");
        runGum(args);
    }
    catch (err) {
        console.log(err);
        console.log("\nGUM executable not found.\n");
        await resolveUserInput("Do you want to install it? (Y/n)\n> ") && await installGum();
    }
})();
