class View {
    constructor() {
        this._logic = new Logic();
        this._logic.restoreNotesFromLocalStorage();
        this._form = document.querySelector('.note__form');
        this._notesContainer = document.querySelector('.note__items_container');

        this._form.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(this._form);
            const header = this._checkInputValue(formData.get('header'));
            const body = this._checkInputValue(formData.get('body'));

            if(body && header){
                const date = this._logic.getCurrentDate();
                let noteId = this._logic.addNote(header, body, 'active', date);
                this._renderNote({noteId, header, body, state:'active', date});
            }else {
                this._showErrorMessage();
            }
        });

        this._render();
    }

    _checkInputValue(inputValue) {
        for (let i = 0; i < inputValue.length; i++) {
            if (inputValue !== '' && inputValue[0] !== ' ') {
                return inputValue
            }
        }
        return false;
    }

    _showErrorMessage(){
        let header = this._form.querySelector('.note__form_header');
        let body = this._form.querySelector('.note__form_body');
        header.value = `Incorrect value. No value or space at first symbol`;
        body.innerHTML = `Incorrect value. No value or space at first symbol`;

        this._toggleError(event, header);
        this._toggleError(event, body);
        header.addEventListener('click', (event)=>{
            this._toggleError(event);
            event.currentTarget.value = '';
        })
        body.addEventListener('click', (event)=>{
            this._toggleError(event);
            event.currentTarget.innerHTML = '';
        })
    }

    _toggleError(event, element ){
        if(element){
            element.classList.toggle('input__error');
        } else {
            event.currentTarget.classList.toggle('input__error');
        }
    }

    _render() {
        let notes = this._getNotes();
        for (let i = 0; i < notes.length; i++) {
            this._renderNote(notes[i]);
        }
    }

    _addClickListener(element, func) {
        element.addEventListener('click', (e)=>{
            let that = this;
            func(e, that);
        });
    }

    _changeNoteState(e, that) {
        let noteId = e.currentTarget.parentElement.parentElement.dataset.noteid;
        let buttonValue = e.currentTarget.value
        that._logic.changeNoteState(noteId, buttonValue);

        let noteItem = e.currentTarget.parentElement.parentElement;

        noteItem.classList.toggle('note__item_active');
        noteItem.classList.toggle('note__item_done');
        let state = noteItem.querySelector('.note__item_state');
        state.innerHTML = (buttonValue === 'done') ? 'done' : 'active';

        that._changeButtonActivity(noteItem, buttonValue);
    }

    _changeButtonActivity(noteItem, buttonDataset) {
        let disableBtn = noteItem.querySelector(`[data-button="${buttonDataset}"]`);
        disableBtn.disabled = true;
        if(disableBtn.value === 'active'){
            noteItem.querySelector(`[data-button="done"]`).disabled = false;
        } else if (disableBtn.value === 'done') {
            noteItem.querySelector(`[data-button="active"]`).disabled = false;
        }
    }

    _deleteNote(e, that){
        let noteItem = e.currentTarget.parentElement.parentElement;
        that._logic.deleteNote(noteItem.dataset.noteid);
        noteItem.remove();
    }

    _getNotes() {
        return this._logic.getNotes();
    }

    _renderNote(noteData) {
        let noteId = noteData.noteId;
        let header = noteData.header;
        let body = noteData.body;
        let state = noteData.state;
        let date = noteData.date;

        this._notesContainer.insertAdjacentHTML(
            'afterbegin',
            `<div class="note__item note__item_${state}" data-noteId="${noteId}" >
                        <h2 class="note__item_header">${header}</h2>
                        <p class="note__item_body">${body}</p>
                        <div class="note__item_buttons">
                            <input type="button" class="button note__item_button" value="active" data-button="active" disabled>
                            <input type="button" class="button note__item_button" value="done" data-button="done">
                            <input type="button" class="button note__item_button" value="delete" data-button="delete">
                        </div>
                        <div class="note__item-info">
                            <span class="note__item_state">${state}</span>
                            <span class="note__item_date">${date}</span>
                        </div>
                    </div>`
        )

        let noteItem = document.querySelector(`[data-noteId="${noteId}"]`);
        let progressBtn = noteItem.querySelector(`[data-button="active"]`);
        let doneBtn = noteItem.querySelector(`[data-button="done"]`);
        let deleteBtn = noteItem.querySelector(`[data-button="delete"]`);
        this._addClickListener(progressBtn, this._changeNoteState);
        this._addClickListener(doneBtn, this._changeNoteState);
        this._addClickListener(deleteBtn, this._deleteNote);
    }


}