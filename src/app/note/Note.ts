export class Note{

    public Id : string;

    constructor(public Title : string, public Content : string){
        this.GenerateId();
    }

    public GenerateId(){

        this.Id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });

    }
}