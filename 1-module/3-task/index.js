function ucFirst(str) {
    if (!str) {
        return str;
    } else {
        return str[0].toUpperCase() + str.slice(1);
    }
}

let str = 'вася';
alert(ucFirst(str));
str = '';
alert(ucFirst(str));
