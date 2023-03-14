function bubbleSort(nums) {
    let n = nums.length
    for(let j = 0; j < n - 1; j++) {
        let isSort = true
        for(let i = 0; i < n - j - 1; i++) {
            if (nums[i] > nums[i + 1]) {
                isSort = false
                let temp = nums[i];
                nums[i] = nums[i + 1];
                nums[i + 1] = temp;
            } else {
                continue
            }
        }
        if (isSort) break;
    }
}

function insertSort(nums) {
    let n = nums.length;
    for(let i = 1; i < n ; i++) {
        let ai = nums[i];
        let j = i - 1
        while(j >= 0 && nums[j] > ai) {
            nums[j+1] = nums[j];
            j--
        }
        nums[j+1] = ai
    }
}

function selectSort(nums) {
    let n = nums.length;
    for(let i = 0; i < n - 1; i++) {
        let min = i
        for(let j = i+1; j < n; j++) {
            if (nums[min] > nums[j]) {
                min = j
            }
        }
        if (min != i) {
            let temp = nums[i]
            nums[i] = nums[min]
            nums[min] = temp 
        }
    }
}

let nums = [5,3,2,7,8,1,2]
insertSort(nums)
console.log(nums)