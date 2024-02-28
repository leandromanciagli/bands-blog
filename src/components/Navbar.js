import logo from '../Logo.png';
// import './App.css';

const sections = [
  { id: 1, title: 'Historia' },
  { id: 2, title: 'Lanzamientos' },
  { id: 3, title: 'Eventos' },
  { id: 4, title: 'Galería' },
];

export default function Navbar() {
  const listSections = sections.map(section =>
    <li
      key={section.id}
      className="bebas-neue-regular section"
    >
      {section.title}
    </li>
  );

  return (
    <header>
      <nav className="navbar">
        <div className='logo-container'>
          <img src={logo} className='logo' alt="logo" />
        </div>
        <div className='sections-container'>
          <ul className='sections'>{listSections}</ul>
        </div>
      </nav>
    </header>
  );
}

