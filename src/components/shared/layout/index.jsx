import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';

import Logo from "../logo";

const Layout = ({ children }) => {
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/faculty", label: "Faculty" },
    { path: "/contact-us", label: "Contact Us" },
    { path: "/login", label: "Login" },
  ];

  const SocialIcons = [
    { icon: "fa fa-facebook", link: "https://www.facebook.com/", label: "Facebook" },
    { icon: "fa fa-twitter", link: "https://www.twitter.com/", label: "Twitter" },
    { icon: "fa fa-linkedin", link: "https://www.linkedin.com/", label: "LinkedIn" },
    { icon: "fa fa-instagram", link: "https://www.instagram.com/", label: "Instagram" },
  ];

  return (
    <div className="layout flex flex-col min-h-screen">
      {/* Header */}
      <header>
        <nav className="flex justify-between items-center px-10 py-4 shadow" role="navigation" aria-label="Main navigation">
          <Logo />

          <ul className="flex gap-6 font-medium">
            {menuItems.map((menu, index) => (
              <li key={index}>
                <Link
                  to={menu.path}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {menu.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/login" aria-label="Login">
            <img
              src="https://eduport.webestica.com/assets/images/avatar/01.jpg"
              alt="User Avatar"
              className="rounded-full w-[50px] hover:scale-105 transition-transform duration-200"
            />
          </Link>
        </nav>
      </header>

      {/* Main content */}
      <main className="flex-grow p-6">{children}</main>

      {/* Footer */}
      <footer className="border-t mt-6 bg-gray-50">
        <div className="px-10 py-8 grid grid-cols-1 md:grid-cols-5 gap-6">

          {/* Column: Logo + Social */}
          <div>
            <Logo tagline={true} />

            <div className="flex gap-3 mt-4">
              {SocialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="inline-flex items-center justify-center bg-white p-3 shadow rounded-full border hover:scale-110 transition-transform duration-200"
                >
                  <i className={`${social.icon} text-lg ${getColorClass(social.label)}`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column: Company Links */}
          <div>
            <h3 className="text-xl font-bold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              {menuItems.map((menu, index) => (
                <li key={index}>
                  <Link to={menu.path} className="hover:text-blue-600">
                    {menu.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Placeholder columns */}
          <div>
            <h3 className="text-xl font-bold mb-3">Courses</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>All Courses</li>
              <li>Popular</li>
              <li>New</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Blog</li>
              <li>Events</li>
              <li>Help Center</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Contact Us</li>
              <li>Support</li>
              <li>FAQs</li>
            </ul>
          </div>
        </div>

        <div className="text-center py-4 text-sm text-gray-500 border-t">
          &copy; 2024 EduPort. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;

/* small helper: you can place this function in the same file or import from a utils file */
function getColorClass(label) {
  switch (label.toLowerCase()) {
    case "facebook":
      return "text-blue-600";
    case "twitter":
      return "text-sky-500";
    case "linkedin":
      return "text-blue-700";
    case "instagram":
      return "text-pink-600";
    default:
      return "";
  }
}
