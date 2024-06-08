import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import { Button } from "../../components/Button/Button";
import { Input } from "../../components/Input/Input";
import s from "./RegisterStyles";

function Register() {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('Senhas não coincidem');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        setSuccess('Usuário registrado com sucesso');
        setError('');
        setTimeout(() => navigate('/login'), 2000); // Redireciona para a página de login após 2 segundos
      } else {
        const data = await response.json();
        setError(data.message);
        setSuccess('');
      }
    } catch (error) {
      console.error('Erro ao tentar registrar:', error);
      setError('Erro ao tentar registrar');
      setSuccess('');
    }
  };

  return (
    <s.MainContainer>
      <s.LeftContainer>
        <img src={Logo} width={400} height={400} alt="Logo" />
        <h1>Steps for Future</h1>
      </s.LeftContainer>

      <s.RightContainer>
        <s.CenterContainer>
          <Input 
            placeholder="Nome Completo"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input 
            placeholder="Nome de usuário"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input 
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input 
            placeholder="Número de Celular"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input 
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Input 
            type="password"
            placeholder="Confirmar Senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}
          {success && <p style={{ color: 'green' }}>{success}</p>}

          <Button variant="secondary" onClick={handleRegister}>
            <h3>Cadastrar</h3>
          </Button>
          <Link to="/login">
            <Button>Voltar ao Login</Button>
          </Link>
          <s.DescriptionContainer>
            Ao se cadastrar, você concorda com nossos Termos, Política de Privacidade e Política de Cookies.
          </s.DescriptionContainer>
        </s.CenterContainer>
      </s.RightContainer>
    </s.MainContainer>
  );
}

export default Register;
