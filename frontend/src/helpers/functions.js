export function findObjectById(arrayOfObjects, targetId) {
  for (const obj of arrayOfObjects) {
    console.log(obj);
    if (obj.id === targetId) {
      return obj;
    }
  }
  return null;
}
