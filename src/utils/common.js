export const createPaginationGroups = (requiredTabs, data) => {
  const elementGroupsArray = [];
  const tabsNumber = Math.ceil(data.length / requiredTabs);
  for (let index = 0; index < tabsNumber; index++) {
    elementGroupsArray.push(data.splice(0, requiredTabs));
  }
  return elementGroupsArray;
};

export const containIlegalCharacters = (values, validationQuery = '^[a-zA-Z0-9 ]{0,14}$') => {
  const valuesArray = values.constructor !== Array ? [values] : values;
  return (valuesArray.some((value) => !value.match(validationQuery)));
};
