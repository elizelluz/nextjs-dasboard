import Link from 'next/link'; // Si estás usando Next.js para las rutas
import { useRouter } from 'next/router'; // Para detectar la ruta activa

const SideNav = () => {
  const router = useRouter();

  // Estilos para el item activo
  const isActive = (path: string) => router.pathname === path ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-gray-200';

  return (
    <div className="bg-gray-800 text-white h-full flex flex-col">
      <div className="p-4 text-xl font-semibold">
        <span>Dashboard</span>
      </div>

      <nav className="flex-1">
        <ul className="space-y-4 px-4 py-6">
          <li>
            <Link href="/">
              <a className={`block p-3 rounded-lg ${isActive('/')}`}>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/invoices">
              <a className={`block p-3 rounded-lg ${isActive('/invoices')}`}>Invoices</a>
            </Link>
          </li>
          <li>
            <Link href="/customers">
              <a className={`block p-3 rounded-lg ${isActive('/customers')}`}>Customers</a>
            </Link>
          </li>
        </ul>
      </nav>

      <div className="p-4">
        {/* Aquí puedes poner un footer o cualquier otro contenido */}
      </div>
    </div>
  );
};

export default SideNav;
