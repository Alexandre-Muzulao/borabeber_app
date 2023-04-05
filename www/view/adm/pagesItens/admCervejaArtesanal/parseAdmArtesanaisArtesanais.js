function loadTaps(taps){
  console.log(taps)
  if (taps !== ""){
   tap.map(function(tap, i){
    console.log(tap[i].tapCervejariaName + i.toString())
   })
  }
}