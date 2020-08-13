import listAlphaBetKanji from "./listAlphaBetKanji.json"
import listAlphaBetKatakana from "./listAlphaBetKatakana.json"
import listAlphaBetHiragana from "./listAlphaBetHiragana.json"

export default function randomVoca(ngonNgu) {
    var min = 0;
    var max = 0;
    var array = null;
    if (ngonNgu==="Kanji") {
        max = listAlphaBetKanji.length - 1;
        var random = parseInt(min + (Math.random() * (max - min)));
        return listAlphaBetKanji.slice(random, random+1);
    } 
    else if (ngonNgu==="Katakana") {
        max = listAlphaBetKatakana.length - 1;
        var random = parseInt(min + (Math.random() * (max - min)));
        return listAlphaBetKatakana.slice(random, random+1);
    } else if (ngonNgu==="Hiragana") {
        max = listAlphaBetHiragana.length - 1;
        var random = parseInt(min + (Math.random() * (max - min)));
        return listAlphaBetHiragana.slice(random, random+1);
    }
    return array
}