
function shortestDistancesToAllVowels(string){
  /*service variables*/
  var wordLength=string.length
  var vowelsTable=["a","o","u","e","i"], vowelsIndexes=[]

  /*finding vowels*/
  for(i=0;i<wordLength;i++){
    for(letter of vowelsTable){
      if(letter==string[i]){
        vowelsIndexes.push(i)
      }
    }
  }

  /*finding distances*/
  var shortestDistancesTable=[]
  var vowelCount=vowelsIndexes.length
  var distancesToAllVowels
  for(i=0; i<wordLength;i++){
    let distancesToAllVowels=[]
    for(j=0;j<vowelCount;j++){
      distancesToAllVowels.push(Math.abs(i-vowelsIndexes[j]))
    }
    shortestDistancesTable.push(Math.min.apply(null,distancesToAllVowels))
  }
  return shortestDistancesTable
}

console.log(shortestDistancesToAllVowels("hopper"))
console.log(shortestDistancesToAllVowels("Nebuchadnezzar"))
