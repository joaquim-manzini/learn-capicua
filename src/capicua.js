const reverse = (s) => {
    return s.split("").reverse().join("");
}

const mirror = (num) => {
    return num === reverse(num);
}

const capicua = (num) => {
    while (mirror(num) === false) {
        // console.log(num);
        num = `${parseInt(num) + parseInt(reverse(num))}`;
    }

    return num;
}

module.exports = { reverse, mirror, capicua }; 