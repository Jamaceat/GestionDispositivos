export const validationMessages: any = {
  first_name: {
    required: 'El nombre es requerido.',
  },
  last_name: {
    required: 'El apellido es requerido.',
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
