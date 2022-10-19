import * as readline from 'readline';

const getUserInput = async (msg: string): Promise<string> => {
    const rl = readline.createInterface({input: process.stdin, output: process.stdout});

      const res = new Promise<string>(resolve => {
        rl.setPrompt(msg); rl.prompt();
        rl.on('line', (input) => {
            resolve(input)
            rl.close();
        })
    });
    
    return await res;
};

const resolveUserInput = async (
    msg: string, affermative: string[] = ['', 'y', 'yes'], negative: string[] = ['n', 'no']
): Promise<boolean | null> => {
    
    const input = await getUserInput(msg);

    if (affermative.includes(input.trim().toLowerCase())) return true;
    if (negative.includes(input.trim().toLowerCase())) return false;
    return null;
};

export default resolveUserInput;
