import React, { useEffect, useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => {
  const [isDashboard, setIsDashboard] = useState(true);
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname === '/import') {
      setIsDashboard(false);
    }
  }, [pathname]);
  return (
    <Container size={size}>
      <header>
        <img src={Logo} alt="GoFinances" />
        <nav>
          <Link to="/" className={isDashboard ? 'selected' : ''}>
            Listagem
          </Link>
          <Link to="/import" className={!isDashboard ? 'selected' : ''}>
            Importar
          </Link>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
