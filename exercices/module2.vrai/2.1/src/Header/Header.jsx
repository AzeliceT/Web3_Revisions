import viteLogo from '/vite.svg'
import '../App.css';

function Header() {
  return (
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
    </div>
  );
}

export default Header;