import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    username: Yup
            .string()
            .lowercase('Chartacters must be in lowercase')
            .strict()
            .required('Required'),
    age: Yup
            .number()
            .positive('Has to be a positive number and greater than 0')
            .integer()
            .max(99, 'Max value is 99')
            .required('Required'),
    email: Yup
            .string()
            .email('Must be a valid email')
            .required('Required'),
    password: Yup
            .string()
            .min(6, 'Must have 6 characters at least')
            .required('Required'),
    createdOn: Yup
            .date()
            .default(() => new Date()),
});

export default validationSchema;