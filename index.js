function theBeatlesPlay(musicians,instruments){
  var array = []
  for(let i=0;i<musicians.length;i++){
    var string = musicians[i] + ' plays ' + instruments[i]
    array[i]=string
  }
  return array
}

function johnLennonfacts(facts){
  let i=0
  var newfacts = []
  while(i<facts.length){
    var string = facts[i]+'!!!'
    newfacts[i]=string
    i++
  }
  return newfacts
}