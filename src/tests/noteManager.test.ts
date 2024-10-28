import { NoteManager } from "../services/NoteManager";

describe("NoteManager Tests", () => {
  let manager: NoteManager;

  // Create new Note Manager and new note before all tests
  beforeEach(() => {
    manager = new NoteManager();
    manager.CreateNote("Test Note", "This is a test note.");
  });

  test("Add and list notes", () => {
    expect(manager["notes"].length).toBe(1);
    manager.CreateNote("Second Note", "Another test note.");
    expect(manager["notes"].length).toBe(2);
  });

  test("Find note by keyword", () => {
    const result = manager.searchNotesByKeyword("test");
    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Test Note");
  });

  test("Throw error when deleting non-existent note", () => {
    expect(() => manager.deleteNoteById(99)).toThrow(
      "Note with ID 99 not found"
    );
  });
});
