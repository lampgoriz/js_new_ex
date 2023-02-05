class Logic {
    constructor() {
        this._data = new Data();
    }

    addNote(header, body, state, date) {
        return this._data.addNote(header, body, state, date);
    }

    deleteNote(noteId) {
        this._data.deleteNote(noteId);
    }

    changeNoteState(noteId, state) {
        this._data.changeNoteState(noteId, state);
    }

    getNotes() {
        return this._data.getNotes();
    }

    getCurrentDate() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }

    restoreNotesFromLocalStorage() {
        this._data.restoreNotesFromLocalStorage();
    }
}