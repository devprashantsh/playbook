import { Routes, Route } from "react-router-dom";

import { Home } from "./_root/pages";

// auth forms
import LoginForm from "./_auth/forms/LoginForm";
import SignUpForm from "./_auth/forms/SignUpForm";

// layouts
import AuthLayout from "./_auth/AuthLayout";
import RootLayout from "./_root/RootLayout";

import "./globals.css";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* {public routes} */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        {/* {private routes} */}
        <Route element={<RootLayout />}>
            <Route index element={<Home />} />
        </Route>

      </Routes>
    </main>
  );
};

export default App;
