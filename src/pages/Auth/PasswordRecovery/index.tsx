import React, { FormEvent, useState, ReactElement, ChangeEvent } from 'react';
import {  FiAtSign, FiKey } from 'react-icons/fi'
import './styles.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
const PasswordRecovery = () => {
  
  const [ showForm, setShowForm ] = useState<boolean>(true);
  const [ instruction, setInstruction ] = useState<ReactElement>(<span>Informe seu email para recuperar sua senha.</span>);
  
  const [formData, setFormData] = useState({
    email: '',
  });

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const {name, value } = event.target;
    
    setFormData({ ...formData, [name]: value});
  }

  function handleFormSubmit(event: FormEvent) {
    event.preventDefault();
    
    if (formData.email === 'smedeiros.flavio@gmail.com') {
      setShowForm(false);
      setInstruction(<span className="text-success">Foi enviado uma mensagem de email contendo as intruções para recuperação da sua senha.</span>);
    } else {
      setShowForm(true);
      setInstruction(<span className="text-error">Não encontramos uma conta viculada a esse email. Verifique seu email e tente novamente.</span>);
    }
  }
  
  const form = (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group label-float">
        <FiAtSign />
        <input type="email" name="email" id="email" placeholder=" " required onChange={ handleInputChange }/>
        <label>E-mail</label>
      </div>

      <button className="btn btn-primary">
        <FiKey />
        <span>Recuperar senha</span>
      </button>
    </form>
  );

  return (
    <div id="page-password-recovery">
      <header/>
      <div className="content">
        <main>
          <div className="logo">
            <img src={ logo } alt="Money Manager logo"/>
            <h1>Money Manager</h1>
          </div>
          <div className="instructions">
            <span>{ instruction }</span>
          </div>
          { showForm ? form : <div /> }
          <Link to="/login">
            Voltar
          </Link>
        </main>
      </div>
    </div>
  );
}

export default PasswordRecovery;