import CookieComponent from "./components/CookieComponent";
import {CookiesProvider} from "react-cookie";
function App() {
  return (
      <CookiesProvider>
          <CookieComponent />
      </CookiesProvider>
  );
}

export default App;
