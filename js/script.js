
document.getElementById('start_color').addEventListener('click', main);
function main()
{
    let words = getWordsArray();
    colorWords(words);
}

async function colorWords(words)
{
    for (const word of words) {
        word.classList.add('black');
        await delay(1000);
        deleteClassBlack();
    }
}
function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function deleteClassBlack(){
    document.getElementsByClassName('black')[0].classList.remove('black');
}
function getWordsArray(){
    let text = document.getElementsByClassName('text')[0].innerHTML;
    if (text.substring(0, 5) === "<span") return document.getElementsByClassName('word');
    text = text.replace(/\s+/g, ' ').trim();
    let wordsArray = text.split(' ');
    let html = '';
    for (const word of wordsArray) {
        html += '<span class="word">' + word + '</span> ';
    }
    document.getElementsByClassName('text')[0].innerHTML = html;
    return document.getElementsByClassName('word');
}
