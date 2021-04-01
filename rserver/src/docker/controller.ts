import { createScriptFile } from "../io/filehandler";
import { R } from "../util/interfaces";
import RContainer from "./RContainer";

export namespace DockerController {
    export const execute = async ( data : R.Data ) : Promise<R.Response> => {
        await createScriptFile(data);
        let container = new RContainer(data.id);
        return await container.runRoutine();
    }
}
