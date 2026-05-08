/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Campaigns } from "./pages/Campaigns";
import { PepsiZeroPage } from "./pages/PepsiZeroPage";
import { CulturePage } from "./pages/CulturePage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-pepsi-black selection:bg-pepsi-blue">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/campaigns" element={<Campaigns />} />
            <Route path="/zero" element={<PepsiZeroPage />} />
            <Route path="/culture" element={<CulturePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

