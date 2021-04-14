import { R } from "../util/interfaces"
import { v4 as uuidv4 } from 'uuid';

const requestTransformer = (requestBody : R.Input) : R.Data => {
    return {
        id : uuidv4(),
        timestamp : Date.now(),
        code : requestBody.code
    }
}

const codeTransformer = (data : R.Data) : R.Data => {
    let i;
    let outputCounter = 0;
    for (i = 0; i < data.code.length; i++) {
        if (data.code[i].trim().startsWith("plot(")) {
            data.code.splice(i - 1, 0, `jpeg(file=\"./output/${data.id}-${outputCounter}.jpg\")`);
            outputCounter++;
            i += 1; // Skip over inserted jpeg line
        }
    }
    // Append outputCounter to data to indicate number of images to expect
    return {
        ...data,
        outputImageNumber : outputCounter
    }
} 

export const inputTransform = (requestBody : R.Input) : R.Data => {
    let transformedRequest : R.Data = requestTransformer(requestBody);
    let transformed : R.Data = codeTransformer(transformedRequest);
    return transformed;
}