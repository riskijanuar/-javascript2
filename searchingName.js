const name = ["Abigail", "Alexandra", "Alison", "Amanda", "Angela", "Bella", "Carol", "Caroline", "Carolyn", "Deirdre", "Diana", "Elizabeth","Ella", "Faith", "Olivia", "Penelope"]

function searchName(cb){
  return cb(name)  
}

function cari(a){
  const fin = a.filter(function(arr){
    return arr.toLowerCase().includes("an")
  })
    fin.splice(3)
    return fin
}

console.log(searchName(cari))