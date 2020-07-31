import React, { useState } from 'react';
import { FiKey, FiEyeOff, FiEye } from 'react-icons/fi'
import './styles.scss';
import InputPasswordPropsInterface from './InputPasswordPropsInterface';


const InputPassword = (
    { label, name, id = name, required = true, onChange = () => {} }: InputPasswordPropsInterface
  ) => {

  const [eyePassword, setEyePassword] = useState<boolean>(false);

  function handlePasswordEye() {
    setEyePassword(!eyePassword);
  }

  const eyeButton = (eyePassword)
    ? <FiEye className="password-eye" onClick={handlePasswordEye}/>
    : <FiEyeOff className="password-eye" onClick={handlePasswordEye}/>

  const inputPasswordType = eyePassword ? 'text' : 'password';

  return (
		<div className="input-group label-float input-password">
			<FiKey />
			<input type={ inputPasswordType } name={ name } id={ id } placeholder=" " required={ required } />
      <label>{ label }</label>
			{ eyeButton }
		</div>
  );
}

export default InputPassword;