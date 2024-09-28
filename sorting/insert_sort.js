function insert_sort(nums) {
    for (let i = 1; i < nums.length; i++){
        for (let j = i ; j >= 0; j--){
            if(nums[j] < nums[j-1]){
                [nums[j], nums[j-1]] = [nums[j-1], nums[j]]
            }
        }
    }

    return nums;
}

console.log(insert_sort([1, 4, 2, 6, 9, 3]))

// Time complexity: O(n^2)
// Space complexity: O(1)