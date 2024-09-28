function bubble_sort(nums) {
    for (let i = 0; i < nums.length - 1; i++){
        for (let j = 0; j < nums.length - i ; j ++){
            if(nums[j] > nums[j + 1]){
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
            }
        }
    }

    return nums;
}

console.log(bubble_sort([1, 4, 2, 6, 9, 3]))

// Time complexity: O(n^2)
// Space complexity: O(1)