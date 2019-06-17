function sort(values) {
    quicksort(values, 0, values.length - 1);
}

function quicksort(values, left, right) {
    const index = partition(values, left, right);

    if (left < index - 1) {
        quicksort(values, left, index - 1);
    }

    if (index < right) {
        quicksort(values, index, right);
    }
}

function partition(values, left, right) {
    const mid = Math.floor((left + right) / 2);
    const pivot = values[mid];

    while (left <= right) {
        while (values[left] < pivot) left++;

        while (values[right] > pivot) right--;

        if (left <= right) {
            const tmp = values[left];
            values[left] = values[right];
            values[right] = tmp;

            left++;
            right--;
        }
    }

    return left;
}

const test = () => {
    const values = [2, 45, 7, 0, 2, 5, 67, 5, 3, 9];
    sort(values);
    console.log(values);
}

test();