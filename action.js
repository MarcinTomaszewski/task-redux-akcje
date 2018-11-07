import uuid from uuid;

//definicja typów akcji
const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const REMOVE_COMMENT = 'DELETE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

//definicja kreatorów akcji
function addComment(text) {
    return {
        type: ADD_COMMENT,
        text,
        id: uuid.v4()
    }
}

function editComment(id, text) {
    return {
        type: EDIT_COMMENT,
        text,
        id
    }
}

function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id        
    }
}

function thumbUpComment(id, handup) {
    return {
        type: THUMB_UP_COMMENT,
        id,
        handup: handup++
    }
}

function thumbDownComment(id, handdown) {
    return {
        type: THUMB_DOWN_COMMENT,
        id,
        handdown: handdown--
    }
}