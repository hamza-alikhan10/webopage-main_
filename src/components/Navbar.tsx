import { useNavigate } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  const navigate = useNavigate();

  const navLinks = [
    { name: "GALLERY", href: "/portfolio" },
    { name: "ABOUT", href: "/biography" },
    { name: "PRESS", href: "/Press" },
    { name: "CONTACT", href: "/contact" },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      window.location.href = href;
    }
  };

  return (
    <div>
      <nav className="bg-transparent py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center space-y-3">
            {/* Logo */}
            <div className="flex justify-center">
              <a
                href="/"
                className="text-center text-5xl md:text-6xl lg:text-7xl font-light uppercase"
                style={{
                  fontFamily: '"Josefin Sans", "Poppins", "Montserrat"',
                  textDecorationLine: "none",
                  fontSize: "76px",
                  lineHeight: "1.2",
                }}
              >
                FORMFORGE
              </a>
            </div>

            {/* Navigation (Visible on all devices) */}
            <div className="flex items-center justify-center mt-6" id="topNav">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavigation(link.href)}
                  className="nav-link text-gray-500 hover:text-black px-4 py-2 text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] tracking-wide font-normal leading-normal transition-all duration-300 ease-out"
                >
                  {link.name}
                </button>
              ))}
            </div>

            <style>{`
              #topNav {
                text-align: center;
                margin-bottom:20px;
              }
              .nav-link {
                transition: transform 0.3s ease-out, scale 0.2s ease-out, color 0.3s ease;
              }
              .nav-link:hover {
                transform: translateY(-3px);
                scale: 1.1;
                color: black;
              }
              /* Responsive Adjustments */
              @media (max-width: 768px) {
                .nav-link {
                  font-size: 18px; /* Smaller font size on mobile */
                  padding: 6px 12px;
                }

                .text-5xl {
                  font-size: 3rem; /* Logo scales down on mobile */
                }
              }

              @media (min-width: 768px) {
                .nav-link {
                  font-size: 22px;
                }

                .text-5xl {
                  font-size: 4rem;
                }
              }

              @media (min-width: 1024px) {
                .nav-link {
                  font-size: 26px;
                }
              }
            `}</style>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
