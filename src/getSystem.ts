import { System } from "./models/System";

const getSystem = (): System => ({
    platform:  process.platform,
    arch: process.arch
});

export default getSystem;
