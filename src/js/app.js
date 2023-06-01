export default function orderByProps(obj, keys) {
    const objectKeys = [];
    const sortedObject = [];

    for (const key in obj) {
        if (keys.includes(key)) {
            objectKeys.push({ key, value: obj[key] });
        } else {
            sortedObject.push({ key, value: obj[key] });
        }
    }
    
    sortedObject.sort((a, b) => {
        if (a.key > b.key) {
            return 1;
        }
        return -1;
    });

    return [...objectKeys, ...sortedObject];
}