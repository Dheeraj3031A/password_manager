import {TStoredPassword} from '@app/types/Password';

function removeDuplicatePasswords(
  firstArray: TStoredPassword[],
  secondArray: TStoredPassword[],
) {
  const mergedArray = firstArray.concat(secondArray);

  let skipped = 0;
  let filteredArray: TStoredPassword[] = mergedArray.reduce(
    (acc: TStoredPassword[], current) => {
      const isDuplicate = acc.find((item) => item.id === current.id);

      if (isDuplicate) {
        skipped++;
        return acc;
      } else {
        return [...acc, current];
      }
    },
    [],
  );

  return {filteredArray, skipped};
}

export {removeDuplicatePasswords};
