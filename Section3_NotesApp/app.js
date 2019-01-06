const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");

const title = {
    describe: "Title of note",
    demand: true,
    alias: "t"
};
const body = {
    describe: "Body of note",
    demand: true,
    alias: "b"
}

const argv = yargs
    .command("add", "Add a new note", {
        title, body
    })
    .command("list", "List all notes")
    .command("read", "Read a note", {
        title
    })
    .command("remove", "Remove a note", {
        title
    })
    .help()
    .argv;
const command = argv._[0];

if (command === "add") {
    var note = notes.addNote(argv.title, argv.body);
    if(note) {
        console.log("Note added");
        notes.logNote(note);
    } else {
        console.log("Title is already used");
    }
} else if (command === "list") {
    var list = notes.getAll();
    console.log(`Printing ${list.length} note(s).`);
    list.forEach((note) =>{
        notes.logNote(note);
    });
} else if (command === "read") {
    var note = notes.getNote(argv.title);
    if(note) {
        console.log("Note found");
        notes.logNote(note);
    } else {
        console.log("Note not found");
    }
} else if (command === "remove") {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed" : "Note not found";
    console.log(message);
} else {
    console.log("Command not recognized");
};