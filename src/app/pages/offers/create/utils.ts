export function hasAllProperties(obj, props) {
  for (let i = 0; i < props.length; i++) {
    if (!obj.hasOwnProperty(props[i])) return false;
  }
  return true;
}

export function reorderItems<T>(arr: Array<T>, value: T): Array<T> {
  const index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  arr.push(value);
  arr.reverse();
  return arr;
}
