import React, { FormEvent } from 'react';
import './styles.scss';
import { useHistory, Link } from 'react-router-dom';
import InputPassword from '../../../components/InputPassword';
import logo from '../../../assets/logo.svg';
const PasswordRecoveryChange = () => {

  const history = useHistory();

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    history.push('/');
  }


  return (
    <div id="page-password-recovery-change">
      <header/>
      <div className="content">
        <main>
          <div className="logo">
            <img src={ logo } alt="Money Manager logo"/>
            <h1>Money Manager</h1>
          </div>
          <div className="instructions">
            <span>Crie uma nova senha</span>
          </div>
          <form onSubmit={handleFormSubmit}>

            <InputPassword label="Senha" name="password" id="password" required={true} />
            
            <InputPassword label="Confirmação de senha" name="confirmation-password" id="confirmation-password" required={true} />

            <button className="btn btn-primary">
              <span>Alterar Senha</span>
            </button>

            <Link to="/login">
              Login
            </Link>

          </form>
        </main>
      </div>
    </div>
  );
}

export default PasswordRecoveryChange;