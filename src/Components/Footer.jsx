function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 text-sm text-gray-500 md:flex-row">
        <p>© {new Date().getFullYear()} Priyanka Shaw. All rights reserved.</p>

        <p>Built with React, Python & ☕</p>
      </div>
    </footer>
  );
}

export default Footer;
