function selection_sort(nums) {
    for (let i = 0; i < nums.length - 1; i++) {
        let min = i;

        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min = j;
            }
        }
        [nums[i], nums[min]] = [nums[min], nums[i]]
    }
    return nums;
}

console.log(selection_sort([1, 4, 2, 6, 9, 3]))