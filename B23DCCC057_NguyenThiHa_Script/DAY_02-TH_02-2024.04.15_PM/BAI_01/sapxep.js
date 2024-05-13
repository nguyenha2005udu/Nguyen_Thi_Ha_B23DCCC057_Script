/*Hãy tạo 1 mảng ngẫu nhiên ngẫu nhiên sau đó viết 2 hàm:
Hàm sắp xếp theo thứ tự tăng dần*/
arr = ['5', '3', '9', '1', '4', '6'];
function sapXep() {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
}
sapXep();
console.log(arr)
