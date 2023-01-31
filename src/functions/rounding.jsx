export const rounding = (num) => {
    const count = num.toString().includes('.')
        ? num.toString().split('.').pop().length
        : 0;
    if (count > 3) {
        return Math.abs(Number(num.toFixed(4)));
    }
    return Math.abs(num);
};
