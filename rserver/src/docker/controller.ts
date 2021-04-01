import { cleanupFiles, createScriptFile } from "../io/filehandler";
import { R } from "../util/interfaces";
import RContainer from "./RContainer";

export namespace DockerController {
    export const execute = async ( data : R.Data ) : Promise<R.Response> => {
        // Create .R file in directory to be shared with container
        await createScriptFile(data);
        // Run R code on Docker container
        let rResponse : R.Response = await new RContainer(data.id).runRoutine();
        // Cleanup file system
        await cleanupFiles(data.id);
        return rResponse;
    }
}
