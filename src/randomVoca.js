import listVoca from "./listVoca.json"

export default function randomVoca() {
    var min = 0;
    var max = listVoca.length - 1;
    var random = parseInt(min + (Math.random() * (max - min)));
    return listVoca.slice(random, random+1);
}