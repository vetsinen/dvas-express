const JSONFileStorage = require('node-json-file-storage');

const file_uri = __dirname + "/your-storage-name.json";
const storage = new JSONFileStorage(__dirname + "/events.json");

module.exports = storage;

// const everything = storage.all();
// console.log(everything)

function fillstorage() {
    const obj_1 = 'some_content';
    const obj_2 = {bar: 'baz'};

// save to file
    const id = storage.put(obj_2);
    console.log(id)
    const everything = storage.all();
    console.log(everything)
}