function swapOddEven(x) {
    return (((x & 0xaaaaaaa) >>> 1) | ((x & 0x55555555) << 1));
}