import * as React from "react";
import { Link } from "gatsby";
import { useSelector } from "react-redux";

// CSS
import "../style/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const [isSmallScreen, setIsSmallScreen] = React.useState(false);
  const { cartData } = useSelector((state) => state.product);
  const isBrowser = typeof window !== "undefined" ? window : {};

  const nav = [
    {
      title: "Store",
      route: "/",
    },
    {
      title: "About",
      route: "/",
    },
  ];

  React.useEffect(() => {
    const currentWidth = isBrowser.innerWidth;
    if (currentWidth < 550) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  }, []);

  React.useEffect(() => {
    const handleResize = () => {
      const currentWidth = isBrowser.innerWidth;
      if (currentWidth < 550) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    };

    isBrowser.addEventListener("resize", handleResize, { passive: true });

    return () => isBrowser.removeEventListener("resize", handleResize);
  }, [isSmallScreen]);

  return (
    <nav
      id="navbar"
      className="navbar navbar-expand-lg fixed-top navbar-light bg-white shadow-sm py-2"
    >
      <div className="container">
        <div className="d-flex align-items-center">
          <div className="btn navbar-toggler me-3 p-0 border-0">
            <i className="fa-solid fa-bars fs-3"></i>
          </div>

          <Link
            className="navbar-brand m-0 me-md-3 logo-image"
            to="/"
            role="button"
          >
            <svg
              width="140"
              height="30"
              color="#0A9DBD"
              viewBox="0 0 169 33"
              className="logo"
            >
              <g fillRule="nonzero" fill="none">
                <path
                  d="M59.34 23.12c.84 0 1.48-.1 1.82-.16v-2.34H61c-.2.02-.52.04-.72.04-.74 0-1.18-.22-1.18-1.02v-5.28h2.08v-2H59.1v-3.4h-3.08v3.4h-1.6v2h1.6v5.96c0 2.16 1.34 2.8 3.32 2.8zm8.62-.12v-4.94c0-2.08 1.12-3.14 2.82-3.12.22 0 .44.02.66.06h.08v-2.74c-.14-.06-.36-.08-.66-.08-1.32 0-2.28.6-2.96 2.08h-.06v-1.9h-3.02V23h3.14zm10.72.3c1.46 0 2.42-.58 3.2-1.82h.06V23h2.98V12.36h-3.1v6.02c0 1.32-.78 2.28-2.04 2.28-1.12 0-1.7-.68-1.7-1.86v-6.44h-3.14v7.04c0 2.34 1.32 3.9 3.74 3.9zm14.74.04c2.76 0 4.8-1.2 4.8-3.5 0-2.68-2.16-3.18-4.06-3.52-1.46-.26-2.62-.38-2.62-1.18 0-.68.62-1.08 1.58-1.08 1 0 1.6.38 1.8 1.14h2.92c-.28-1.86-1.76-3.14-4.72-3.14-2.5 0-4.48 1.14-4.48 3.32 0 2.48 1.92 2.96 3.82 3.32 1.48.28 2.74.4 2.74 1.36 0 .76-.64 1.22-1.76 1.22-1.22 0-1.98-.56-2.16-1.56h-2.96c.16 2.14 2.02 3.62 5.1 3.62zm12.36-.22c.84 0 1.48-.1 1.82-.16v-2.34h-.16c-.2.02-.52.04-.72.04-.74 0-1.18-.22-1.18-1.02v-5.28h2.08v-2h-2.08v-3.4h-3.08v3.4h-1.6v2h1.6v5.96c0 2.16 1.34 2.8 3.32 2.8zm7.58-.12v-6.62c0-1.64 1.38-2.82 2.66-2.82 1.1 0 1.84.78 1.84 2.1V23h1.84v-6.62c0-1.64 1.18-2.82 2.54-2.82 1.08 0 1.94.78 1.94 2.1V23h1.86v-7.5c0-2.24-1.36-3.5-3.32-3.5-1.3 0-2.56.66-3.32 2h-.04c-.44-1.32-1.48-2-2.78-2-1.38 0-2.52.7-3.18 1.86h-.06v-1.6h-1.84V23h1.86zm21.84.3c2.48 0 4.2-1.36 4.68-3.36h-1.82c-.34 1.14-1.36 1.84-2.84 1.84-2.08 0-3.22-1.6-3.36-3.7h8.24c0-1.82-.44-3.36-1.32-4.42-.84-1.04-2.08-1.66-3.68-1.66-3.08 0-5.14 2.52-5.14 5.64 0 3.14 1.94 5.66 5.24 5.66zm2.92-6.56h-6.22c.24-1.9 1.26-3.3 3.2-3.3 1.86 0 2.92 1.24 3.02 3.3z"
                  fill="#000"
                ></path>
                <path
                  d="M147.5 23.3c1.46 0 2.42-.58 3.2-1.82h.06V23h2.98V12.36h-3.1v6.02c0 1.32-.78 2.28-2.04 2.28-1.12 0-1.7-.68-1.7-1.86v-6.44h-3.14v7.04c0 2.34 1.32 3.9 3.74 3.9zm13.46 3.24V24c0-1.14-.06-1.92-.1-2.32h.04c.62 1.04 1.74 1.66 3.14 1.66 2.84 0 4.68-2.2 4.68-5.66 0-3.26-1.76-5.62-4.58-5.62-1.46 0-2.52.6-3.24 1.82h-.06v-1.52h-3.02v14.18h3.14zm2.34-5.64c-1.6 0-2.44-1.3-2.44-3.12 0-1.8.78-3.22 2.4-3.22 1.54 0 2.28 1.32 2.28 3.22 0 1.9-.82 3.12-2.24 3.12z"
                  fill="currentColor"
                ></path>
                <g fill="currentColor">
                  <path d="M20.504 19.886l.064-.255-.177-.094a3.233 3.233 0 01-1.648-2.8l.005-.178c.093-1.647 1.495-3.015 3.193-3.073h.035l.04.004.041.003.041-.003.041-.004h.035l.18.01c1.676.151 3.02 1.575 3.017 3.24l-.007.21a3.245 3.245 0 01-1.817 2.685l.063.255h4.955l.006.078c.015.08.055.161.122.253l.393.542c.258.363.51.732.755 1.104l.154.238c.76 1.19 1.36 2.44 1.317 3.927l-.02.254c-.016.255-.03.511-.08.76l-.057.264c-.239 1.054-.656 2.033-1.419 2.82l-.226.224c-1.072 1.012-2.373 1.595-3.84 1.818l-.29.036a5.021 5.021 0 01-2.516-.401l-.388-.175a12.546 12.546 0 01-2.495-1.577l-.95-.759c-1.265-1.011-2.528-2.026-3.74-3.1l-.95-.863c-1.257-1.163-2.473-2.373-3.72-3.548l-.574-.526c-.387-.346-.78-.688-1.159-1.041l-.077-.076c-.09-.096-.13-.173-.125-.252h11.691l-1.333 5.47-.019.106a.845.845 0 00.836.943h4.125l.108-.007a.847.847 0 00.71-1.043l-1.333-5.47h-2.967zM20 0l.344.003C31.23.186 40 9.017 40 19.886H28.575l.01-.078a.686.686 0 01.127-.246l.413-.562c.272-.377.537-.76.792-1.147l.167-.258c.605-.95 1.1-1.949 1.206-3.095l.021-.323a6.198 6.198 0 00-.535-2.797l-.117-.251c-.846-1.725-2.28-2.748-4.131-3.233l-.285-.068c-1.701-.362-3.292.054-4.748 1.003l-.704.478c-.698.49-1.377 1.01-2.072 1.505l-.646.478c-1.914 1.462-3.61 3.17-5.353 4.823l-.75.692c-.757.684-1.535 1.348-2.297 2.029l-.399.364-.391.372-.072.073c-.086.093-.13.168-.136.24H0C0 8.904 8.955 0 19.999 0z"></path>
                </g>
              </g>
            </svg>
          </Link>
        </div>

        <div className="navbar-collapse collapse" id="navbarsExampleDefault">
          <div className="btn ms-2 me-5 mt-1">
            <i className="fa-solid fa-magnifying-glass fs-4"></i>
          </div>

          <ul className="navbar-nav">
            {nav.map((item, index) => (
              <li className="nav-item" key={index}>
                <Link
                  className="nav-link fs-6 text-dark fw-bold fst-normal font-roboto"
                  to={item.route}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <Link className="mt-1 me-4 position-relative" to="/cart/">
            <i className="fa-solid fa-cart-shopping text-black fs-4"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark shadow">
              <span>{cartData.length}</span>
            </span>
          </Link>
          <div className="py-1 px-2 me-2 rounded-pill bg-dark text-white font-roboto">
            FF
          </div>
          <h1 className="fs-6 fw-bold mb-0 font-roboto2">
            {isSmallScreen ? "Frank F," : "Frank Frazetta"}
          </h1>
        </div>
      </div>
    </nav>
  );
};

export default Header;
