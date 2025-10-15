import { useState, useMemo, useEffect } from "react";

export default function Page() {
    return (
        <div>
            <OfferWidget />
            <TopNav />
            <DeskNav />
            <BottomNav />
            <BannerSection />
            <BestDealsSection />
        </div>
    );
}

function OfferWidget() {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  return (
    <div className="relative z-10 hidden lg:block bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Tambah pr agar area kanan “kosong” untuk close button */}
        <div className="relative flex flex-col items-center justify-between gap-3 py-4 sm:flex-row pr-16 lg:pr-20">
          {/* Left: Text */}
          <div className="flex items-center">
            <span className="mr-3 block -rotate-2 bg-amber-300 px-3 py-2 text-[20px] font-black text-gray-900">
              Black
            </span>
            <span className="text-[24px] font-semibold text-white">Friday</span>
          </div>

          {/* Middle: Discount */}
          <div className="flex items-center">
            <span className="text-[14px] text-white/90">Up to</span>
            <span className="mx-2 leading-none text-[40px] font-extrabold text-amber-500">
              59%
            </span>
            <span className="text-[20px] uppercase text-white">off</span>
          </div>

          {/* Right: Button */}
          <div className="shrink-0">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-md bg-amber-400 px-4 py-2 font-medium text-gray-900 transition hover:bg-amber-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
            >
              Shop now
              <svg
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3.625 10H17.375"
                  stroke="#191C1F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11.75 4.375L17.375 10L11.75 15.625"
                  stroke="#191C1F"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Close Button - tetap absolute, tapi kini tidak menimpa karena pr-16/pr-20 */}
          <button
            type="button"
            aria-label="Close offer banner"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded bg-gray-800 text-white transition hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M12.5 3.5L3.5 12.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.5 12.5L3.5 3.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function TopNav() {
  // state sederhana; sesuaikan kalau ingin di-lift ke parent
  const [language, setLanguage] = useState<"eng" | "man" | "russ">("eng");
  const [currency, setCurrency] = useState<"usd" | "eur">("usd");

  // warna mengikuti CSS variabel yang kamu punya
  const txt = "var(--main-nav-txt)";
  const bg = "var(--main-nav-bg)";

  return (
    <div
      className="hidden lg:block border-b border-white/20 py-[14px]"
      style={{ backgroundColor: bg }}
    >
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex items-center justify-between">
          {/* Left: Text */}
          <div className="text-[14px]" style={{ color: txt }}>
            Welcome to Clicon online eCommerce store.
          </div>

          {/* Right: Social + Switchers */}
          <div className="flex items-center">
            {/* Social */}
            <ul className="flex items-center gap-3 pr-6 mr-6 border-r border-white/20">
              <li className="text-[14px]" style={{ color: txt }}>
                Follow us:
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex h-6 w-6 items-center justify-center opacity-90 hover:opacity-100"
                  aria-label="Twitter"
                  title="Twitter"
                  style={{ color: txt }}
                >
                  {/* Twitter */}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M19.633 7.997c.013.18.013.362.013.544 0 5.545-4.221 11.94-11.94 11.94-2.37 0-4.573-.693-6.427-1.885.33.04.648.053.99.053a8.46 8.46 0 0 0 5.244-1.806 4.227 4.227 0 0 1-3.946-2.929c.258.04.514.066.785.066.38 0 .759-.053 1.113-.146a4.219 4.219 0 0 1-3.387-4.14v-.053c.56.31 1.21.5 1.899.526A4.213 4.213 0 0 1 2.86 6.7c0-.785.21-1.5.58-2.128a12.001 12.001 0 0 0 8.705 4.417 4.758 4.758 0 0 1-.106-.968 4.216 4.216 0 0 1 7.296-2.883 8.3 8.3 0 0 0 2.673-1.02 4.23 4.23 0 0 1-1.853 2.33 8.447 8.447 0 0 0 2.43-.65 9.075 9.075 0 0 1-2.351 2.215z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex h-6 w-6 items-center justify-center opacity-90 hover:opacity-100"
                  aria-label="Facebook"
                  title="Facebook"
                  style={{ color: txt }}
                >
                  {/* Facebook */}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M22 12.07C22 6.49 17.52 2 11.94 2 6.36 2 1.88 6.49 1.88 12.07c0 5.02 3.66 9.19 8.44 9.99v-7.06H7.9v-2.93h2.42V9.41c0-2.4 1.43-3.73 3.63-3.73 1.05 0 2.15.19 2.15.19v2.38h-1.21c-1.19 0-1.57.74-1.57 1.5v1.8h2.67l-.43 2.93h-2.24v7.06c4.77-.8 8.44-4.97 8.44-9.99z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex h-6 w-6 items-center justify-center opacity-90 hover:opacity-100"
                  aria-label="Pinterest"
                  title="Pinterest"
                  style={{ color: txt }}
                >
                  {/* Pinterest */}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M12.04 2C6.55 2 4 5.58 4 8.82c0 1.99.75 3.77 2.36 4.43.26.11.49 0 .56-.28.05-.19.18-.69.24-.9.08-.28.05-.38-.16-.62-.46-.54-.75-1.24-.75-2.24 0-2.89 2.17-5.48 5.65-5.48 3.08 0 4.78 1.88 4.78 4.39 0 3.31-1.47 6.11-3.66 6.11-1.21 0-2.12-1-1.83-2.23.35-1.47 1.03-3.06 1.03-4.13 0-.95-.51-1.75-1.57-1.75-1.25 0-2.26 1.29-2.26 3.01 0 1.1.37 1.84.37 1.84l-1.49 6.3c-.44 1.88-.07 4.18-.04 4.41.02.07.1.1.15.04.07-.08 1.02-1.45 1.43-2.79.1-.35.56-2.2.56-2.2.28.53 1.09 1 1.95 1 2.57 0 4.52-2.43 4.52-5.68C17.15 5.6 15.02 2 12.04 2z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex h-6 w-6 items-center justify-center opacity-90 hover:opacity-100"
                  aria-label="Reddit"
                  title="Reddit"
                  style={{ color: txt }}
                >
                  {/* Reddit */}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0ZM9.25 10.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm5.5 0a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM12 18.25c1.4 0 2.6-.56 3.45-1.44.2-.2.2-.52 0-.72a.5.5 0 0 0-.71 0c-.66.68-1.7 1.11-2.74 1.11-1.03 0-2.07-.43-2.74-1.1a.5.5 0 1 0-.71.71c.85.87 2.05 1.44 3.45 1.44ZM14.5 6.25l1.77.38a1.75 1.75 0 1 0 .2 1.1l-1.9-.41-.44 2.08a6 6 0 1 0-.94.1l.31-1.46.4-1.79Z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex h-6 w-6 items-center justify-center opacity-90 hover:opacity-100"
                  aria-label="YouTube"
                  title="YouTube"
                  style={{ color: txt }}
                >
                  {/* YouTube */}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M23 7.5s-.2-1.6-.8-2.3c-.8-.8-1.7-.8-2.1-.9C17.7 4 12 4 12 4h0s-5.7 0-8.1.3c-.4 0-1.3.1-2.1.9C1.1 5.9 1 7.5 1 7.5S.8 9.4.8 11.3v1.4C.8 14.6 1 16.5 1 16.5s.2 1.6.8 2.3c.8.8 1.9.8 2.4.9 1.8.2 7.8.3 7.8.3s5.7 0 8.1-.3c.4 0 1.3-.1 2.1-.9.6-.7.8-2.3.8-2.3s.2-1.9.2-3.8v-1.4c0-1.9-.2-3.8-.2-3.8ZM9.75 14.5V8.9l6.05 2.8-6.05 2.8Z"/>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="inline-flex h-6 w-6 items-center justify-center opacity-90 hover:opacity-100"
                  aria-label="Instagram"
                  title="Instagram"
                  style={{ color: txt }}
                >
                  {/* Instagram */}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11.001 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7.001 3.5 3.5 0 0 0 0-7ZM18 6.9a1 1 0 1 1 0 2.001 1 1 0 0 1 0-2Z"/>
                  </svg>
                </a>
              </li>
            </ul>

            {/* Switchers */}
            <div className="flex items-center gap-2">
              {/* Language */}
              <div className="relative">
                <select
                  aria-label="Language"
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as typeof language)}
                  className="appearance-none bg-transparent pr-7 pl-3 py-1.5 text-sm font-normal outline-none cursor-pointer"
                  style={{ color: txt }}
                >
                  <option value="eng">🇺🇸 English</option>
                  <option value="man">🇨🇳 Mandarin</option>
                  <option value="russ">🇷🇺 Russian</option>
                </select>
                {/* caret */}
                <svg
                  className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2"
                  width="12"
                  height="12"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  style={{ color: txt }}
                >
                  <path
                    d="M5 7l5 6 5-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Currency */}
              <div className="relative">
                <select
                  aria-label="Currency"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value as typeof currency)}
                  className="appearance-none bg-transparent pr-7 pl-3 py-1.5 text-sm font-normal outline-none cursor-pointer"
                  style={{ color: txt }}
                >
                  <option value="usd">USD — Dollar</option>
                  <option value="eur">EUR — Euro</option>
                </select>
                <svg
                  className="pointer-events-none absolute right-1 top-1/2 -translate-y-1/2"
                  width="12"
                  height="12"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                  style={{ color: txt }}
                >
                  <path
                    d="M5 7l5 6 5-6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            {/* /Switchers */}
          </div>
        </div>
      </div>
    </div>
  );
}

function DeskNav() {
  // demo state just to make the cart & user dropdowns work
  const [cartOpen, setCartOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const [items, setItems] = useState([
    {
      id: "cam",
      img: "/image/product/product-43.png",
      name: "Canon EOS 1500D DSLR Camera Body+ 18-55 mm",
      qty: 1,
      price: 1500,
    },
    {
      id: "phn",
      img: "/image/product/product-44.png",
      name: "Simple Mobile 5G LTE Galexy 12 Mini 512GB Gaming Phone",
      qty: 2,
      price: 269,
    },
  ]);

  const subTotal = useMemo(
    () => items.reduce((s, i) => s + i.qty * i.price, 0),
    [items]
  );

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  return (
    <div className="hidden lg:block">
      {/* Shell */}
      <div className="bg-[#1B6392]">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <a href="index.html" className="inline-flex items-center">
              <img
                src="/image/logo/logo-white.png"
                alt="logo"
                className="h-8 w-auto"
              />
            </a>

            {/* Search */}
            <form
              action="#"
              className="relative w-full max-w-xl mx-6 hidden xl:block"
            >
              <input
                type="text"
                className="w-full rounded-md bg-white/95 text-[#191C1F] placeholder-[#25373F]/70 border border-black/10 pl-11 pr-10 py-2.5 outline-none focus:ring-2 focus:ring-orange-400"
                placeholder="Search for anything..."
              />
              <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#191C1F]"
                >
                  <path
                    d="M9.5625 15.625C13.1869 15.625 16.125 12.6869 16.125 9.0625C16.125 5.43813 13.1869 2.5 9.5625 2.5C5.93813 2.5 3 5.43813
                        3 9.0625C3 12.6869 5.93813 15.625 9.5625 15.625Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.2031 13.7031L18 17.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </form>

            {/* Widgets */}
            <div className="flex items-center gap-4">
              {/* Cart */}
              <div className="relative">
                <button
                  id="showHiddenMenuOne"
                  className="inline-flex rounded-md p-1.5 text-white/90 hover:text-white transition"
                  onClick={() => {
                    setCartOpen((v) => !v);
                    setUserOpen(false);
                  }}
                  aria-haspopup="dialog"
                  aria-expanded={cartOpen}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M10 29C11.1046 29 12 28.1046 12 27C12 25.8954 11.1046 25 10 25C8.89543 25 8 25.8954 8 27C8 28.1046 8.89543 29 10 29Z"
                      fill="currentColor"
                    />
                    <path
                      d="M23 29C24.1046 29 25 28.1046 25 27C25 25.8954 24.1046 25 23 25C21.8954 25 21 25.8954 21 27C21 28.1046 21.8954 29 23
                                        29Z"
                      fill="currentColor"
                    />
                    <path
                      d="M5.2875 9H27.7125L24.4125 20.55C24.2948 20.9692 24.0426 21.3381 23.6948 21.6001C23.3471 21.862 22.9229 22.0025 22.4875
                                        22H10.5125C10.0771 22.0025 9.65293 21.862 9.30515 21.6001C8.95738 21.3381 8.70524 20.9692 8.5875 20.55L4.0625
                                        4.725C4.0027 4.51594 3.8764 4.33207 3.70271 4.20125C3.52903 4.07042 3.31744 3.99977 3.1 4H1"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* badge */}
                {items.length > 0 && (
                  <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-orange-500 px-1.5 text-[10px] font-semibold text-white">
                    {items.reduce((n, i) => n + i.qty, 0)}
                  </span>
                )}

                {/* Cart popup */}
                {cartOpen && (
                  <div
                    className="absolute right-0 z-50 mt-3 w-[360px] overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xl"
                    role="dialog"
                  >
                    <div className="border-b border-black/10 px-4 py-3">
                      <h6 className="text-sm font-semibold text-gray-900">
                        Shopping Cart{" "}
                        <span className="text-gray-500">
                          ({String(items.reduce((n, i) => n + i.qty, 0)).padStart(2, "0")})
                        </span>
                      </h6>
                    </div>

                    <div className="max-h-80 overflow-y-auto px-4 py-3">
                      {items.length === 0 ? (
                        <p className="text-sm text-gray-600">Your cart is empty.</p>
                      ) : (
                        items.map((it) => (
                          <div
                            key={it.id}
                            className="flex items-start gap-3 py-3 border-b last:border-b-0 border-gray-100"
                          >
                            <img
                              src={it.img}
                              alt="product"
                              className="h-14 w-14 rounded-md object-contain bg-gray-50"
                            />
                            <div className="min-w-0 flex-1">
                              <p className="line-clamp-2 text-sm text-gray-800">
                                {it.name}
                              </p>
                              <div className="mt-1 text-sm">
                                <span className="text-gray-700">{it.qty} x</span>{" "}
                                <span className="font-semibold text-gray-900">
                                  ${it.price.toLocaleString()}
                                </span>
                              </div>
                            </div>
                            <button
                              className="shrink-0 rounded-md p-1 hover:bg-gray-100"
                              onClick={() => removeItem(it.id)}
                              aria-label="Remove item"
                            >
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12.5 3.5L3.5 12.5"
                                  stroke="#929FA5"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12.5 12.5L3.5 3.5"
                                  stroke="#929FA5"
                                  strokeWidth="1.5"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </button>
                          </div>
                        ))
                      )}
                    </div>

                    <div className="flex items-center justify-between border-t border-gray-100 px-4 py-3">
                      <p className="text-xs text-gray-600">Sub-Total</p>
                      <p className="text-sm font-semibold text-gray-900">
                        ${subTotal.toLocaleString()} USD
                      </p>
                    </div>

                    <div className="space-y-2 px-4 py-3">
                      <button className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-[#191C1F] hover:bg-orange-400">
                        Checkout now
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.625 10H17.375"
                            stroke="#191C1F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.75 4.375L17.375 10L11.75 15.625"
                            stroke="#191C1F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                      <button className="inline-flex w-full items-center justify-center rounded-md border border-orange-500 px-4 py-2.5 text-sm font-semibold text-orange-600 hover:bg-orange-50">
                        View Cart
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Wishlist */}
              <button
                className="rounded-md p-1.5 text-white/90 hover:text-white transition"
                aria-label="Wishlist"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white"
                >
                  <path
                    d="M16 27C16 27 3.5 20 3.5 11.5C3.5 9.99737 4.02062 8.54114 4.97328 7.37908C5.92593 6.21703 7.25178 5.42093 8.72525
                                        5.12624C10.1987 4.83154 11.7288 5.05646 13.0551 5.76272C14.3814 6.46898 15.4221 7.61296 16 9.00001C16.5779 7.61296
                                        17.6186 6.46898 18.9449 5.76272C20.2712 5.05646 21.8013 4.83154 23.2748 5.12624C24.7482 5.42093 26.0741 6.21703 27.0267
                                        7.37908C27.9794 8.54114 28.5 9.99737 28.5 11.5C28.5 20 16 27 16 27Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* User */}
              <div className="relative">
                <button
                  id="showHiddenMenuTwo"
                  className="rounded-md p-1.5 text-white/90 hover:text-white transition"
                  onClick={() => {
                    setUserOpen((v) => !v);
                    setCartOpen(false);
                  }}
                  aria-haspopup="dialog"
                  aria-expanded={userOpen}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                  >
                    <path
                      d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeMiterlimit="10"
                    />
                    <path
                      d="M3.875 27.0001C5.10367 24.8716 6.87104 23.104 8.99944 21.875C11.1278 20.646 13.5423 19.999 16 19.999C18.4577 19.999 20.8722 20.646 23.0006 21.875C25.129 23.104 26.8963 24.8716 28.125 27.0001"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {userOpen && (
                  <div
                    id="hiddenWidgetTwo"
                    className="absolute right-0 z-50 mt-3 w-[360px] rounded-xl border border-black/10 bg-white p-5 shadow-2xl"
                    role="dialog"
                  >
                    <h2 className="mb-3 text-lg font-semibold text-gray-900">
                      Sign in to your account
                    </h2>

                    <form action="#" className="space-y-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full rounded-md border border-black/10 bg-white px-3 py-2.5 text-gray-700 placeholder-[#25373F]/70 outline-none focus:ring-2 focus:ring-orange-400"
                        />
                      </div>

                      <div>
                        <div className="mb-2 flex items-center justify-between">
                          <label
                            htmlFor="password"
                            className="text-sm font-medium text-gray-700"
                          >
                            Password
                          </label>
                          <a
                            href="#"
                            className="text-sm font-medium text-[#1B6392] hover:underline"
                          >
                            Forget Password
                          </a>
                        </div>

                        <div className="relative">
                          <input
                            id="password"
                            type="password"
                            placeholder="password"
                            className="w-full rounded-md border border-black/10 bg-white px-3 py-2.5 pr-10 text-gray-700 outline-none placeholder-[#25373F]/70 focus:ring-2 focus:ring-orange-400"
                          />
                          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                            <i className="far fa-eye" />
                          </div>
                        </div>
                      </div>

                      <button className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-[#191C1F] hover:bg-orange-400">
                        Login
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M3.625 10H17.375"
                            stroke="#191C1F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M11.75 4.375L17.375 10L11.75 15.625"
                            stroke="#191C1F"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>

                      <div className="space-y-2">
                        <p className="text-sm text-gray-600">Don’t have account</p>
                        <a
                          href="#"
                          className="inline-flex w-full items-center justify-center rounded-md border border-orange-500 px-4 py-2.5 text-sm font-semibold text-orange-600 hover:bg-orange-50"
                        >
                          Create account
                        </a>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
            {/* /widgets */}
          </div>
        </div>
      </div>
    </div>
  );
}

function BottomNav() {
  const [catOpen, setCatOpen] = useState(false);
  const [phoneSubOpen, setPhoneSubOpen] = useState(false);

  return (
    <div className="hidden lg:block">
      <div className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4">
          <div className="flex items-stretch justify-between">
            {/* Left: Categories + main nav */}
            <div className="flex items-center gap-6 py-3">
              {/* All Category (dropdown) */}
              <div className="relative">
                <button
                  className="inline-flex items-center gap-2 rounded-md border border-black/10 bg-white px-4 py-2 text-sm font-semibold text-[#191C1F] hover:bg-gray-50"
                  onClick={() => setCatOpen((v) => !v)}
                  aria-haspopup="menu"
                  aria-expanded={catOpen}
                >
                  All Category
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M13 6L8 11L3 6" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>

                {/* Root dropdown */}
                {catOpen && (
                  <div
                    className="absolute z-40 mt-2 w-[280px] overflow-hidden rounded-xl border border-black/10 bg-white shadow-xl"
                    role="menu"
                  >
                    <ul className="py-1 text-sm text-gray-800">
                      {[
                        "Computer & Laptop",
                        "Computer Accessories",
                      ].map((t) => (
                        <li key={t}>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                            {t}
                          </a>
                        </li>
                      ))}

                      {/* Smartphone with sub menu */}
                      <li
                        className="relative"
                        onMouseEnter={() => setPhoneSubOpen(true)}
                        onMouseLeave={() => setPhoneSubOpen(false)}
                      >
                        <a
                          href="#"
                          className="flex items-center justify-between px-4 py-2 hover:bg-gray-50"
                        >
                          <span>SmartPhone</span>
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                            <path
                              d="M4.5 2.25L8.25 6L4.5 9.75"
                              stroke="#191C1F"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>

                        {/* Mega submenu */}
                        {phoneSubOpen && (
                          <div className="absolute left-full top-0 z-50 ml-2 w-[720px] rounded-xl border border-black/10 bg-white p-4 shadow-2xl">
                            <div className="flex gap-6">
                              {/* Brands column */}
                              <ul className="min-w-[180px] space-y-2 text-sm">
                                {[
                                  "All",
                                  "iPhone",
                                  "Sansung",
                                  "Realme",
                                  "Xiaomi",
                                  "Oppo",
                                  "Vivo",
                                  "OnePlus",
                                  "Huawei",
                                  "Infinix",
                                  "Tecno",
                                ].map((b) => (
                                  <li key={b}>
                                    <a href="#" className="block rounded px-2 py-1 hover:bg-gray-50">
                                      {b}
                                    </a>
                                  </li>
                                ))}
                              </ul>

                              {/* Featured phones */}
                              <div className="grid flex-1 grid-cols-2 gap-4">
                                <div className="space-y-3">
                                  <h6 className="text-xs font-semibold tracking-wide text-gray-500">
                                    FEATURED PHONES
                                  </h6>

                                  {/* Card 1 */}
                                  <a href="#" className="block rounded-lg border border-gray-100 p-3 hover:bg-gray-50">
                                    <div className="flex items-center gap-3">
                                      <img
                                        src="/image/featured-itme/f-i-1.png"
                                        alt="accessories"
                                        className="h-14 w-14 rounded bg-gray-50 object-contain"
                                      />
                                      <div className="min-w-0">
                                        <p className="text-sm text-gray-800">
                                          Samsung Electronics <br /> Samsung Galexy S21 5G
                                        </p>
                                        <span className="text-sm font-semibold">$160</span>
                                      </div>
                                    </div>
                                  </a>

                                  {/* Card 2 */}
                                  <a href="#" className="block rounded-lg border border-gray-100 p-3 hover:bg-gray-50">
                                    <div className="flex items-center gap-3">
                                      <img
                                        src="/image/featured-itme/f-i-2.png"
                                        alt="accessories"
                                        className="h-14 w-14 rounded bg-gray-50 object-contain"
                                      />
                                      <div className="min-w-0">
                                        <p className="text-sm text-gray-800">
                                          Simple Mobile 5G LTE Galexy <br /> 12 Mini 512GB Gaming Phone
                                        </p>
                                        <span className="text-sm font-semibold">$1,500</span>
                                      </div>
                                    </div>
                                  </a>

                                  {/* Card 3 */}
                                  <a href="#" className="block rounded-lg border border-gray-100 p-3 hover:bg-gray-50">
                                    <div className="flex items-center gap-3">
                                      <img
                                        src="/image/featured-itme/f-i-3.png"
                                        alt="accessories"
                                        className="h-14 w-14 rounded bg-gray-50 object-contain"
                                      />
                                      <div className="min-w-0">
                                        <p className="text-sm text-gray-800">
                                          Sony DSCHX8 High Zoom <br /> Point & Shoot Camera
                                        </p>
                                        <span className="text-sm">
                                          <del className="text-gray-400">$3200</del> <span className="font-semibold">$2,300</span>
                                        </span>
                                      </div>
                                    </div>
                                  </a>
                                </div>

                                {/* Discount ad */}
                                <div className="flex items-stretch rounded-xl border border-gray-100">
                                  <div className="flex items-center justify-center bg-gray-50 p-3">
                                    <img
                                      src="/image/featured-itme/d-mobile.png"
                                      alt="accessories"
                                      className="h-28 w-28 object-contain"
                                    />
                                  </div>
                                  <div className="flex-1 p-4">
                                    <h4 className="text-lg font-semibold">21% Discount</h4>
                                    <p className="mt-1 text-sm text-gray-600">
                                      Escape the noise, It’s time to hear the magic with Xiaomi Earbuds.
                                    </p>
                                    <div className="mt-2 text-sm">
                                      <span className="text-gray-600">Starting price:</span>{" "}
                                      <span className="font-semibold">$99 USD</span>
                                    </div>
                                    <a
                                      href="#"
                                      className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-[#191C1F] hover:bg-orange-400"
                                    >
                                      Shop now
                                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" aria-hidden="true">
                                        <path d="M3.625 10H17.375" stroke="#191C1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path
                                          d="M11.75 4.375L17.375 10L11.75 15.625"
                                          stroke="#191C1F"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        ></path>
                                      </svg>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </li>

                      {[
                        "Headphone",
                        "Mobile Accessories",
                        "Gaming Console",
                        "Camera & Photo",
                        "TV & Homes Appliances",
                        "Watchs & Accessories",
                        "GPS & Navigation",
                        "Warable Technology",
                      ].map((t) => (
                        <li key={t}>
                          <a href="#" className="block px-4 py-2 hover:bg-gray-50">
                            {t}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Main nav */}
              <nav aria-label="secondary" className="text-[#5F6C72]">
                <ul className="flex items-center gap-6">
                  <li>
                    <a href="track-order.html" className="group inline-flex items-center gap-2">
                      <span className="inline-block">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M5.25 21.75H18.75" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M12 12.75C13.6569 12.75 15 11.4069 15 9.75C15 8.09315 13.6569 6.75 12 6.75C10.3431 6.75 9 8.09315 9 9.75C9 11.4069 10.3431 12.75 12 12.75Z"
                            stroke="#5F6C72"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M19.5 9.75C19.5 16.5 12 21.75 12 21.75C12 21.75 4.5 16.5 4.5 9.75C4.5 7.76088 5.29018 5.85322 6.6967 4.4467C8.10322 3.04018 10.0109 2.25 12 2.25C13.9891 2.25 15.8968 3.04018 17.3033 4.4467C18.7098 5.85322 19.5 7.76088 19.5 9.75V9.75Z"
                            stroke="#5F6C72"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-sm">Track Order</span>
                    </a>
                  </li>

                  <li>
                    <a href="compare.html" className="group inline-flex items-center gap-2">
                      <span className="inline-block">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M7.48125 9.34668H2.98125V4.84668" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M17.8312 6.16885C17.0659 5.40236 16.1569 4.79429 15.1563 4.37941C14.1557 3.96453 13.0832 3.75098 12 3.75098C10.9168 3.75098 9.84425 3.96453 8.84367 4.37941C7.84309 4.79429 6.93412 5.40236 6.16875 6.16885L2.98125 9.34698"
                            stroke="#5F6C72"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path d="M16.5188 14.6533H21.0188V19.1533" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M6.16875 17.8314C6.93412 18.5979 7.84309 19.206 8.84367 19.6209C9.84425 20.0358 10.9168 20.2493 12 20.2493C13.0832 20.2493 14.1557 20.0358 15.1563 19.6209C16.1569 19.206 17.0659 18.5979 17.8312 17.8314L21.0187 14.6533"
                            stroke="#5F6C72"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-sm">Compare</span>
                    </a>
                  </li>

                  <li>
                    <a href="support.html" className="group inline-flex items-center gap-2">
                      <span className="inline-block">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M21.1406 12.7503H18.1406C17.7428 12.7503 17.3613 12.9083 17.08 13.1897C16.7987 13.471 16.6406 13.8525 16.6406 14.2503V18.0003C16.6406 18.3981 16.7987 18.7797 17.08 19.061C17.3613 19.3423 17.7428 19.5003 18.1406 19.5003H19.6406C20.0384 19.5003 20.42 19.3423 20.7013 19.061C20.9826 18.7797 21.1406 18.3981 21.1406 18.0003V12.7503ZM21.1406 12.7503C21.1407 11.5621 20.9054 10.3856 20.4484 9.28875C19.9915 8.1919 19.3218 7.1964 18.4781 6.35969C17.6344 5.52297 16.6334 4.86161 15.5328 4.41375C14.4322 3.96589 13.2538 3.74041 12.0656 3.75031C10.8782 3.74165 9.70083 3.96805 8.60132 4.41647C7.5018 4.86488 6.50189 5.52645 5.6592 6.36304C4.81651 7.19963 4.1477 8.19471 3.69131 9.29094C3.23492 10.3872 2.99997 11.5629 3 12.7503V18.0003C3 18.3981 3.15804 18.7797 3.43934 19.061C3.72064 19.3423 4.10218 19.5003 4.5 19.5003H6C6.39782 19.5003 6.77936 19.3423 7.06066 19.061C7.34196 18.7797 7.5 18.3981 7.5 18.0003V14.2503C7.5 13.8525 7.34196 13.471 7.06066 13.1897C6.77936 12.9083 6.39782 12.7503 6 12.7503H3"
                            stroke="#5F6C72"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span className="text-sm">Customer Support</span>
                    </a>
                  </li>

                  <li>
                    <a href="#" className="group inline-flex items-center gap-2">
                      <span className="inline-block">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path
                            d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                            stroke="#5F6C72"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path d="M11.25 11.25H12V16.5H12.75" stroke="#5F6C72" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          <path
                            d="M12.1875 7.875C12.1875 8.08211 12.0196 8.25 11.8125 8.25C11.6054 8.25 11.4375 8.08211 11.4375 7.875C11.4375 7.66789 11.6054 7.5 11.8125 7.5C12.0196 7.5 12.1875 7.66789 12.1875 7.875Z"
                            fill="#191C1F"
                            stroke="#5F6C72"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </span>
                      <span className="text-sm">Need Help</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            {/* Right: Tell */}
            <div className="flex items-center gap-3 text-[#191C1F]">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gray-100">
                <svg width="20" height="20" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path
                    d="M17.4343 4.375C18.9185 4.77332 20.2718 5.55499 21.3584 6.64159C22.445 7.72818 23.2266 9.08147 23.625 10.5656"
                    stroke="#191C1F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16.5266 7.75488C17.4192 7.99195 18.2333 8.46077 18.8864 9.11384C19.5395 9.7669 20.0083 10.581 20.2454 11.4736"
                    stroke="#191C1F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.1172 13.6504C11.0176 15.5098 12.5211 17.0095 14.3828 17.9051C14.5201 17.9701 14.672 17.9983 14.8235 17.9868C14.975 17.9752 15.1209 17.9245 15.2469 17.8395L17.9812 16.0129C18.1021 15.931 18.2417 15.881 18.387 15.8676C18.5324 15.8542 18.6788 15.8778 18.8125 15.9363L23.9312 18.1348C24.1062 18.2076 24.2524 18.3359 24.3472 18.4999C24.4421 18.664 24.4804 18.8546 24.4562 19.0426C24.294 20.3089 23.6759 21.4726 22.7177 22.3162C21.7594 23.1597 20.5266 23.6251 19.25 23.6254C15.3049 23.6254 11.5214 22.0582 8.73179 19.2686C5.94218 16.479 4.375 12.6955 4.375 8.7504C4.37529 7.47377 4.84073 6.24099 5.68425 5.28273C6.52776 4.32447 7.69153 3.70639 8.95781 3.54415C9.14576 3.52001 9.33643 3.55832 9.50047 3.65319C9.66451 3.74805 9.79281 3.89421 9.86562 4.06915L12.0641 9.19884C12.1212 9.33047 12.1451 9.47414 12.1337 9.61719C12.1223 9.76024 12.0758 9.89829 11.9984 10.0192L10.1719 12.7973C10.0906 12.9229 10.0428 13.0673 10.0333 13.2167C10.0237 13.3661 10.0526 13.5154 10.1172 13.6504V13.6504Z"
                    stroke="#191C1F"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <div className="text-sm font-semibold">+1-202-555-0104</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type Slide = {
  subtitle: string;
  title: string;
  text: string;
  img: string;
  price: string;
};

function BannerSection() {
  const slides: Slide[] = useMemo(
    () => [
      {
        subtitle: "THE BEST PLACE TO PLAY",
        title: "Xbox Consoles",
        text: "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
        img: "/image/banner/x-box.png",
        price: "$299",
      },
      {
        subtitle: "THE BEST PLACE TO PLAY",
        title: "Xbox Consoles",
        text: "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
        img: "/image/banner/x-box.png",
        price: "$499",
      },
      {
        subtitle: "THE BEST PLACE TO PLAY",
        title: "Xbox Consoles",
        text: "Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.",
        img: "/image/banner/x-box.png",
        price: "$599",
      },
    ],
    []
  );

  const [idx, setIdx] = useState(0);

  const go = (n: number) => setIdx((p) => (n + slides.length) % slides.length);
  const next = () => go(idx + 1);
  const prev = () => go(idx - 1);

  // Auto-play
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="grid gap-6 2xl:grid-cols-12">
          {/* Left: Slider (col-xxl-8) */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-[#F2F4F5]">
              {/* track */}
              <div
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${idx * 100}%)` }}
                aria-live="polite"
              >
                {slides.map((s, i) => (
                  <div key={i} className="min-w-full">
                    <div className="flex flex-col-reverse items-center gap-6 p-6 md:flex-row md:justify-between md:p-10">
                      {/* content */}
                      <div className="max-w-xl">
                        <h6 className="mb-2 flex items-center gap-2 text-xs font-semibold tracking-wider text-[#1B6392]">
                          <span className="inline-block h-[2px] w-6 bg-[#1B6392]" />
                          {s.subtitle}
                        </h6>
                        <h2 className="text-3xl font-bold text-[#191C1F] md:text-4xl">
                          {s.title}
                        </h2>
                        <p className="mt-3 text-sm text-[#5F6C72] md:text-base">{s.text}</p>

                        <a
                          href="#"
                          className="mt-5 inline-flex items-center gap-2 rounded-md bg-orange-500 px-5 py-3 text-sm font-semibold text-[#191C1F] hover:bg-orange-400"
                        >
                          Shop now
                          <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M3.625 10H17.375" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path
                              d="M11.75 4.375L17.375 10L11.75 15.625"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </div>

                      {/* image group */}
                      <div className="relative">
                        <img
                          src={s.img}
                          alt="x-box"
                          className="h-56 w-auto object-contain md:h-64 lg:h-72"
                        />
                        <div className="absolute -right-2 -top-2 rounded-full bg-[#1B6392] px-4 py-2 text-white shadow-md">
                          <span className="text-lg font-bold">{s.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* controls */}
              <button
                onClick={prev}
                aria-label="Previous slide"
                className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M15 6L9 12L15 18" stroke="#191C1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Next slide"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="#191C1F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              {/* dots */}
              <div className="pointer-events-auto absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Go to slide ${i + 1}`}
                    onClick={() => setIdx(i)}
                    className={`h-2.5 rounded-full transition-all ${i === idx ? "w-6 bg-[#1B6392]" : "w-2.5 bg-gray-300"}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right: Ads (col-xxl-) */}
          <div className="lg:col-span-4">
            <div className="flex flex-col lg:flex-row gap-6">
              {/* Ad One */}
              <div className="rounded-2xl border border-black/10 bg-[#F2F4F5] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h6 className="text-sm font-semibold text-amber-500">Summer Sales</h6>
                    <h3 className="mt-2 text-2xl font-bold leading-tight text-[#191C1F]">
                      New Google <br /> Pixel 6 Pro
                    </h3>
                    <a
                      href="#"
                      className="mt-4 inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-[#191C1F] hover:bg-orange-400"
                    >
                      Shop now
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M3.625 10H17.375" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path
                          d="M11.75 4.375L17.375 10L11.75 15.625"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                  <div className="relative">
                    <img
                      src="/image/add/add-mobile-1.png"
                      alt="mobile"
                      className="h-32 w-32 object-contain"
                    />
                    <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white shadow">
                      29% OFF
                    </span>
                  </div>
                </div>
              </div>

              {/* Ad Two */}
              <div className="rounded-2xl border border-black/10 bg-white p-6">
                <div className="flex items-center gap-6">
                  <img
                    src="/image/add/airpods.png"
                    alt="mobile"
                    className="h-28 w-28 object-contain"
                  />
                  <div>
                    <h3 className="text-2xl font-bold leading-tight text-[#191C1F]">
                      Xiaomi <br /> FlipBuds Pro
                    </h3>
                    <span className="mt-2 block text-sm font-semibold text-[#191C1F]">
                      $229 USD
                    </span>
                    <a
                      href="#"
                      className="mt-3 inline-flex items-center gap-2 rounded-md bg-orange-500 px-4 py-2.5 text-sm font-semibold text-[#191C1F] hover:bg-orange-400"
                    >
                      Shop now
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none">
                        <path d="M3.625 10H17.375" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path
                          d="M11.75 4.375L17.375 10L11.75 15.625"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              {/* /Ad Two */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type TimeLeft = { d: number; h: number; m: number; s: number };

function useCountdown(target: Date) {
  const [left, setLeft] = useState<TimeLeft>(() => calcLeft(target));
  useEffect(() => {
    const t = setInterval(() => setLeft(calcLeft(target)), 1000);
    return () => clearInterval(t);
  }, [target]);
  return left;
}

function calcLeft(target: Date): TimeLeft {
  const diff = Math.max(0, target.getTime() - Date.now());
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

const Star = () => (
  <svg width="18" height="17" viewBox="0 0 18 17" fill="none" aria-hidden="true">
    <path
      d="M9.34375 13.8985L13.2812 16.3985C13.7891 16.7188 14.4141 16.2422 14.2656 15.6563L13.125 11.1719C13.0942 11.0476 13.0991 10.9171 13.1391 10.7955C13.1792 10.6738 13.2529 10.566 13.3516 10.4844L16.8828 7.53908C17.3437 7.15627 17.1094 6.38283 16.5078 6.34377L11.8984 6.04689C11.7727 6.03958 11.6518 5.99578 11.5505 5.92086C11.4492 5.84594 11.3719 5.74314 11.3281 5.62502L9.60937 1.29689C9.56388 1.17182 9.48099 1.06377 9.37198 0.987422C9.26296 0.911072 9.13309 0.870117 9 0.870117C8.8669 0.870117 8.73703 0.911072 8.62802 0.987422C8.519 1.06377 8.43612 1.17182 8.39062 1.29689L6.67187 5.62502C6.62807 5.74314 6.5508 5.84594 6.44952 5.92086C6.34824 5.99578 6.22733 6.03958 6.10156 6.04689L1.49218 6.34377C0.890622 6.38283 0.656247 7.15627 1.11718 7.53908L4.64843 10.4844C4.74713 10.566 4.82077 10.6738 4.86085 10.7955C4.90094 10.9171 4.90584 11.0476 4.875 11.1719L3.82031 15.3281C3.64062 16.0313 4.39062 16.6016 4.99218 16.2188L8.65625 13.8985C8.759 13.8331 8.87824 13.7984 9 13.7984C9.12176 13.7984 9.241 13.8331 9.34375 13.8985Z"
      fill="#EBC80C"
    />
  </svg>
);

function BestDealsSection() {
  // ganti deadline sesuai kebutuhanmu
  const deadline = useMemo(() => {
    // contoh: 7 hari dari sekarang
    const d = new Date();
    d.setDate(d.getDate() + 7);
    return d;
  }, []);
  const t = useCountdown(deadline);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4">
        {/* Header */}
        <div className="flex flex-col items-start justify-between gap-4 border-b border-gray-100 py-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-[#191C1F]">Best Deals</h2>
          </div>

          <div className="flex flex-col items-start gap-3 md:flex-row md:items-center">
            <div>
              <h6 className="text-sm font-semibold text-[#191C1F]">Deals ends in</h6>
            </div>
            <div className="flex items-center gap-2">
              <TimePill label="Days" value={t.d} />
              <Colon />
              <TimePill label="Hrs" value={t.h} />
              <Colon />
              <TimePill label="Min" value={t.m} />
              <Colon />
              <TimePill label="Sec" value={t.s} />
            </div>
          </div>

          <div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-sky-500 hover:text-sky-600"
            >
              Browse All Product
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M3.125 10H16.875" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.25 4.375L16.875 10L11.25 15.625" stroke="#2DA5F3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>

        {/* Product area */}
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {/* Big product (spans 2 cols on lg) */}
          <div className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-2xl border border-black/10 bg-white p-5 md:p-6">
              <div className="grid items-center gap-6 md:grid-cols-2">
                <div className="order-2 md:order-1">
                  <ul className="mb-3 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <li key={i}>
                        <Star />
                      </li>
                    ))}
                    <li className="text-sm text-gray-500">(52,677)</li>
                  </ul>
                  <h6 className="mb-2 line-clamp-2 text-base font-semibold text-[#191C1F]">
                    Xbox Series S - 512GB SSD Console with Wireless Controller - EU Versio...
                  </h6>
                  <span className="mb-3 inline-block text-sm font-semibold text-[#191C1F]">
                    <del className="mr-2 text-gray-400">$865.99</del>$442.12
                  </span>
                  <p className="mb-5 text-sm text-[#5F6C72]">
                    Games built using the Xbox Series X|S development kit showcase unparalleled load times, visuals.
                  </p>

                  <div className="flex items-center gap-2">
                    <a
                      href="#"
                      aria-label="wishlist"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-black/10 hover:bg-gray-50"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.625 7.49803 3.01546 6.40585 3.72996 5.53431C4.44445 4.66277 5.43884 4.0657 6.54393 3.84468C7.64903 3.62366 8.79657 3.79235 9.79131 4.32204C10.7861 4.85174 11.5665 5.70972 12 6.75001C12.4335 5.70972 13.2139 4.85174 14.2087 4.32204C15.2034 3.79235 16.351 3.62366 17.4561 3.84468C18.5612 4.0657 19.5555 4.66277 20.27 5.53431C20.9845 6.40585 21.375 7.49803 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
                          stroke="#191C1F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>

                    <a
                      href="#"
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-orange-500 px-4 py-3 text-xs font-bold tracking-wide text-[#191C1F] hover:bg-orange-400"
                    >
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" aria-hidden="true">
                        <path
                          d="M7.75 16.875C7.75 17.1511 7.52614 17.375 7.25 17.375C6.97386 17.375 6.75 17.1511 6.75 16.875C6.75 16.5989 6.97386 16.375 7.25 16.375C7.52614 16.375 7.75 16.5989 7.75 16.875Z"
                          fill="currentColor"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                        <path d="M15.375 18.125C16.0654 18.125 16.625 17.5654 16.625 16.875C16.625 16.1846 16.0654 15.625 15.375 15.625C14.6846 15.625 14.125 16.1846 14.125 16.875C14.125 17.5654 14.6846 18.125 15.375 18.125Z" fill="currentColor" />
                        <path
                          d="M4.30469 5.625H18.3203L16.2578 12.8437C16.1842 13.1057 16.0266 13.3363 15.8093 13.5C15.5919 13.6638 15.3268 13.7516 15.0547 13.75H7.57031C7.29819 13.7516 7.03308 13.6638 6.81572 13.5C6.59836 13.3363 6.44078 13.1057 6.36719 12.8437L3.53906 2.95313C3.50169 2.82246 3.42275 2.70754 3.3142 2.62578C3.20565 2.54401 3.0734 2.49986 2.9375 2.5H1.625"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="uppercase">Add to cart</span>
                    </a>

                    <a
                      href="#"
                      aria-label="quick view"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-black/10 hover:bg-[#191C1F] hover:text-white"
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path
                          d="M12 4.25C4.5 4.25 1.5 12 1.5 12C1.5 12 4.5 19.75 12 19.75C19.5 19.75 22.5 12 22.5 12C22.5 12 19.5 4.25 12 4.25Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>

                  {/* badges */}
                  <div className="mt-3 flex items-center gap-2">
                    <span className="badge rounded bg-amber-400 px-2 py-1 text-xs font-semibold text-gray-900">32% OFF</span>
                    <span className="badge rounded bg-red-500 px-2 py-1 text-xs font-semibold text-white">HOT</span>
                  </div>
                </div>

                <div className="order-1 md:order-2">
                  <img
                    src="/image/product/ps5.png"
                    alt="ps5"
                    className="w-full max-w-xl object-contain"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Small products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:col-span-3">
            {SMALL_PRODUCTS.map((p) => (
              <div key={p.id} className="relative rounded-2xl border border-black/10 bg-white p-4">
                <div className="relative overflow-hidden rounded-xl bg-gray-50">
                  <img src={p.img} alt="card" className="mx-auto w-full max-w-[360px] object-contain" />
                  <div className="pointer-events-none absolute inset-0 bg-[#191C1F]/0 transition" />
                  {/* hover buttons */}
                  <div className="absolute inset-x-0 bottom-3 flex items-center justify-center gap-2 opacity-0 transition-opacity hover:opacity-100">
                    <a
                      href="#"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white shadow"
                      aria-label="wishlist"
                    >
                      {HeartIcon()}
                    </a>
                    <a
                      href="#"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-white shadow"
                      aria-label="add to cart"
                    >
                      {CartIcon()}
                    </a>
                    <a
                      href="#"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#191C1F] text-white shadow"
                      aria-label="quick view"
                    >
                      {EyeIcon()}
                    </a>
                  </div>
                </div>

                <div className="mt-3">
                  <h6 className="line-clamp-2 text-sm font-semibold text-[#191C1F]">{p.title}</h6>
                  <p className="mt-1 text-sm font-semibold text-[#191C1F]">
                    {p.price.old ? (
                      <>
                        <del className="mr-2 text-gray-400">{p.price.old}</del>
                        {p.price.new}
                      </>
                    ) : (
                      p.price.new
                    )}
                  </p>
                </div>

                {p.badge && (
                  <span
                    className={`absolute right-4 top-4 rounded px-2 py-1 text-xs font-semibold ${
                      p.badge.variant === "danger"
                        ? "bg-red-500 text-white"
                        : p.badge.variant === "warning-strong"
                        ? "bg-amber-400 text-gray-900"
                        : "bg-gray-400 text-white"
                    }`}
                  >
                    {p.badge.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- helpers & data ---------------- */

function Colon() {
  return <span className="text-lg font-semibold text-[#191C1F]">:</span>;
}
function TimePill({ label, value }: { label: string; value: number }) {
  const v = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center">
      <div className="rounded-md bg-[#F2F4F5] px-3 py-2 text-sm font-bold text-[#191C1F]">{v}</div>
      <div className="mt-1 text-[10px] uppercase tracking-wide text-gray-500">{label}</div>
    </div>
  );
}

function HeartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 20.25C12 20.25 2.625 15 2.625 8.62501C2.625 7.49803 3.01546 6.40585 3.72996 5.53431C4.44445 4.66277 5.43884 4.0657 6.54393 3.84468C7.64903 3.62366 8.79657 3.79235 9.79131 4.32204C10.7861 4.85174 11.5665 5.70972 12 6.75001C12.4335 5.70972 13.2139 4.85174 14.2087 4.32204C15.2034 3.79235 16.351 3.62366 17.4561 3.84468C18.5612 4.0657 19.5555 4.66277 20.27 5.53431C20.9845 6.40585 21.375 7.49803 21.375 8.62501C21.375 15 12 20.25 12 20.25Z"
        stroke="#191C1F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CartIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.25 20.25C8.25 20.6642 7.91421 21 7.5 21C7.08579 21 6.75 20.6642 6.75 20.25C6.75 19.8358 7.08579 19.5 7.5 19.5C7.91421 19.5 8.25 19.8358 8.25 20.25Z"
        fill="#191C1F"
        stroke="#191C1F"
        strokeWidth="1.5"
      />
      <path
        d="M17.25 21.75C18.0784 21.75 18.75 21.0784 18.75 20.25C18.75 19.4216 18.0784 18.75 17.25 18.75C16.4216 18.75 15.75 19.4216 15.75 20.25C15.75 21.0784 16.4216 21.75 17.25 21.75Z"
        fill="#191C1F"
      />
      <path
        d="M3.96562 6.75H20.7844L18.3094 15.4125C18.2211 15.7269 18.032 16.0036 17.7711 16.2C17.5103 16.3965 17.1922 16.5019 16.8656 16.5H7.88437C7.55783 16.5019 7.2397 16.3965 6.97886 16.2C6.71803 16.0036 6.52893 15.7269 6.44062 15.4125L3.04688 3.54375C3.00203 3.38696 2.9073 3.24905 2.77704 3.15093C2.64677 3.05282 2.48808 2.99983 2.325 3H0.75"
        stroke="#191C1F"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 4.25C4.5 4.25 1.5 12 1.5 12C1.5 12 4.5 19.75 12 19.75C19.5 19.75 22.5 12 22.5 12C22.5 12 19.5 4.25 12 4.25Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const SMALL_PRODUCTS = [
  {
    id: "p1",
    img: "/image/product/product-1.png",
    title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..",
    price: { new: "$2,300" },
    badge: { text: "SOLD OUT", variant: "gray" as const },
  },
  {
    id: "p2",
    img: "/image/product/product-2.png",
    title: "Simple Mobile 4G LTE Prepaid Smartphone",
    price: { new: "$220" },
  },
  {
    id: "p3",
    img: "/image/product/product-3.png",
    title: "4K UHD LED Smart TV with Chromecast Built-in",
    price: { old: "$865", new: "$1,50" },
    badge: { text: "19% OFF", variant: "warning-strong" as const },
  },
  {
    id: "p4",
    img: "/image/product/product-4.png",
    title: "Sony DSCHX8 High Zoom Point & Shoot Camera",
    price: { new: "$1,200" },
  },
  {
    id: "p5",
    img: "/image/product/product-5.png",
    title: "Bose Sport Earbuds - Wireless Earphones - Bluetooth In Ear..",
    price: { new: "$299" },
  },
  {
    id: "p6",
    img: "/image/product/product-6.png",
    title: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
    price: { old: "$865.99", new: "$70" },
  },
  {
    id: "p7",
    img: "/image/product/product-7.png",
    title: "Portable Wshing Machine, 11lbs capacity Model 18NMFIAM",
    price: { new: "$1,50" },
    badge: { text: "hot", variant: "danger" as const },
  },
  {
    id: "p8",
    img: "/image/product/product-8.png",
    title: "2-Barrel Carburetor Carb 2100 Engine Increase Horsepower",
    price: { old: "$360", new: "$250" },
    badge: { text: "32% OFF", variant: "warning-strong" as const },
  },
];