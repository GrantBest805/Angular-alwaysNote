import { Injectable } from '@angular/core';
import { Note } from './note';

@Injectable()
export class NoteService {
  notes: Array<Note> = [
    new Note(1, "First Note", new Date(), new Date(), false),
    new Note(2, "Second Note", new Date(), new Date(), false),
    new Note(3, "Third Note", new Date(), new Date(), false)
  ]
  constructor() { }

  getNotes() {
    return this.notes;
  }
  addNoteToNotes(note) {
    this.notes.push(note);
  }
  deleteNote(note) {
    var idx = this.notes.indexOf(note);
    this.notes.splice(idx, 1);
  }
  updateNote(notes) {
    var idx = this.notes.indexOf(notes.original);
    this.notes[idx] = notes.edited;
  }
}
