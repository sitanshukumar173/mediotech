import { useLocation } from "react-router-dom";
import Nevbar from "./components/Nevbar/Nevbar";
import Footer from "./components/Footer/Footer";


export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const hideNavAndFooter = location.pathname.startsWith("/admin/dashboard") || location.pathname === "/*";

  return (
    <>
      {!hideNavAndFooter && <Nevbar/>}
      <main>
        {children}
      </main>
      {!hideNavAndFooter && <Footer/>}
    </>
  );
}