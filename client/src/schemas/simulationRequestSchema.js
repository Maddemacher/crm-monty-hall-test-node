import * as yup from 'yup';

const schema = yup.object().shape({
  games: yup
    .number()
    .required()
    .positive()
    .integer()
    .min(1),
  doors: yup
    .number()
    .required()
    .positive()
    .integer()
    .min(1),
  changing: yup.boolean().required()
});

export default schema;
