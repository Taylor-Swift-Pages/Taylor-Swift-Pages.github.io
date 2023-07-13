const inputTitle = document.getElementById("inputTitle");
const numberCorrect = document.getElementById("numberCorrect");
const inputDataElements = document.getElementsByClassName("inputData");
let numberDone = 0;
numberCorrect.textContent = `${numberDone}/${total}`
function checkInput() {
    const lowerSongData = songData.map(name => name.toLowerCase());
    if (lowerSongData.includes(inputTitle.value.toLowerCase())) {
        const place = lowerSongData.indexOf(inputTitle.value.toLowerCase());
        inputDataElements[place].textContent = songData[place];
        inputTitle.value = "";
        ++numberDone;
        numberCorrect.textContent = `${numberDone}/${total}`
    }
};