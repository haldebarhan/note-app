import { NoteManager } from "./services/NoteManager";

const manager = new NoteManager(); // Create a new Note Manager

// Create Two Notes
manager.CreateNote(
  "Learn TypeScript",
  "Focus on TypeScript basics and advanced features."
);
manager.CreateNote("Note App Project", "Implement a simple Note-taking app.");

manager.listNotes();

console.log("\nSearching for notes containing 'TypeScript':");
const foundNotes = manager.searchNotesByKeyword("TypeScript");
foundNotes.forEach((note) => console.log(`Found: ${note.title}`));


console.log("\nSaving notes ...")
manager.saveNotes()
