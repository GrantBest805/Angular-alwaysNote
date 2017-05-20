import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Note } from './../note';
@Component({
  selector: 'app-note-edit',
  templateUrl: './note-edit.component.html',
  styleUrls: ['./note-edit.component.css']
})
export class NoteEditComponent implements OnInit {
  @Input() currentNote;
  editNote = new Note();
  @Output() updateNoteEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
    Object.assign(this.editNote, this.currentNote) 
  }

  updateNote() {
    this.updateNoteEvent.emit({edited: this.editNote, original: this.currentNote})
    this.currentNote.edit = false;
  }

}
