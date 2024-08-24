import React from "react";
import { useSelector, useDispatch } from "react-redux";
import requestSignUp from "../../services/auth/authService";
import { Link } from "react-router-dom";
import { login } from "../../redux/authSlice";

const validateRegister = (data) => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!data.name) {
    errors.name = "El nombre es obligatorio";
  } else if (data.name.length < 3) {
    errors.name = "El nombre debe tener al menos 3 caracteres";
  } else if (data.name.length > 50) {
    errors.name = "El nombre no debe tener más de 50 caracteres";
  } else if (!/^[a-zA-Z\s]*$/.test(data.name)) {
    errors.name = "El nombre solo puede contener letras y espacios";
  } 

  if (!data.email) {
    errors.email = "El correo electrónico es obligatorio";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "El correo electrónico no es válido";
  }

  if (!data.password) {
    errors.password = "La contraseña es obligatoria";
  } else if (data.password.length < 6) {
    errors.password = "La contraseña debe tener al menos 6 caracteres";
  } else if (data.password.length > 20) {
    errors.password = "La contraseña no debe tener más de 20 caracteres";
  } else if (!/[a-z]/.test(data.password)) {
    errors.password = "La contraseña debe contener al menos una minúscula";
  } else if (!/[A-Z]/.test(data.password)) {
    errors.password = "La contraseña debe contener al menos una mayúscula";
  } else if (!/[0-9]/.test(data.password)) {
    errors.password = "La contraseña debe contener al menos un número";
  } else if (!/[^a-zA-Z0-9]/.test(data.password)) {
    errors.password =
      "La contraseña debe contener al menos un caracter especial";
  }


  return errors;
};

const SignUp = () => {
  // Estado que almacena los datos del formulario
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);

  // Función que se encarga de manejar el inicio de sesión
  const handleSignUp = async (event) => {
    event.preventDefault();
    const validationErrors = validateRegister(formData);
    setErrors(validationErrors);

    if (errors.name || errors.email || errors.password) {
      return; // No se envía la solicitud si hay errores presentes
    }
    const result = await requestSignUp(formData);
    localStorage.setItem("email", formData.email);
    if (result.success) {
      dispatch(login());
    }
  };

  // Función para manejar los cambios en los inputs
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">SignUp</h2>
        <form onSubmit={handleSignUp}>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="Nombre"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && (
              <p className="text-red-500 text-xs italic">{errors.name}</p>
            )}
          </div>
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="******************"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <p className="text-red-500 text-xs italic">{errors.password}</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex justify-center w-full"
              type="submit"
            >
              Registrarse
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center">
          <span className="flex items-center gap-2">
            ¿Ya tienes cuenta?
            <Link
              to="/registro"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              Ingresar
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;