import { createWriteStream, unlink, readdir } from 'fs';
import { R } from "../util/interfaces";
import { promisify } from 'util';

const unlinkPromise = promisify(unlink);
const readdirPromise = promisify(readdir);

export const createScriptFile = async (data : R.Data) : Promise<void> => {
    return new Promise( (resolve, reject) => {
        let file = createWriteStream(__dirname + `/../../containers/scripts/${data.id}.R` , {flags : 'a+'});
        // On file open event, write each code line to file then resolve promise
        file.on('open', () => {
            data.code.forEach( 
                codeLine => file.write(codeLine + '\n')
            )
            file.end();
            resolve();
        });
    });
}

const cleanupScripts = async (id : string) : Promise<void> => {
    // Removes .R file with uuid
    await unlinkPromise(__dirname + `/../../containers/scripts/${id}.R`);
}

const cleanupImage = async (imageID : string) : Promise<void> => {
    await unlinkPromise(__dirname + `/../../containers/output/${imageID}.jpg`)
}

const cleanupImages = async (id : string) : Promise<void> => {
    // Reads all files in output image directory
    const files : string[] = await readdirPromise(__dirname + '/../../containers/output');
    // Checks to see if any files match a regex with the uuid. Files can not be deleted directly because of numbers appended to them in the case of a single request having multiple response images.
    files.forEach(
        async file => {
            if (file.match(new RegExp(`${id}.*`))) {
                await unlinkPromise(__dirname + `/../../containers/output/${file}`);
            }
        }
    )
}

export const cleanupFiles = async (id : string) : Promise<void> => {
    await cleanupScripts(id);
    // await cleanupImages(id);
}