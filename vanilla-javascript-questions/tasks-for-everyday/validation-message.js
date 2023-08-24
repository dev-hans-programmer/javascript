// Format the backend error messages for frontend
const backendErrors = {
   email: {
      errors: [
         {
            message: 'Email cannot be blank',
         },
      ],
   },
   password: {
      errors: [
         {
            message: 'Password cannot be empty',
         },
         {
            message: 'It must contain 8 characters',
         },
      ],
   },
};

function formatMessages(errors = {}) {
   const result = [];
   for (const key in errors) {
      const error =
         key +
         ': ' +
         errors[key].errors.map(({ message }) => message).join(', ');
      result.push(error);
   }
   return result;
}

console.log(formatMessages(backendErrors));
