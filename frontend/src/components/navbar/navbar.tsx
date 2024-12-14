import Link from '@mui/material/Link';

const Navbar = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b">
      <Link className="flex items-center justify-center" href="/">
        <span className="text-lg font-semibold">Stabledrop</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
          Features
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#how-it-works">
          How It Works
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#faq">
          FAQ
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
