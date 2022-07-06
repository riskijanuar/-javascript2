/*Method Number - toString()
Metode ini mengembalikan string yang mewakili objek yang ditentukan. 
Metode toString() mem-parsing argumen pertamanya, 
dan mencoba mengembalikan representasi string dalam radix (basis) yang ditentukan.*/
num = 15
console.log("num.toString() is" + " " +num.toString())

/*Method Number - valueOf()
Metode ini mengembalikan nilai primitif dari objek angka yang ditentukan.*/
console.log("num.valueOf() is" + " " +num.valueOf())

/*Method String - charAt()
Metode ini yang mengembalikan karakter dari indeks yang ditentukan. Karakter dalam string diindeks dari kiri ke kanan. 
Indeks karakter pertama adalah 0, dan indeks karakter terakhir dalam string, disebut stringName, 
adalah stringName.length – 1.*/
const nama = "Riski Januar Ramadlon"
console.log("nama.charAt() is" + " " + nama.charAt(4))

/*Method String - concat()
Metode ini menambah 2 atau lebih string dan akan mengembalikan ke sebuah string baru*/
let namaDepan = "Riski"
let namaBelakang = "Januar Ramadlon"
const namaPanjang = namaDepan.concat(namaBelakang)
console.log("Concat String is" + " " + namaPanjang )

/*Method String - indexOf()
Method ini 
mengembalikan indeks di dalam objek String panggilan dari kemunculan pertama dari nilai yang ditentukan, 
memulai pencarian di fromIndex atau -1 jika nilainya tidak ditemukan.*/
const idx = nama.indexOf("v")
console.log("indexOF() found String :" + " " + idx)

/*Method String - length()
Method ini mengembalikan jumlah karakter dalam string.*/
console.log("nama.length is " + " " + nama.length)

/*Method String - search()
Method ini mengeksekusi pencarian kecocokan antara ekspresi reguler dan objek String ini.*/
let a = "Riski"
if(nama.search(a)== "riski"){
    console.log("Tidak Ada")
}else{
    console.log("Ada")
}

/*Method String - split()
Method ini membagi objek String menjadi array string dengan memisahkan string menjadi substring.*/
let tes = "Di gudang ada buah, dan banyak sekali sayuran"
let spl = tes.split(" ", 3)
console.log(spl)

/*Method Array - join()
Method ini menggabungkan semua elemen array menjadi string.*/
const arr = ["Kucing", "Kuda", "Kerbau"]
let b = arr.join()
console.log("String: " + " " + b)

/*Method Array - splice()
Method ini mengubah konten array, menambahkan elemen baru sambil menghapus elemen lama.*/
const x = ["Baju", "Sendal", "Topi", "Kalung"]
let remove =  x.splice(2,1,"Gelang")
console.log ("After adding : " + " " + x)
console.log ("removed is : " + " " + remove)