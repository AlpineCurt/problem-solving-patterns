// add whatever parameters you deem necessary
function separatePositive(arr) {
    let posCount = 0;
    let left = 0;
    let right = arr.length - 1;
    if (arr[0] < 0) {
        check_neg: {
            for (let num of arr) {
                if (num > 0) break check_neg;
            }
            return arr;
        }
    }
    if (arr[0] > 0) {
        check_pos: {
            for (let num of arr) {
                if (num < 0) break check_pos;
            }
            return arr;
        }
    }
    while (left < right) {
        if (arr[left] < arr[right] || arr[right] > 0){
            let val = arr.splice(right, 1);
            arr.splice(left + 1, 0, val[0]);
            left ++;
        } else {
            right --;
        }
    }
    return arr;
}

separatePositive([2, -1, -3, 6, -8, 10]);
//separatePositive([5, 10, -15, 20, 25])
//separatePositive([1, 2, 3]);
//separatePositive([-1, -2, -3]);

module.exports = separatePositive;