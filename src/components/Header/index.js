import React from 'react';

import { Link } from 'react-router-dom';
import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GoBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Felipe Marinho</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatar/50/abott@adorable.png"
              alt="Felipe Marinho"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
