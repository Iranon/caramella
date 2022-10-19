import getSystem from "../getSystem";
import getTarget from "../getTarget";
import extractGum from "./extractGum";
import getGum from "./getGum";

const installGum = async () => {
    const {urn, extension} = getTarget(getSystem());
    try {
        await getGum(urn);
        await extractGum(urn, extension);
    }
    catch (err) {
        console.log(err);
    }
};

export default installGum;
