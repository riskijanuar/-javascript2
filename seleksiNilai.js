function seleksiNilai(nilaiAwal, nilaiAkhir, dataArray){

    if (nilaiAwal > nilaiAkhir) { 
        return("Nilai akhir harus lebih besar dari nilai awal") 
    } 
    if (dataArray.length < 5) { 
        return("Jumlah angka dalam dataArray harus lebih dari 5") 
    }else{ 
        const fin = dataArray.filter(function(num){
            return num > nilaiAwal && num < nilaiAkhir
        })
        fin.sort(function(a, b){return a-b})
        return fin
    }
    return seleksiNilai
}

console.log(seleksiNilai(5,20,[2, 25, 4, 14, 17, 30, 8]))