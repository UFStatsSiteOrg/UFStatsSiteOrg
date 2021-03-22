import { R } from "../util/interfaces"
import { v4 as uuidv4 } from 'uuid';

const requestTransformer = (requestBody : R.Input) : R.Data => {
    return {
        id : uuidv4(),
        timestamp : Date.now(),
        code : requestBody.code
    }
}

const codeTransformer = (rData : R.Data) : R.Data => {
    let i;
    for (i = 0; i < rData.code.length; i++) {
        if (rData.code[i].startsWith("plot(")) {
            rData.code.splice(i - 1, 0, `jpeg(file=\"./output/${rData.id}.jpg\")`);
            // rData.code.splice(i + 1, 0, "dev.off()");
            i += 1;
        }
    }
    return rData;
} 

export const inputTransform = (requestBody : R.Input) : R.Data => {
    let transformedRequest : R.Data = requestTransformer(requestBody);
    let transformed : R.Data = codeTransformer(transformedRequest);
    return transformed;
}