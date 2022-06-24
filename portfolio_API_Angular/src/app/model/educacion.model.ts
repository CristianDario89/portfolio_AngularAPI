export class educacion{
    id?:number = 0;
    institucion: String;
    title: String;
    img: String;
    start: String;
    end: String; 

    constructor(institucion:String, title:String,img:String,start:String,end:String){
        this.institucion = institucion;
        this.title = title;
        this.img = img;
        this.start = start;
        this.end = end;  
    }
}

export interface Educacion{
    id?:number;
    institucion: String;
    title: String;
    img: String;
    start: String;  
}