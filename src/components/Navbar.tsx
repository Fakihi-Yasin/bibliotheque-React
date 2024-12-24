import { useAuth } from "react-oidc-context";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = "5dnet169d3bu5n2kn9t9nkvi64";
    const logoutUri = "http://localhost:5173";
    const cognitoDomain =
      "https://us-east-1hy9gdo4mq.auth.us-east-1.amazoncognito.com";
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
  };

  return (
    <nav style={styles.nav} className="bg-gray-100 dark:bg-gray-800">
      <div style={styles.logo} className="text-gray-900 dark:text-white">
        Bibliofy
      </div>
      <div style={styles.buttons}>
        {!auth.isAuthenticated ? (
          <>
            <button
              style={styles.button}
              className="dark:bg-purple-700 dark:hover:bg-purple-600" 
              onClick={() => auth.signinRedirect()}
            >
              Sign in
            </button>
            <button
              style={styles.button}
              className="dark:bg-purple-700 dark:hover:bg-purple-600"
              onClick={() => auth.signinRedirect()}
            >
              Register
            </button>
          </>
        ) : (
          <button
            style={styles.button}
            className="dark:bg-purple-700 dark:hover:bg-purple-600"
            onClick={() => auth.removeUser()}
          >
            Sign out
          </button>
        )}
        <DarkModeToggle />
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  buttons: {
    display: "flex",
    gap: "1rem",
    borderRadius: "50%"
  },
  button: {
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "4px",
    backgroundColor: "#7E22CE",
    color: "white",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
} as const;

export default Navbar;
