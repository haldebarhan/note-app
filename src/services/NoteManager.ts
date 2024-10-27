import { Note } from "../models/Note";

export class NoteManager {
  private notes: Note[] = [];
  private currentId: number = 1;

  /**
   *Add new note in note list
   *
   * @param {string} title note title
   * @param {string} content note content
   */
  addNote(title: string, content: string): void {
    const newNote = new Note(this.currentId++, title, content);
    this.notes.push(newNote);
    console.log(`Note added: ${title}`);
  }

  /**
   * Display all note in list note
   *
   */
  listNotes(): void {
    console.log("Listing all notes:");
    this.notes.forEach((note) => {
      console.log(
        `ID: ${note.id}, Title: ${note.title}, Content: ${note.content}`
      );
    });
  }

  /**
   * An asynchronous operation that simulates the recording of notes in a database
   *
   */
  async saveNotes(): Promise<void> {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      console.log("Notes have been saved successfully!");
    } catch (error) {
      console.error("Failed to save notes:", error);
    }
  }

  /**
   * Find a note by its id
   *
   * @param {number} id the note ID
   * @returns Note or undefined
   */
  findNoteById(id: number): Note | undefined {
    return this.notes.find((note) => note.id === id);
  }

  /**
   * find and delete note in note list by its id
   *
   * @param {number} id note id
   */
  deleteNoteById(id: number): void {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index === -1) {
      throw new Error(`Note with ID ${id} not found`);
    }
    this.notes.splice(index, 1);
    console.log(`Note with ID ${id} deleted successfully.`);
  }

  /**
   * Recursive search for a keyword in the content of all notes
   *
   * @param {string} keyword word to search
   * @param {number} index position in note list
   * @returns {Note[]} A list of notes containing the word to search for
   */
  searchNotesByKeyword(keyword: string, index: number = 0): Note[] {
    if (index >= this.notes.length) {
      return [];
    }

    const note = this.notes[index];
    const result = this.searchNotesByKeyword(keyword, index + 1);
    if (note.content.includes(keyword)) {
      result.unshift(note);
    }
    return result;
  }
}
