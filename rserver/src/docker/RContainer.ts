import { promisify } from 'util';

const exec = promisify(require('child_process').exec);

export default class RContainer {
    private request_id : string;
    private container_id : string | null = null;
    constructor(request_id : string){
        this.request_id = request_id;
    }

    public async startContainer() : Promise<boolean> {
        try {
            const { stdout, stdeer } = await exec(`docker run -itd -v ${process.env.CONTAINER_FILES_PATH}:$HOME/r -w $HOME/r --entrypoint bash r-base -c 'Rscript ./scripts/${this.request_id}.R'`);
            console.log(`\nStarted container with id: ${stdout}\nScript ${this.request_id}.R executed.`)
            this.container_id = stdout;
            return true;
        } catch (err){
            console.log(err);
            return false;
        }
    }

    public async captureOutput() : Promise<string> {
        try {
            if (this.container_id === null){
                    console.log("Container ID is null.");
                    return "";
            }
            const { stdout, stdeer }  = await exec(`docker logs ${this.container_id}`);
            return stdout;
        } catch (err) {
            console.log(err);
            return "";
        }
    }

    public async cleanupContainer() : Promise<boolean> {
        try {
            await exec(`docker rm --force ${this.container_id}`);
            console.log(`\nContainer deleted with id: ${this.container_id}`);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }        
    }

    public async runRoutine() : Promise<string> {
        await this.startContainer();
        const textOutput : string = await this.captureOutput();
        await this.cleanupContainer();
        return textOutput;
    }

}