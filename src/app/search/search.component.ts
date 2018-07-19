import { Component, OnInit } from '@angular/core';
import { Note } from '../note/Note';
import { NoteBookService } from '../note-book.service';

@Component({
  selector: 'funzies-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  SearchTerm : string = "";
  FilteredNotes : Array<Note> = [];

  constructor(private notebook : NoteBookService) { }

  ngOnInit() {
    this.FilteredNotes = this.notebook.Notes;
  }

  DeleteNote(note : Note){
    this.notebook.RemoveNote(note.Id);
  }

  Filter(){
    if(this.SearchTerm == ""){
      this.FilteredNotes = this.notebook.Notes;
    }
    else{
      this.FilteredNotes = this.notebook.SearchNotes(this.SearchTerm);
    }
  }

}
