function HarmlessRansomNote(noteText, magazineText){
    var noteArr = noteText.split('');
    var magArr = magazineText.split('');
    var magObj = {}; // Hash Table
    
    magArr.forEach((word) => {
        magObj[word] ? magObj[word] +=1 : magObj[word] =1
    }) // magObj = {filled:1}

    var noteIsPossible = true;
    noteArr.forEach(word => {
        if(magArr[word]){
            magObj[word]--;
            if(magObj[word]<0){
                noteIsPossible = false
            }
        }else{
            noteIsPossible = false
        }
    })

}

HarmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');