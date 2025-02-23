export const validationMessages: any = {
  firstName: {
    required: 'El nombre es requerido.',
  },
  lastName: {
    required: 'El apellido es requerido.',
  },
  document: {
    required: 'El documento es requerido.',
  },
  email: {
    required: 'El correo es requerido.',
    email: 'El correo electronico debe ser valido',
  },
  password: {
    required: 'La contraseña es requerida.',
    minlength: 'La contraseña debe tener minimo 8 caracteres',
  }
};
