import sum from './basic';


export default function setUpAttacks(items, shield = true) {
  let result = [];
  for (let index = 0; index < items.length; index++) {
    result.push(mass);
  }

  function mass(p, num) {
    let name = num;
    let masWithDif = [];
    let remains;
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      let b = false;
      for (let index = 0; index < items.length; index++) {
        const el = items[index];
        if (el.health >= p / items.length) {
          b = true;
        }
      }
      if (p % items.length == 0) {
        if (b) {
          element.health -= p / items.length;
          if (element.health > 0) {
            masWithDif.push(element);
          }
        } else {
          if (element.health - p / items.length >= 0) {
            element.health -= p / items.length;
          } else {
            element.health -= p / items.length;
            remains -= element.health;
          }
          if (element.health > 0) {
            masWithDif.push(element);
          }
        }
      } else if (p % items.length > 0) {
        let n = (p - p % items.length) / items.length;
        if (b) {
          element.health -= n;
          if (element.name == items[name].name) {
            if (element.health >= p % items.length) {
              element.health -= p % items.length;
            }
          }
          if (element.health > 0) {
            masWithDif.push(element);
          }
        } else {
          if (element.health - n >= 0) {
            element.health -= n;
            if (element.name == items[name].name) {
              if (element.health >= p % items.length) {
                element.health -= p % items.length;
              }
            }
          } else {
            element.health -= n;
            remains -= element.health;
          }
          if (element.health > 0) {
            masWithDif.push(element);
          }
        }
      }
    }
    return masWithDif;
  }
  return result;
}
