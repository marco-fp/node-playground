function paintFill(img, nColor, oColor, r, c) {
	if ( r < 0 || c < 0 || r >= img.length || c >= img[0].length) {
	    return false;
    }
    if (img[r][c] === oColor) {
        img[r][c] = nColor;

        paintFill(img, nColor, oColor, r + 1, c);
        paintFill(img, nColor, oColor, r, c + 1);
        paintFill(img, nColor, oColor, r - 1, c);
        paintFill(img, nColor, oColor, r, c - 1);
    }

    return true;
}

const test = () => {
    const img = [
        ['red', 'red', 'red', 'red'],
        ['red', 'blue', 'blue', 'red'],
        ['red', 'blue', 'blue', 'red'],
        ['red', 'red', 'red', 'red'],
        ['red', 'red', 'red', 'red'],
]
    paintFill(img, 'green', 'red', 0, 0);

    console.log(img)
}

test();