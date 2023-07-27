import { createSignal } from "solid-js";
import { Routes, Route, A } from "@solidjs/router";

import banner from "./assets/caffe_games_banner.png";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Game from "./pages/Game";
function App() {
  const [darkTheme, setDarkTheme] = createSignal(false);

  function toggleTheme() {
    setDarkTheme(!darkTheme());
  }

  return (
    <div class="container m-auto">
      <header
        class="my-4 p-2 text-xl flex items-center gap-4"
        classList={{ "bg-neutral-900": darkTheme(), "text-white": darkTheme() }}
      >
        {/* <span
          class="material-symbols-outlined cursor-pointer"
          onClick={toggleTheme}
        >
          light_mode
        </span> */}

        <A href="/">
          <h1 class="m-3 px-3 py-2 rounded bg-red-500 text-white text-2xl">
            Design Station
          </h1>
        </A>
        {/* <A href="/cart">Cart</A> */}
      </header>
      <img
        class="rounded-md"
        src="/images/design_station_banner.png"
        alt="CAFFE Games Banner"
      />

      <Routes>
        <Route path="/" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/game/:short" component={Game} />
      </Routes>
    </div>
  );
}

export default App;
