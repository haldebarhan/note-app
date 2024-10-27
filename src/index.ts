import { NoteManager } from "./services/NoteManager";

const manager = new NoteManager();
manager.addNote(
  "Learn TypeScript",
  "Focus on TypeScript basics and advanced features."
);
manager.addNote("Note App Project", "Implement a simple Note-taking app.");
manager.listNotes();

console.log("\nSearching for notes containing 'basic':");
const foundNotes = manager.searchNotesByKeyword("basic");
foundNotes.forEach((note) => console.log(`Found: ${note.title}`));

// Asynchronous operation to save notes
manager.saveNotes().then(() => {
  try {
    // manager.deleteNoteById(99); // This will throw an exception
  } catch (error: any) {
    console.error("Error occurred:", error.message);
  }
});
