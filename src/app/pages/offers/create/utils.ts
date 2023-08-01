import {formDefaultValues} from "@app/pages/offers/create/consts";

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

export function isValidField(field) {
  return field && field.length > 0
}

export function getDefaultValues(typeOfDeal) {
  const draftByTypeOfDeal = JSON.parse(localStorage.getItem(`${typeOfDeal}Draft`));

  if (!draftByTypeOfDeal) {
    return formDefaultValues
  } else {
    return draftByTypeOfDeal
  }
}

export function getRecountedValues(){

}
