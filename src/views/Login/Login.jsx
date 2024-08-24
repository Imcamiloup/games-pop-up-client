// src/views/Login/Login.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import loginUser from "../../services/auth/requestLogin";
import { login} from "../../redux/authSlice";
import { Link } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.jsx";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Estado que almacena los datos del formulario
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = React.useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLogged = useSelector((state) => state.auth.isLogged);

  //validate token
  const checkToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(login());
      navigate("/dashboard");
    }
  };

  useEffect(() => {
    checkToken();
  }, [isLogged]);

  // Función de validación
  const validate = (data) => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  // Función que se encarga de manejar el inicio de sesión
  const handleLogin = async (event) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        console.log("Iniciando sesión...");
        const token = await loginUser(formData);
        console.log("Token:", token);
        localStorage.setItem("token", token);
        dispatch(login());
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
      }
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
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="text"
              placeholder="mail@mail.com"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && (
              <p className="text-red-500 text-xs italic">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
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
              Sign In
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center">
          <Link
            to="/auth/olvide-password"
            className="hover:text-primary transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <span className="flex items-center gap-2">
            ¿No tienes cuenta?
            <Link
              to="/signup"
              className="text-primary hover:text-gray-100 transition-colors"
            >
              Registrate
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;