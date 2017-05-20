import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from './../note';

@Component({
  selector: 'app-note-new',
  templateUrl: './note-new.component.html',
  styleUrls: ['./note-new.component.css']
})
export class NoteNewComponent implements OnInit {
  newNote = new Note();
  @Output() addNoteEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  addNote() {
    this.addNoteEvent.emit(this.newNote);
    this.newNote = new Note();
  }
}
