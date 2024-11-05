const getValueNumber = (size) => Number(size.slice(0, -2))

const getElementWidth = (content, padding, border) => {
    return getValueNumber(content) + getValueNumber(padding) * 2 + getValueNumber(border) * 2
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
