export function findObjectById(arrayOfObjects, targetId) {
  for (const obj of arrayOfObjects) {
    if (obj.song.id === targetId) {
      return obj;
    }
  }
  return null;
}
