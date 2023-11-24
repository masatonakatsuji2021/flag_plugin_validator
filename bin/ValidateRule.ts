export default class ValidateRule{

    private inputData;

    constructor(inputData){
        this.inputData = inputData;
    }
    
    public notEmpty(value : string | number | boolean){

        if(
            value === undefined ||
            value === null ||
            value === false ||
            value === ""
        ){
            return false;
        }

        return true;
    }

    public length(value : string | number | boolean, arg : Array<number>){

        if(!this.notEmpty(value)){
            return true;
        }

        const length : number = arg[0];
 
        if(value.toString().length != length){
            return false;
        }

        return true;
    }

    public minLength(value : string | number | boolean, arg : Array<number>){

        if(!this.notEmpty(value)){
            return true;
        }

        const length : number = arg[0];

        if(value.toString().length < length){
            return false;
        }

        return true;
    }

    public maxLength(value : string | number | boolean, arg : Array<number>){

        if(!this.notEmpty(value)){
            return true;
        }

        const length : number = arg[0];

        if(value.toString().length > length){
            return false;
        }

        return true;
    }

    public betweenLength(value : string | number | boolean, arg : Array<number>){

        if(!this.notEmpty(value)){
            return true;
        }

        const min : number = arg[0];
        const max : number = arg[1];

        if(value.toString().length < min){
            return false;
        }

        if(value.toString().length > max){
            return false;
        }

        return true;
    }

    
    public value(value : string | number | boolean, arg : Array<number>){

        if(!this.notEmpty(value)){
            return true;
        }

        const length : number = arg[0];
 
        if(parseInt(value.toString()) != length){
            return false;
        }

        return true;
    }

    
    public minValue(value : string | number | boolean, arg : Array<number>){

        if(!this.notEmpty(value)){
            return true;
        }

        const length : number = arg[0];
 
        if(parseInt(value.toString()) < length){
            return false;
        }

        return true;
    }

    public maxValue(value : string | number | boolean, arg : Array<number>){

        if(!this.notEmpty(value)){
            return true;
        }

        const length : number = arg[0];
 
        if(parseInt(value.toString()) > length){
            return false;
        }

        return true;
    }

    public betweenValue(value : string | number | boolean, arg : Array<number>){

        if(!this.notEmpty(value)){
            return true;
        }

        const length : number = arg[0];
 
        if(parseInt(value.toString()) > length){
            return false;
        }

        return true;
    }
}