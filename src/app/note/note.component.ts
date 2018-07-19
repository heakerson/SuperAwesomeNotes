import { Component, OnInit, Input } from '@angular/core';
import { Note } from './Note';
import { NoteBookService } from '../note-book.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'funzies-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  Note : Note = new Note("", "");

  constructor(private notebook : NoteBookService, private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.Note = this.notebook.GetNote(params['Id']);
    });
  }

}
