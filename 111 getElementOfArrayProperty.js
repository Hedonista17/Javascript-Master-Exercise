let obj = {
    key: ['Jamil', 'Albrey']
};

function getElementOfArrayProperty(obj, key, index) {
    if (!obj[key] || !Array.isArray(obj[key]) || !obj[key].length) return undefined
    return obj[key][index]

}