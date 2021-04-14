import { cleanupFiles, createScriptFile } from "../io/filehandler";
import { R } from "../util/interfaces";
import Container from "./Container";

export namespace DockerController {
    export const execute = async ( data : R.Data ) : Promise<R.Response> => {
        // Create .R file in directory to be shared with container
        await createScriptFile(data);
        // Run R code on Docker container
        let rResponse : R.Response = await new Container(data.id).run();
        // Cleanup file system
        await cleanupFiles(data.id);
        // Transform response to include extra data for image access
        return {
            ...rResponse,
            id : data.id,
            outputImageNumber : data.outputImageNumber
        }
    }
}
