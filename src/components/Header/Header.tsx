import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
// import Button from '../DashboardComponents/Button';
// import { ThirdwebProvider } from 'thirdweb/dist/types/react/core/providers/thirdweb-provider';
import { AutoConnect, ConnectButton, ConnectEmbed } from "thirdweb/react";
import { client } from '../../client';
// import { UserWalletStatus } from 'thirdweb/dist/types/wallets/in-app/core/authentication/type';



const Header: React.FC = () => {
  return (
    <header className='header'>
      <h3>Stablecoin Academy</h3>
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/explorer">Explorer</Link></li>
          <li><Link to="/academy">Academy</Link></li>
        </ul>
      </nav>
      <div className='buttons'>
        {/* <Button name='Profile' /> */}
        <ConnectButton client={client} />
      </div>
    </header>
  );
};

export default Header;
