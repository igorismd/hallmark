import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.sass';

interface NavButtonProps {
  name: string;
  onClick: () => void;
  route?: string;
  href?: string;
  target?: string;
}

const NavButton: FC<NavButtonProps> = ({ route, name, href, target, onClick }) => {
  const navigate = useNavigate();

  if (href) {
    return (
      <a
        className="nav-button"
        href={href}
        target={target}
        rel="noreferrer"
        onClick={onClick}
      >
        {name}
      </a>
    );
  }

  if (route) {
    return (
      <button
        className="nav-button"
        onClick={() => { onClick(); navigate(route); }}
      >
        {name}
      </button>
    );
  }

  return null;
};

export default NavButton;
