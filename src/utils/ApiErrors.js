class ApiErrors extends Error{
    constructor( statusCode, message="something went Wrong",success=false, errors=[],stack=''){
        super(message);
        this.statusCode= statusCode;
        this.data=null;
        this.message= message;
        this.success = false;
        this.errors = errors;

        if(stack){
            this.stack = stack;
            Error.captureStackTrace(this,this.constructor);
        }
    }
}

export {ApiErrors}