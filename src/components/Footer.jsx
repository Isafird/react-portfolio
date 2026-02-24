const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <div>
            <a>
                 © 2026 Muhamad Isa Firdaus. Built with ❤️ using React.
            </a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/Isafird">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://instagram.com/msf.isaaa">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/isaafirdaus2211/">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
            <a href="https://wa.me/6281219879171">
                <i className="ri-whatsapp-fill ri-2x"></i>
            </a>
        </div>
          
    </div>
    
  )
}

export default Footer