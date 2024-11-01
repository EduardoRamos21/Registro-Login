import React, { useState } from 'react';

const AuthBox = () => {
  const [isRegister, setIsRegister] = useState(false);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className={`auth-box shadow ${isRegister ? 'show-register' : 'show-login'}`}>
      <div className="forms-container">
        {/* Formulario de Login */}
        <section className="login">
          <section className="header">
            <h2>Iniciar Sesión</h2>
          </section>
          <section className="item-list">
            <section className="item shadow">
              <i className="fab fa-google"></i>
              <i className="fab fa-github"></i>
              <i className="fab fa-linkedin-in"></i>
            </section>
          </section>
          <section className="body">
            <form>
              <label>
                <div className="w-100 text-right blue-color">
                  <i className="far fa-envelope"></i>
                </div>
                <input type="text" name="email" placeholder="Introduce tu correo" />
              </label>
              <label>
                <div className="w-100 text-right blue-color">
                  <i className="fas fa-lock"></i>
                </div>
                <input type="password" name="password" placeholder="Introduce tu contraseña" />
              </label>
              <label className="d-flex flex-column">
                <button type="button" className="blue text-center">
                  Iniciar Sesión
                </button>
                <a href="#" className="forget-password">
                  ¿Olvidaste tu contraseña?
                </a>
              </label>
            </form>
          </section>
        </section>

        {/* Formulario de Registro */}
        <section className="register">
          <section className="header">
            <h2>Registrarse</h2>
          </section>
          <section className="item-list">
            <section className="item shadow">
              <i className="fab fa-google"></i>
              <i className="fab fa-github"></i>
              <i className="fab fa-linkedin-in"></i>
            </section>
          </section>
          <section className="body">
            <form>
              <label>
                <div className="w-100 text-right pink-color">
                  <i className="fas fa-user-alt"></i>
                </div>
                <input type="text" placeholder="Introduce tu nombre completo" />
              </label>
              <label>
                <div className="w-100 text-right pink-color">
                  <i className="far fa-envelope"></i>
                </div>
                <input type="email" placeholder="Introduce tu correo" />
              </label>
              <label>
                <div className="w-100 text-right pink-color">
                  <i className="fas fa-lock"></i>
                </div>
                <input type="password" placeholder="Introduce tu contraseña" />
              </label>
              <label className="d-flex flex-column">
                <button type="button" className="pink text-center">
                  Registrarse
                </button>
              </label>
            </form>
          </section>
        </section>
      </div>

      {/* Panel de color */}
      <section className="box-color">
        <h3 className="title">
          {isRegister ? "¿Ya tienes una cuenta?" : "¿Aún no tienes cuenta?"}
        </h3>
        <button
          type="button"
          className={`toggle-btn ${isRegister ? 'blue' : 'pink'}`}
          onClick={toggleForm}
        >
          {isRegister ? "Iniciar Sesión" : "Registrarse"}
        </button>
      </section>
    </div>
  );
};

export default AuthBox;