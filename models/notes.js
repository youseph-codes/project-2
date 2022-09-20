const fs = require('fs');

function addingNote(title, body) {
    var note = {
        title: title,
        body: body

    };

    fs.writeFileSync("notes.text", note)
}

module.exports = addNote