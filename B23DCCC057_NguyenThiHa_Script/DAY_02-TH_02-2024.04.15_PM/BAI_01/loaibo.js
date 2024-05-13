//Hàm loại bỏ các phần tử trùng lặp, sao cho mỗi phần tử chỉ xuất hiện 1 lần
arr = ['5', '3', '9', '1', '4', '6', '3', '1', '4'];
arr1 = [];
function loaiBo(){
    for(var i = 0; i < arr.length; i ++){
        if (!arr1.includes(arr[i])) {
            arr1.push(arr[i]);
        }
    }
}
loaiBo();
console.log(arr1);