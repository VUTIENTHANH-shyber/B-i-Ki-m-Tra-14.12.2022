// Câu 1 : Nhập vào a và b từ prompt, tính tổng các số từ a đến b 
// Nhập vào a và b từ prompt, tính tổng các số từ a đến b
let a = prompt("Nhập vào số a");
let b = prompt("Nhập vào số b");
let sum = 0;
for (let i = a; i <= b; i++) {
    sum += i;
}
console.log(sum);

// Câu 2 : Nhập vào a và b từ prompt, tính tổng các số lẻ từ a đến b
let a = prompt("Nhập vào số a");
let b = prompt("Nhập vào số b");
let sum = 0;
for (let i = a; i <= b; i++) {
    if (i % 2 != 0) {
        sum += i;
    }
}
console.log(sum);

//Câu 3 : Nhập vào a , b , c . Tìm số lớn nhất
let a = prompt("Nhập vào số a");
let b = prompt("Nhập vào số b");
let c = prompt("Nhập vào số c");
let max = a;
if (b > max) {
    max = b;
}
if (c > max) {
    max = c;
}
console.log(max);

// Câu 4 : Nhập vào a và b , in ra các số chia hết cho 3 và lớn hơn 20
let a = prompt("Nhập vào số a");
let b = prompt("Nhập vào số b");
for (let i = a; i <= b; i++) {
    if (i % 3 == 0 && i > 20) {
        console.log(i);
    }
}

// Câu 5 : Viết hàm 



// 1. Hàm nhận vào 3 số a,b,c . Nếu a,b,c là 3 cạnh của 1 tam giác thì trả về diện tích của tam giác đó 
// Cách 1 :
function dienTichTamGiac(a,b,c){
    if(a+b>c && a+c>b && b+c>a){
        var p = (a+b+c)/2;
        var s = Math.sqrt(p*(p-a)*(p-b)*(p-c));
        return s;
    }
    return 'Khong phai tam giac';
}
console.log(dienTichTamGiac(3,4,5));
// Cách 2:
let p = (a + b + c) / 2;
let s = Math.sqrt(p * (p - a) * (p - b) * (p - c));
if( a + b < c && a + c < b && b + c < a){

return " Làm gì có tam giác nào nhỏ hơn hạt bụi";

}


if(a + b > c && a + c > b && b + c > a){
    return "Diện tích tam giác là: " + s;
}

if( a + b <= c || a + c <= b || b + c <= a){
    return "Không phải là 3 cạnh của tam giác";
}
console.log(dienTichTamGiac(3,4,5));




// 2. Nhập vào 1 mảng và số X , đếm số lần xuất hiện vị trí X trong mảng
function demSoLanXuatHien(arr,x){
    var count = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] == x){
            count++;
        }
    }
    return count;
}
console.log(demSoLanXuatHien([1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1],prompt("Nhập số cần tìm : ")));

// 3. Nhập vào mảng , tìm số lớn thứ 2 trong mảng 
function timSoLonThuHai(arr){
    var max1 = arr[0];
    var max2 = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i] > max1){
            max2 = max1;
            max1 = arr[i];
        }
    }
    return max2;
}
console.log(timSoLonThuHai([1,2,3,4,5,6,7,8,9]));

// 4. Nhận vào 1 chuỗi
let str = prompt("Nhập chuỗi (có thể là 1 string hoặc số tùy vào thầy Như Anh ):");
let arr = str.split(" ");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}


  

