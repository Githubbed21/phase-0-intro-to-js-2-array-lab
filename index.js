// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
    console.log("Name:", name);
    cats.push(name)
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(name) {
    cats.pop(name)
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    return [...cats, name]
}
function prependCat(name) {
    return[...cats, name];
}
function prependCat(name) {
    return [name, ...cats]
}
function removeLastCat(name) {
    return cats.slice(0, -1)
}
function removeFirstCat(name) {
    return cats.slice(1)
}