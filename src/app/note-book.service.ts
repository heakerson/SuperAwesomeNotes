import { Injectable } from '@angular/core';
import { Note } from './note/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteBookService {

  public Notes : Array<Note>  = [];

  constructor() {
    this.InitNotes();
  }

  private InitNotes(){
    if(localStorage.getItem("notes")){
      this.Notes = JSON.parse(localStorage.getItem("notes"));
    }
  }

  public AddNote(note : Note){
    this.Notes.push(note);
    this.SaveNotes();
  }

  public RemoveNote(id : string){
    let toRemove : Note = this.GetNote(id);
    let toRemoveIndex : number = this.Notes.indexOf(toRemove);
    this.Notes.splice(toRemoveIndex, 1);
    this.SaveNotes();
  }

  public GetNote(id : string) : Note{
    return this.Notes.find(n => n.Id == id);
  }

  public UpdateNote(title : string, content : string, note : Note){
    this.SaveNotes();
  }

  public SaveNotes(){
    localStorage.setItem("notes", JSON.stringify(this.Notes));
  }

  public SearchNotes(searchString : string) : Array<Note>{
    return this.Notes.filter(n => 
      n.Content.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) > -1 || 
      n.Title.toLocaleLowerCase().indexOf(searchString.toLocaleLowerCase()) > -1);
  }
}
