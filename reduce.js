
const map = [
  {
    A:"banana",
    B:"apple",
    C:"kim",
    D:"lee"
  },

  {
    A:"kim",
    B:"apple",
    C:"banana",
    D:"lee"
  },

  {
    A:"apple",
    B:"banana",
    C:"kim",
    D:"lee"
  }

]

const obj = map.reduce((acc, obj)=>{                    
  let key = obj["A"];
  if(!acc[key]){
    acc[key] = [];
  }
  
  acc[key].push(obj);
  return acc;
},{});

console.log(obj)
