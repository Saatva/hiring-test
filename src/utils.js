export const formatPrice = (dollars) => {
  const groupsOfThree = dollars
    .toString()
    .split('')
    .reverse()
    .reduce((acc, digit) => {
      const prevGroup = acc.length ? acc[acc.length - 1] : '';

      if (prevGroup.length < 3) {
        const previousGroups = acc.length ? acc.slice(0, acc.length - 1) : [];

        return [...previousGroups, prevGroup + digit.toString()];
      }

      return [...acc, digit.toString()];
    }, [])
    .map((group) => group.split('').reverse().join(''));

  return '$' + groupsOfThree.reverse().join(',');
};
