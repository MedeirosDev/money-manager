import React, { FormEvent } from 'react';
import { FiUser, FiSmartphone, FiAtSign } from 'react-icons/fi'
import './styles.scss';
import { useHistory, Link } from 'react-router-dom';
import InputPassword from '../../../components/InputPassword';
import logo from '../../../assets/logo.svg';
const Register = () => {

  const history = useHistory();

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    history.push('/');
  }


  return (
    <div id="page-register">
      <header/>
      <div className="content">
        <main>
          <div className="logo">
            <img src={ logo } alt="Money Manager logo"/>
            <h1>Money Manager</h1>
          </div>
          <div className="instructions">
            <span>Preencha os campos para criar sua conta.</span>
          </div>
          <form onSubmit={handleFormSubmit}>

            <div className="input-group label-float">
              <FiUser />
              <input type="text" name="name" id="name" placeholder=" " required />
              <label>Nome</label>
            </div>


            <div className="input-group label-float">
              <FiAtSign />
              <input type="email" name="email" id="email" placeholder=" " required />
              <label>E-mail</label>
            </div>

            <div className="input-group label-float">
              <FiSmartphone />
              <input type="phone" name="phone" id="phone" placeholder=" " required />
              <label>Celular</label>
            </div>

            <InputPassword label="Senha" name="password" id="password" required={true} />
            
            <InputPassword label="Confirmação de senha" name="confirmation-password" id="confirmation-password" required={true} />

            <button className="btn btn-primary">
              <FiAtSign />
              <span>Criar conta</span>
            </button>

            <Link to="/login">
              Já tem uma conta? Faça login
            </Link>

          </form>
        </main>
      </div>
    </div>
  );
}

export default Register;