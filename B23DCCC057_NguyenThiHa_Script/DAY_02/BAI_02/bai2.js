/*Khởi tạo 1 mảng số nguyên và viết các hàm sau:
Hàm tìm kiếm số nguyên lớn nhất trong mảng*/

arr = ['5', '3', '9', '1', '4', '2'];
function soMax(){
    var max = arr[0];
    for(var i = 1; i < arr.length; i++){
        if(arr[i]> max){
             max = arr[i];
        }
    }
    return max;
}
var Max = soMax();
soMax();
console.log(Max);

//Hàm tìm kiếm các số chính phương trong mảng 

arr = ['5', '3', '9', '16', '4', '2'];
arr2 = [];
function findSoCP() {
    for(var i =0; i < arr.length; i++){
        var a = arr[i];
        var sqrt = Math.sqrt(a)
        if(sqrt === Math.floor(sqrt)){
            arr2.push(a);
        }
    }
}
findSoCP();
console.log(arr2);

//Hàm tìm số lớn hơn trung bình cộng của mảng

arr = ['5', '3', '9', '16', '4', '2'];
arr3 = [];
function findSo(){
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        var k = parseInt(arr[i]);
        sum += k;
    }
    var soPhanTu = arr.length;
    var tbc = sum/ soPhanTu;
    
    for(var i = 0; i < arr.length; i++){
        var k = parseInt(arr[i]);
        if(k > tbc){
            arr3.push(arr[i])
        }
    }
}
findSo();
console.log(arr3);

//Hàm tính trung bình cộng của các số không âm của mảng*/
arr = ['-5', '-3', '9', '16', '4', '2'];
function TinhtbcSoDuong(){
    var sum = 0;
    var soPhanTu = 0;
    for(var i = 0; i < arr.length; i++){
        var k = parseInt(arr[i]);
        if(arr[i]>0)
        sum += k;
        soPhanTu++;
    }
    
    var tbcSoDuong = sum/ soPhanTu;
    return tbcSoDuong;
}
var tbc=TinhtbcSoDuong();
console.log(tbc);


    