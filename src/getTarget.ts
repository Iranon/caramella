import { GUM_VERSION } from "./globals";
import { System } from "./models/System";

const getTarget = ({platform, arch}: System) => {
    let targetPlatform: string;
    let targetArch: string;
    let targetFileExtension: 'tar.gz' | 'zip' = "tar.gz";
    
    switch(platform) {
        case "darwin":
            targetPlatform = "Darwin";
            break;
        case "linux":
            targetPlatform = "linux";
            break;
        case "win32":
            targetPlatform = "Windows";
            targetFileExtension = "zip"
            break;
        default:
            targetPlatform = '';
            break;
    };

    switch(arch) {
        case "arm64":
            targetArch = "arm64";
            break;
        case "x64":
            targetArch = "x86_64";
            break;
        default:
            targetArch = '';
            break;
    };

    return {
        urn: `gum_${GUM_VERSION}_${targetPlatform}_${targetArch}.${targetFileExtension}`,
        extension: targetFileExtension
    };
};

export default getTarget;
