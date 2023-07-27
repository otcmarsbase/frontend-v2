export function hasAllProperties(obj, props) {
    for (let i = 0; i < props.length; i++) {
        if (!obj.hasOwnProperty(props[i]))
            return false;
    }
    return true;
}

export function hasNoProperties(obj, props) {
    for (let i = 0; i < props.length; i++) {
        if (obj.hasOwnProperty(props[i]))
            return true;
    }
    return false;
}


