import { createWriteStream } from 'fs';
import { R } from "../util/interfaces";

export const createScriptFile = async (data : R.Data) : Promise<void> => {
    return new Promise( (resolve, reject) => {
        let file = createWriteStream(__dirname + `/../../containers/scripts/${data.id}.R` , {flags : 'a+'});
        file.on('open', () => {
            data.code.forEach(
                codeLine => file.write(codeLine + '\n')
            )
            file.end();
            resolve();
        });
    });
}