function camelize(str) {
    if (!str) {
        return str;
    }
    return str
        .split('-')
        .map((item, index) => {
            if (index === 0) {
                return item;
            }
            let firstLetter = item.slice(0, 1);
            let rest = item.slice(1);
            return `${firstLetter.toUpperCase()}${rest}`;
        })
        .join('');

}
