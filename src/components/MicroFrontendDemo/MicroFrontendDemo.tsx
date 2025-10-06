"use client";

import React, { useState, Suspense, lazy } from "react";
import { AlertCircle, Package, Zap, Users, Code } from "lucide-react";

// Simulating lazy-loaded micro-frontends
const ProductCatalog = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          default: () => (
            <div className="bg-white p-6 rounded-lg border-2 border-blue-500">
              <div className="flex items-center gap-3 mb-4">
                <Package className="text-blue-500" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-blue-600">
                    Product Catalog
                  </h3>
                  <p className="text-sm text-gray-500">Micro-Frontend A</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                This micro-frontend is owned by the Catalog Team. It can be
                deployed independently without affecting other parts of the app.
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <p className="font-semibold text-blue-700">Product A</p>
                  <p className="text-sm text-gray-600">$49.99</p>
                </div>
                <div className="p-3 bg-blue-50 rounded border border-blue-200">
                  <p className="font-semibold text-blue-700">Product B</p>
                  <p className="text-sm text-gray-600">$79.99</p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
                <p className="text-xs text-green-700 font-mono">
                  ✅ Loaded from: product-catalog-app.example.com
                </p>
              </div>
            </div>
          ),
        });
      }, 1000);
    })
);

const ShoppingCart = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          default: () => (
            <div className="bg-white p-6 rounded-lg border-2 border-purple-500">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-purple-500" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-purple-600">
                    Shopping Cart
                  </h3>
                  <p className="text-sm text-gray-500">Micro-Frontend B</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                This micro-frontend is owned by the Cart Team. It uses React
                Query for state management and can be updated without touching
                Product Catalog.
              </p>
              <div className="space-y-2">
                <div className="flex justify-between p-3 bg-purple-50 rounded border border-purple-200">
                  <span className="text-purple-700">Product A × 1</span>
                  <span className="font-semibold text-purple-700">$49.99</span>
                </div>
                <div className="flex justify-between p-3 bg-purple-100 rounded border border-purple-300">
                  <span className="text-purple-800 font-semibold">Total</span>
                  <span className="font-bold text-purple-800">$49.99</span>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
                <p className="text-xs text-green-700 font-mono">
                  ✅ Loaded from: shopping-cart-app.example.com
                </p>
              </div>
            </div>
          ),
        });
      }, 1500);
    })
);

const UserProfile = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          default: () => (
            <div className="bg-white p-6 rounded-lg border-2 border-green-500">
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-green-500" size={32} />
                <div>
                  <h3 className="text-xl font-bold text-green-600">
                    User Profile
                  </h3>
                  <p className="text-sm text-gray-500">Micro-Frontend C</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                This micro-frontend is owned by the Profile Team. It's built
                with Vue.js while others use React - technology freedom!
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center text-2xl">
                    👤
                  </div>
                  <div>
                    <p className="font-semibold text-green-700">John Doe</p>
                    <p className="text-sm text-gray-600">john@example.com</p>
                  </div>
                </div>
              </div>
              <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded">
                <p className="text-xs text-green-700 font-mono">
                  ✅ Loaded from: user-profile-app.example.com
                </p>
              </div>
            </div>
          ),
        });
      }, 800);
    })
);

export default function MicroFrontendDemo() {
  const [loadedApps, setLoadedApps] = useState({
    catalog: false,
    cart: false,
    profile: false,
  });

  const [showCode, setShowCode] = useState(false);

  const loadApp = (app) => {
    setLoadedApps((prev) => ({ ...prev, [app]: true }));
  };

  const resetDemo = () => {
    setLoadedApps({ catalog: false, cart: false, profile: false });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                Micro-Frontend Architecture Demo
              </h1>
              <p className="text-gray-600 text-lg">
                See how micro-frontends load independently at runtime
              </p>
            </div>
            <Code className="text-indigo-500" size={48} />
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-500 p-4 rounded">
            <p className="text-indigo-900">
              <strong>Module Federation Simulation:</strong> Each component
              below represents a separate micro-frontend application that can be
              deployed independently. Click the buttons to simulate loading them
              at runtime.
            </p>
          </div>
        </div>

        {/* Control Panel */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Control Panel
          </h2>
          <div className="flex flex-wrap gap-4 mb-4">
            <button
              onClick={() => loadApp("catalog")}
              disabled={loadedApps.catalog}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                loadedApps.catalog
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-blue-500 text-white hover:bg-blue-600 hover:shadow-lg"
              }`}
            >
              {loadedApps.catalog ? "✅ Loaded" : "Load Product Catalog"}
            </button>

            <button
              onClick={() => loadApp("cart")}
              disabled={loadedApps.cart}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                loadedApps.cart
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-purple-500 text-white hover:bg-purple-600 hover:shadow-lg"
              }`}
            >
              {loadedApps.cart ? "✅ Loaded" : "Load Shopping Cart"}
            </button>

            <button
              onClick={() => loadApp("profile")}
              disabled={loadedApps.profile}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                loadedApps.profile
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-green-500 text-white hover:bg-green-600 hover:shadow-lg"
              }`}
            >
              {loadedApps.profile ? "✅ Loaded" : "Load User Profile"}
            </button>

            <button
              onClick={resetDemo}
              className="px-6 py-3 rounded-lg font-semibold bg-red-500 text-white hover:bg-red-600 transition-all hover:shadow-lg"
            >
              🔄 Reset Demo
            </button>

            <button
              onClick={() => setShowCode(!showCode)}
              className="px-6 py-3 rounded-lg font-semibold bg-gray-700 text-white hover:bg-gray-800 transition-all hover:shadow-lg"
            >
              {showCode ? "📋 Hide Code" : "💻 Show Code"}
            </button>
          </div>

          {/* Code Example */}
          {showCode && (
            <div className="mt-4 bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto font-mono text-sm">
              <pre>{`// Host Application (Shell)
import { lazy, Suspense } from 'react';

// Lazy load remote micro-frontends
const ProductCatalog = lazy(() => 
  import('productApp/ProductCatalog')
);

const ShoppingCart = lazy(() => 
  import('cartApp/ShoppingCart')
);

// Module Federation Config (webpack.config.js)
new ModuleFederationPlugin({
  name: 'host',
  remotes: {
    productApp: 'productApp@http://product-app.com/remoteEntry.js',
    cartApp: 'cartApp@http://cart-app.com/remoteEntry.js',
  },
  shared: {
    react: { singleton: true },
    'react-dom': { singleton: true }
  }
});`}</pre>
            </div>
          )}
        </div>

        {/* Key Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-3">🚀</div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">
              Independent Deploy
            </h3>
            <p className="text-gray-600 text-sm">
              Each team can deploy their micro-frontend without coordinating
              with others
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">
              Tech Freedom
            </h3>
            <p className="text-gray-600 text-sm">
              Different teams can use different frameworks (React, Vue, Angular)
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="text-3xl mb-3">⚡</div>
            <h3 className="font-bold text-lg mb-2 text-gray-800">
              Runtime Composition
            </h3>
            <p className="text-gray-600 text-sm">
              Micro-frontends are composed at runtime, not build time
            </p>
          </div>
        </div>

        {/* Micro-Frontend Display Area */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Product Catalog */}
          <div>
            {loadedApps.catalog ? (
              <Suspense
                fallback={
                  <div className="bg-white p-6 rounded-lg border-2 border-blue-300 animate-pulse">
                    <div className="h-8 bg-blue-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                }
              >
                <ProductCatalog />
              </Suspense>
            ) : (
              <div className="bg-gray-100 p-6 rounded-lg border-2 border-dashed border-gray-300 text-center">
                <Package className="mx-auto text-gray-400 mb-3" size={48} />
                <p className="text-gray-500 font-semibold">
                  Product Catalog Not Loaded
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Click "Load Product Catalog" to see it
                </p>
              </div>
            )}
          </div>

          {/* Shopping Cart */}
          <div>
            {loadedApps.cart ? (
              <Suspense
                fallback={
                  <div className="bg-white p-6 rounded-lg border-2 border-purple-300 animate-pulse">
                    <div className="h-8 bg-purple-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                }
              >
                <ShoppingCart />
              </Suspense>
            ) : (
              <div className="bg-gray-100 p-6 rounded-lg border-2 border-dashed border-gray-300 text-center">
                <Zap className="mx-auto text-gray-400 mb-3" size={48} />
                <p className="text-gray-500 font-semibold">
                  Shopping Cart Not Loaded
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Click "Load Shopping Cart" to see it
                </p>
              </div>
            )}
          </div>

          {/* User Profile */}
          <div className="md:col-span-2">
            {loadedApps.profile ? (
              <Suspense
                fallback={
                  <div className="bg-white p-6 rounded-lg border-2 border-green-300 animate-pulse">
                    <div className="h-8 bg-green-200 rounded mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded"></div>
                  </div>
                }
              >
                <UserProfile />
              </Suspense>
            ) : (
              <div className="bg-gray-100 p-6 rounded-lg border-2 border-dashed border-gray-300 text-center">
                <Users className="mx-auto text-gray-400 mb-3" size={48} />
                <p className="text-gray-500 font-semibold">
                  User Profile Not Loaded
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  Click "Load User Profile" to see it
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle
              className="text-yellow-600 flex-shrink-0 mt-1"
              size={24}
            />
            <div>
              <p className="text-yellow-900 font-semibold mb-2">
                Real-World Scenario
              </p>
              <p className="text-yellow-800 text-sm">
                In production, each micro-frontend would be hosted on its own
                domain/CDN and loaded via Module Federation. The host app only
                knows the remote entry points. When a team deploys a new
                version, users automatically get the latest code without
                redeploying the host application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
