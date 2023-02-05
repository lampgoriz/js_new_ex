class Data {
    constructor() {
        this._notes = [
            // {
            //     noteId: 0,
            //     header: 'H0',
            //     body: 'b0',
            //     state: 'active',
            //     date: null,
            // },
        ]
    }

    getNotes() {
        return this._notes;
    }

    addNote(header, body, state, date) {
        let noteId = this._getLastNoteId() + 1;
        this._notes.push({noteId, header, body, state, date});
        this._saveNoteToLocalStorage(noteId, {noteId, header, body, state, date});
        return noteId;
    }

    changeNoteState(noteId, state) {
        this._notes[noteId].state = state;
        this._saveNoteToLocalStorage(noteId, this._notes[noteId])
    }

    deleteNote(noteId) {
        this._notes.splice(noteId, 1);
        // this._deleteNoteFromLocalStorage(noteId);
        this._changeNoteIds();
    }

    restoreNotesFromLocalStorage() {
        if(localStorage.length > 0 ){
            for (let i = 0; i < localStorage.length; i++){
                let note = localStorage.getItem(i);
                this._notes.push(JSON.parse(localStorage.getItem(i)));
            }
        }
    }

    _changeNoteIds(){
        for (let i = 0; i < this._notes.length; i++){
            this._notes[i].noteId = i;
        }
        this._changeNoteLocalStorageIds();
    }

    _getLastNoteId() {
        return this._notes.length-1;
    }

    _saveNoteToLocalStorage(noteId, noteItem) {
        localStorage.setItem(noteId, JSON.stringify(noteItem));
    }

    _deleteNoteFromLocalStorage(noteId) {
        localStorage.removeItem(`${noteId}`)
    }

    _changeNoteLocalStorageIds(){
        for (let i = 0; i < localStorage.length; i++){
            this._saveNoteToLocalStorage(i, this._notes[i]);
            if(i == localStorage.length - 1){
                this._deleteNoteFromLocalStorage(i);
            }
        }
    }
}