const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-[#1C1C21] flex justify-between items-center flex-wrap gap-5">
      <div className="text-[#62646C] flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/merieme-Bou"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/merieme-portfolio/assets/github.svg"
              alt="GitHub"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>

        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/merieme-bouakrif-982188252/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/merieme-portfolio/assets/linkdin.svg"
              alt="LinkedIn"
              className="w-1/2 h-1/2"
            />
          </a>
        </div>
      </div>

      <p className="text-[#62646C]">
        © 2025 Merieme Bouakrif. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer
