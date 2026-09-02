import { useState } from 'react';
import axios from 'axios';

export function useForm(initialValues, validateFn, apiEndpoint = 'https://jsonplaceholder.typicode.com/posts') {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [apiError, setApiError] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error for this field as the user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSuccess(false);
    setApiError(null);
    setResponseData(null);

    // Validate form values
    const validationErrors = validateFn ? validateFn(values) : {};
    setErrors(validationErrors);

    // If there are validation errors, do not proceed with submission
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Axios POST request to API endpoint
      const response = await axios.post(apiEndpoint, values, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      setResponseData(response.data);
      setIsSuccess(true);
      // Optional: reset form values after successful submission
      setValues(initialValues);
      setErrors({});
    } catch (err) {
      console.error('API Form Submission Error:', err);
      const errorMessage =
        err.response?.data?.message || err.message || 'Failed to submit form. Please try again.';
      setApiError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setIsSuccess(false);
    setApiError(null);
    setResponseData(null);
  };

  return {
    values,
    errors,
    isSubmitting,
    isSuccess,
    apiError,
    responseData,
    handleChange,
    handleSubmit,
    resetForm,
    setValues,
  };
}
