import { Link } from '@tanstack/react-router';
import { LucideIcon } from 'lucide-react'; // Typage pour les icônes Lucide

interface NavLinkProps {
  to: string; // La destination du lien
  icon?: LucideIcon; // L'icône, facultative
  children: React.ReactNode; // Le contenu du lien
}

const NavLink: React.FC<NavLinkProps> = ({ to, icon: Icon, children }) => {
  return (
    <Link to={to} className="[&.active]:font-bold [&.active]:text-sky-600 flex flex-row items-center gap-x-1">
      {Icon && <Icon size={16} />}
      {children}
    </Link>
  );
};

export default NavLink;