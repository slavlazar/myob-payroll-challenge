import moment from 'moment';

/**
 * Hook to handle field touch and change values if values are valid dates
 * @param {function} setFieldValue Formik function to update field value
 * @param {function} setFieldTouched Formik function to set field touched
 * @param {string} name Field name
 */
export const useDateInput = (setFieldValue, setFieldTouched, name) => {
  const handleChangeRaw = e => {
    const { name: targetName, value } = e.target;
    const validChars = /^\d{0,2}[./]{0,1}\d{0,2}[./]{0,1}\d{0,4}$/;
    if (!validChars.test(value)) {
      e.preventDefault();
    }

    if (moment(new Date(value)).isValid()) {
      setFieldValue(targetName, value);
      setFieldTouched(targetName, true);
    }
  };

  const handleChange = date => {
    const dateInstance = new Date(date);
    if (moment(dateInstance).isValid()) {
      setFieldValue(name, dateInstance);
      setFieldTouched(name, true);
    }
  };

  return [handleChangeRaw, handleChange];
};
