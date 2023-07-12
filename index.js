const inputTitle = document.getElementById("inputTitle");
const inputDataElements = document.getElementsByClassName("inputData");

function checkInput() {
    const lowerSongData = songData.map(name => name.toLowerCase());
    if (lowerSongData.includes(inputTitle.value.toLowerCase())) {
        const place = lowerSongData.indexOf(inputTitle.value.toLowerCase());
        inputDataElements[place].textContent = songData[place];
        inputTitle.value = "";
    }
};