export function todayText(todayText, data) {
    //ტექსტი დღეს ამინდის აღწერა 
    var counter = [];
    for (let i = 0; i < data.length; i++) {
      //console.log(todayText.includes(data[i].words));
      if (todayText.includes(data[i].words)) {
        if (counter.length < 2) {
          counter.push(data[i].translate);
          if (counter.length === 3) {
            break;
          }
        }
      }
    }

    // const text = data.map((text)=>{
    //   console.log(text.words.includes(todayText),1);
    //   if(text.word === todayText){
    //     //console.log(text.word === todayText);
    //     return text.translate
    //   }
    // })

    return counter;
  }