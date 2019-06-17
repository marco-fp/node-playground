function sort(values) {
    mergesort(values, [], 0, values.length - 1);
}

function mergesort(values, helper, low, high) {
    if (low < high) {
        const mid = Math.floor((low + high) / 2);
        mergesort(values, helper, low, mid);
        mergesort(values, helper, mid + 1, high);
        merge(values, helper, low, mid, high);
    }
}

function merge(values, helper, low, mid, high) {
    for (let i = low; i <= high; i++) {
        helper[i] = values[i];
    }

    let left = low;
    let right = mid + 1;
    let current = low;

    while (left <= mid && right <= high) {
        if (helper[left] <= helper[right]) {
            values[current] = helper[left];
            left++;
        } else {
            values[current] = helper[right];
            right++;
        }
        current++;
    }

    const remaining = mid - left;
    for (let i = 0; i <= remaining; i++) {
        values[current + i] = helper[left + i];
    }
}


const test = () => {
    const values = [2, 45, 7, 0, 2, 5, 67, 5, 3, 9];
    sort(values);
    console.log(values)
}

test();