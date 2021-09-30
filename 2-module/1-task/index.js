function sumSalary(salaries) {
    let sumSar = 0;
    for (let key in salaries) {
        if (typeof salaries[key] === 'number' && !isNaN(salaries[key]) && isFinite(salaries[key])) {
            sumSar += salaries[key];
        }
    }
    return sumSar;
}
