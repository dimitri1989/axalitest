import  data from '../data/data';
export function wordText(item) {
    
    var counter = [];
    for (let i = 0; i < data().length; i++) {
      if (item.conditions.includes(data()[i].words)) {
        if (counter.length < 2) {
          counter.push(data()[i].translate);
          if (counter.length === 3) {
            break;
          }
        }
      }
    }
    return counter;
  }