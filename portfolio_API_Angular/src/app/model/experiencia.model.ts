export class experiencia{
    id?:number = 0 ;
    empresa: String;
    puesto: String;
    img: String;
    start: String;
    end: String; 

    constructor(empresa:String, puesto:String,img:String,start:String,end:String){
        this.empresa = empresa;
        this.puesto = puesto;
        this.img = img;
        this.start = start;
        this.end = end;  
    }
}