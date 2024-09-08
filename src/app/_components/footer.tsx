export function Footer() {
  return (
    <footer>
      <div className="top-0 left-0 w-full flex justify-between items-end tracking-tighter py-8 px-4">
        <div className="font-mono text-sm font-medium">
          <p>2024 Acid Gambit, LLC</p>
          <p>Washington D.C.</p>
        </div>
        <div className="text-sm items-center font-mono ml-auto flex gap-4 sm:gap-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="acid text-sm font-medium hover:underline underline-offset-4"
            href="https://instagram.com/acidgambit"
          >
            ig
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="acid text-sm font-medium hover:underline underline-offset-4"
            href="https://x.com/acidgambit_"
          >
            x
          </a>
        </div>
      </div>
    </footer>
  );
}
