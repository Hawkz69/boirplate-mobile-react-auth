import React, {useEffect, useState} from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
//Material
import Checkbox from '@material-ui/core/Checkbox';
// import { AlertMsg, Loader } from '../../../ui';
import Panel from '../components/panel/Panel';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as actions from 'state/auth/actions';
import registrOk from 'assets/imgs/register_ok.png';

import './Auth.scss';
import { ActionButton, OutlineButton } from 'ui/components';
import { phoneMask, onlyNumbers } from 'shared/utils';
import { makeStyles } from '@material-ui/core';
import Loader from 'ui/components/loader/Loader';

const useStyles = makeStyles({
  root: {
    fontSize: 25
  },
})

const Auth = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.auth.isLoading);
  const message = useSelector(state => state.auth.message);
  const tab = useSelector(state => state.auth.tab);
  const isConfirmRegister = useSelector(state => state.auth.isConfirmRegister);
  const isResetPassword = useSelector(state => state.auth.isResetPassword);

  const [page, setPage] = useState('signin');
  
  //login and register
  const [mobile, setMobile] = useState('');
  const [mobileError, setMobileError] = useState({error: false, msg: ''});

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState({error: false, msg: ''});

  const [repassword, setRePassword] = useState('');
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState({error: false, msg: ''});
  const [codeConfirmRegister, setConfirmRegister] = useState('');

  //reset password
  const [codePassword, setCodePassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newRepassword, setNewRePassword] = useState('');

  useEffect(() => {
    clearErrors();
  }, [tab]);

  function formatMobile(value) {
    setMobile(phoneMask(value));
  }
  
  function clearErrors() {
    setMobileError({error: false, msg: ''});
    setPasswordError({error: false, msg: ''});
    setNameError({error: false, msg: ''});
  }

  function signinUser() {
    if (onlyNumbers(mobile) === '' || onlyNumbers(mobile).length < 11) {
      setMobileError({
        error: true,
        msg: 'Campo obrigatorio',
      })
    }

    if(password === '') {
      setPasswordError({
        error: true,
        msg: 'Campo obrigatorio',
      })
    }

    if(onlyNumbers(mobile) !== '' && password !== '') {
      clearErrors();
      const data = {
        mobile: onlyNumbers(mobile), password
      }
      dispatch(actions.signin(data))
    }
  }

  function registerNewUser() {
    if (onlyNumbers(mobile) === '' || onlyNumbers(mobile).length < 11) {
      setMobileError({
        error: true,
        msg: 'Campo obrigatorio',
      })
    }

    if(password === '') {
      setPasswordError({
        error: true,
        msg: 'Campo obrigatorio',
      })
    }

    if(name === '') {
      setNameError({
        error: true,
        msg: 'Campo obrigatorio',
      })
    }

    if(repassword !== password) {
      setPasswordError({
        error: true,
        msg: 'As senhas nao sao iguais.',
      })
    }

    if(name !== '' && password !== '' && repassword !== '' && mobile !== '' && onlyNumbers(mobile).length === 11) {
      clearErrors();
      dispatch(actions.signup({
        name,
        password,
        mobile: onlyNumbers(mobile),
      }))
    }
  };

  function rememberPassword() {
    if (onlyNumbers(mobile) === '' || onlyNumbers(mobile).length < 11) {
      setMobileError({
        error: true,
        msg: 'Campo obrigatorio',
      })
    } else {
      dispatch(actions.rememberPassword(onlyNumbers(mobile)));
    }
  }

  function handleResetPassword() {
    if(password === '') {
      setPasswordError({
        error: true,
        msg: 'Campo obrigatorio',
      })
    }

    if(codePassword === '') {
      setNameError({
        error: true,
        msg: 'Campo obrigatorio',
      })
    }

    if(repassword !== password) {
      setPasswordError({
        error: true,
        msg: 'As senhas nao sao iguais.',
      })
    }

    if(password !== '' && repassword !== '' && codePassword !== '') {
      dispatch(actions.resetPassword(codePassword, password));
    }
  }

  useEffect(() => {
    if(codeConfirmRegister.length === 6) {
      dispatch(actions.confirmRegister(codeConfirmRegister));
    }
  }, [codeConfirmRegister]);

  const classes = useStyles();

  return (
    <div>
      { isLoading && ( <Loader /> )}
      {/* { message.show && ( <AlertMsg show kind={message.type} message={message.msg}/> )} */}
      {
        tab === 'signin' && (
          <Panel>
            <div className="div-form">
              <TextField
                label="Celular"
                variant="outlined"
                name="mobile"
                color="primary"
                type="tel"
                onChange={(e) => formatMobile(e.target.value)}
                value={mobile}
                style={{ width: '100%', fontSize: 19 }}
                error={mobileError.error}
                helperText={mobileError.msg}
              /><br /><br />
              <TextField
                label="Senha"
                variant="outlined"
                style={{width: '100%', fontSize: 19}}
                type='password'
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                error={passwordError.error}
                helperText={passwordError.msg}
              /><br />
            </div>
            <div className="div-remember">
              <div Style="width: 100%;float: left;">
              <FormControlLabel
                control={<Checkbox  color="primary" checked={true} onChange={() => {}} name="checkedA" />}
                label="Lembrar-me"
              />
              </div>
              <div Style="width: 100%; text-align:right ;font-family: Roboto; font-size: 13px; color:blue">
                <p className="link" Style="margin: 5px" onClick={() => dispatch(actions.changeTab('remember'))}>Esqueci minha senha</p>
              </div>
            </div>
            <div className="div-remember" Style="margin-top: 50px">
              <div  Style="width: 70%;">
                <ActionButton label="Entrar"  onClick={() => signinUser()}/>
              </div>
              <div Style="width: 70%; text-align:right; font-family: Roboto; font-size: 13px;">
                <OutlineButton onClick={() => dispatch(actions.changeTab('signup'))} color="primary" label="Criar conta"/>
              </div>
            </div>
          </Panel>
        )
      }

      {
        tab === 'signup' && (
          <Panel>
            <div className="div-form">
              <TextField
                label="Celular *"
                variant="outlined"
                style={{width: '100%', fontSize: 19}}
                name="mobile"
                type="tel"
                onChange={(e) => formatMobile(e.target.value)}
                value={mobile}
                error={mobileError.error}
                helperText={mobileError.msg}
              /><br /><br />
              <TextField
                label="Nome *"
                variant="outlined"
                style={{width: '100%', fontSize: 19}}
                name="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                error={nameError.error}
                helperText={nameError.msg}
              /><br /><br />
              <TextField
                label="Senha *"
                variant="outlined"
                style={{width: '100%', fontSize: 19}}
                type='password'
                name="password"
                error={passwordError.error}
                helperText={passwordError.msg}
                onChange={(e) => setPassword(e.target.value)}
              /><br /><br />
              <TextField
                label="Confirme sua senha *"
                variant="outlined"
                style={{width: '100%', fontSize: 19}}
                type='password'
                name="repassword"
                error={passwordError.error}
                helperText={passwordError.msg}
                onChange={(e) => setRePassword(e.target.value)}
              /><br /><br />
            </div>
            <div className="div-create-account" Style="margin-top: 20px;">
              <div  Style="width: 100%;">
                <ActionButton label="Criar conta"  onClick={() => registerNewUser()}/>
              </div>
            </div>
            <div className="div-signin">
              <p>Já tem uma conta? <a href="#" className="link" onClick={() => dispatch(actions.changeTab('signin'))}>Clique para entrar</a></p>
            </div>
          </Panel>
        )
      }


      {
        tab === 'remember' && (
          <Panel>
            <div className="div-form">
              <TextField
                label="Celular *"
                variant="outlined"
                type="tel"
                style={{width: '100%', fontSize: 19}}
                name="mobile"
                onChange={(e) => formatMobile(e.target.value)}
                value={mobile}
                error={mobileError.error}
                helperText={mobileError.msg}
              /><br />
            </div>
            <div className="div-create-account" Style="margin-top: 20px;">
              <div  Style="width: 100%;">
                <ActionButton label="Enviar Lembrete"  onClick={() => rememberPassword()}/>
              </div>
            </div>
            <div className="div-signin">
              <p>Já tem uma conta? <a href="#" className="link" onClick={() => dispatch(actions.changeTab('signin'))}>Clique para entrar</a></p>
            </div>
          </Panel>
        )
      }

      {
        tab === 'resetPassword' && (
          <Panel>
            {
              isResetPassword === 'ok' ? (
                <div Style="width: 100%; text-align: center; margin-top: 25px;">
                  <img src={registrOk} Style="width: 150px;;"/>
                </div>
              ) : (
                <>
                  <div className="div-form">
                    <TextField
                      label="Codigo *"
                      variant="outlined"
                      style={{width: '100%', fontSize: 19}}
                      name="code"
                      onChange={(e) => setCodePassword(e.target.value)}
                      error={isResetPassword === 'fail'}
                        helperText={isResetPassword === 'fail' && 'Codigo invalido.'}
                        inputProps={{
                          maxLength: 6,
                        }}
                    /><br /><br /><br />

                    <TextField
                      label="Senha *"
                      variant="outlined"
                      style={{width: '100%', fontSize: 19}}
                      type='password'
                      name="password"
                      error={passwordError.error}
                      helperText={passwordError.msg}
                      onChange={(e) => setPassword(e.target.value)}
                    /><br /><br />
                    <TextField
                      label="Confirme sua senha *"
                      variant="outlined"
                      style={{width: '100%', fontSize: 19}}
                      type='password'
                      name="repassword"
                      error={passwordError.error}
                      helperText={passwordError.msg}
                      onChange={(e) => setRePassword(e.target.value)}
                    /><br /><br />
                    
                  </div>
                  <div className="div-create-account" Style="margin-top: 20px;">
                    <div  Style="width: 100%;">
                      <ActionButton label="Resetar Senha"  onClick={() => handleResetPassword()}/>
                    </div>
                  </div>
                  <div className="div-signin">
                    <p>Já tem uma conta? <a href="#" className="link" onClick={() => dispatch(actions.changeTab('signin'))}>Clique para entrar</a></p>
                  </div>
                </>
              )
            }
          </Panel>
        )
      } 


      {
        tab === 'confirmRegister' && (
          <Panel>
              {
                isConfirmRegister === 'ok' ? (
                  <div Style="width: 100%; text-align: center; margin-top: 25px;">
                    <img src={registrOk} Style="width: 150px;;"/>
                  </div>
                ) : (
                  <>
                    <div className="div-form">
                      <p>Enviamos um codigo para seu celular.</p>
                      <TextField
                        label="Codigo *"
                        variant="outlined"
                        style={{width: '100%', fontSize: 19}}
                        name="code"
                        onChange={(e) => setConfirmRegister(e.target.value)}
                        error={isConfirmRegister === 'fail'}
                        helperText={isConfirmRegister === 'fail' && 'Codigo invalido.'}
                        inputProps={{
                          maxLength: 6,
                        }}
                      /><br />
                    </div>
                    <div className="div-signin">
                      <p>Não recebeu o código? <strong Style="cursor: pointer" onClick={() => {}}>Reenviar</strong></p>
                    </div>
                  </>
                )
              }
              
          </Panel>
        )
      } 
    </div>
  )
}

export default Auth;