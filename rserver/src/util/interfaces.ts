export namespace R {
    export interface Input {
        code : [string]
    }
    
    export interface Data {
        id : string
        timestamp : number
        code : [string]
        outputImageNumber? : number
    }
    
    export interface Response {
        success : boolean
        stdout? : string
        stderr? : string
        id? : string
        outputImageNumber? : number
    }
}
