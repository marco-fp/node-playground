function binarySearch(values, x) {
    let low = 0;
    let high = values.length - 1;
    let mid;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);

        if (values[mid] < x) {
            low = mid + 1;
        } else if (values[mid] > x) {
            high = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}


const test = () => {
    const values = [0, 2, 2, 3, 5, 5, 7, 9, 45, 67];
    console.log(binarySearch(values, 45));
}

test();
