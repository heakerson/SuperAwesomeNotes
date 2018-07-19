import { Component, OnInit } from '@angular/core';
import { NoteBookService } from '../note-book.service';
import { Note } from '../note/Note';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'funzies-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  Note : Note = new Note("", "");

  constructor(private notebook : NoteBookService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.Note = this.notebook.GetNote(params['Id']);
    });
  }

  SaveNote(note : Note){
    this.notebook.UpdateNote(note.Title, note.Content, note);
  }

}
