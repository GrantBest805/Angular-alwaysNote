import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';
import { Note } from './note';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  notes: Array<Note>
  constructor(private _noteService: NoteService) { }

  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes() {
    this.notes = this._noteService.getNotes();
    console.log(this.notes);
  }

  addNote(note){
    this._noteService.addNoteToNotes(note);
  }
  deleteNote(note) {
    this._noteService.deleteNote(note);
  }
  updateNote(notes) {
    this._noteService.updateNote(notes);
  }

}
