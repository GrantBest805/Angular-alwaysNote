import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  @Input() childComponentNotes;
  @Output() deleteNoteEvent = new EventEmitter();
  @Output() updateNoteEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  deleteNote(note) {
    this.deleteNoteEvent.emit(note);
  }
  updateNote(notes){
    this.updateNoteEvent.emit(notes);
  }
}
