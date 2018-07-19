import { Component, OnInit } from '@angular/core';
import { Note } from '../note/Note';
import { NoteBookService } from '../note-book.service';

@Component({
  selector: 'funzies-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  Title : string = "";
  Content : string = "";

  constructor(private notebook : NoteBookService) { }

  ngOnInit() {
  }

  TitleKeyup(title : string){
    this.Title = title;
  }

  ContentKeyup(content : string){
    this.Content = content;
  }

  CreateNote(){

    if(this.Title == "" || this.Content == ""){
      alert("You must fill in both spaces!");
    }
    else{
      let note = new Note(this.Title, this.Content);
      this.notebook.AddNote(note);

      this.Title = "";
      this.Content = "";
    }

  }

}
