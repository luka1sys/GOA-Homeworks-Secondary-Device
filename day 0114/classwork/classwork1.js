
function copyObj(x1, x2) {
    for (let key in x2) {
        x1[key] = x2[key];
    }
    return x1;
}