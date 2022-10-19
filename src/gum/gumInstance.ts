export class GUM {
    private static instance: GUM;
    private executable: string = '';   //executable path

    private constructor() { };

    public static getInstance(): GUM {
        if (!GUM.instance) GUM.instance = new GUM();

        return GUM.instance;
    };

    public set exec(path: string) {
        this.executable = path;
    };

    public get exec(): string {
        return this.executable;
    };
};
