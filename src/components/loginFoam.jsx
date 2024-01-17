import React, { useState } from 'react';
import styles from './loginFoam.module.css';
import { LockPerson, Mail, Lock, Visibility, VisibilityOff } from '@mui/icons-material';

const LoginFoam = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      alert('Password length is too short');
      return;
    }

    console.log(email, password);

    
    setEmail('');
    setPassword('');
    setShowPassword(false);
  };

  return (
    <>
    {/* <h1 className={styles.name}>Login page</h1> */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <h1 className={styles.locks}>
          <LockPerson /> <spam >Login</spam> <LockPerson />
        </h1>
        <div className={styles.inputCont}>
          <Mail className={styles.icon} />
          <input
            type="email"
            placeholder="Enter email......"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className={styles.inputCont}>
          <Lock className={styles.icon} />
          <input
            placeholder="Enter password......"
            type={showPassword ? 'password' : 'text'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.password}
            required
          />
          {showPassword ? (
            <VisibilityOff
              className={styles.icon}
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <Visibility
              className={styles.icon}
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
        <button className={styles.loginbutton} type="submit">
          Login
        </button>
      </form>
    </>
  );
};

export default LoginFoam;
