import React, { FormEvent } from 'react';
import { FiAtSign, FiLogIn } from 'react-icons/fi'
import './styles.scss';
import { useHistory, Link } from 'react-router-dom';
import InputPassword from '../../../components/InputPassword';
import logo from '../../../assets/logo.svg';
const Login = () => {

  const history = useHistory();

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    history.push('/');
  }


  return (
    <div id="page-login">
      <header/>
      <div className="content">
        <main>
          <div className="logo">
            <img src={ logo } alt="Money Manager logo"/>
            <h1>Money Manager</h1>
          </div>
          <div className="instructions">
            <span>Faça login para acessar o sistema.</span>
          </div>
          <form onSubmit={handleFormSubmit}>
            <div className="input-group label-float">
              <FiAtSign />
              <input type="email" id="email" name="email" placeholder=" " required />
              <label>E-mail</label>
            </div>

            <InputPassword label="Senha" name="password" id="password" required={true} />

            <button className="btn btn-primary">
              <FiLogIn />
              <span>Entrar</span>
            </button>

            <Link to="/register">
              Criar nova conta
            </Link>

            <Link to="/password-recovery">
              Esqueceu sua senha?
            </Link>

          </form>
        </main>
      </div>
    </div>
  );
}

export default Login;