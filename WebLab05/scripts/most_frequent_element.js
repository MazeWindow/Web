function mostFrequentElementCounter(array){
  var elementsEntries=[]
  var arrayLength=array.length

  for(i=0;i<arrayLength; i++){
    elementsEntries.push([array[i], 1])
    var currentMostFrequentIndex=0
    var currentmostFrequentElement=array[currentMostFrequentIndex]
    for(j=0;j<elementsEntries.length;j++)
    {
      if(i!=j && array[i]==elementsEntries[j][0]){
        elementsEntries[j][1]++
      }
      if(elementsEntries[currentMostFrequentIndex][1]<elementsEntries[j][1]){
        currentMostFrequentIndex=j
      }
    }
  }
  console.log(`Most frequent element ${array[currentMostFrequentIndex]}, index ${currentMostFrequentIndex}`)
  return [array[currentMostFrequentIndex], currentMostFrequentIndex]
}

mostFrequentElementCounter([1,1,3,1,4,5,4,5,4,3,4])
