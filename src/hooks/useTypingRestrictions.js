import { useState, useEffect } from 'react';

const useTypingRestrictions = (values) => {
  const validationQuery = '^[a-zA-Z0-9 ]{0,14}$';
  const [nameingError, setNameingError] = useState(values);
  let valuesArray;
  if (values.constructor !== Array) {
    valuesArray = [values];
  } else {
    valuesArray = values;
  }
  useEffect(() => {
    valuesArray.forEach((value) => {
      if (!value.match(validationQuery)) {
        setNameingError(true);
      } else { setNameingError(false); }
    });
  }, [values]);
  return nameingError;
};
export default useTypingRestrictions;
