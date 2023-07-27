import { Show, createResource, createSignal } from "solid-js";
import Card from "../components/card";
import { designs } from "../../data/db.json";
import { A } from "@solidjs/router";

// const fetchGames = async () => {
//   const res = await fetch("https://amarkotha.org/db.json");
//   return res.json();
// };

export default function Home(params) {
  //const [games] = createResource(fetchGames);

  const [searchTerm, setSearchTerm] = createSignal("");

  return (
    <Show when={designs.length > 0} fallback={<p>Loading...</p>}>
      <div class="my-4 p-2 text-xl flex items-center gap-4">
        <h2 class="rounded-sm bg-orange-500 px-2 shadow-md text-white">
          Search...
        </h2>
        <input
          class="my-5 rounded-md shadow-md px-2"
          type="text"
          name=""
          id=""
          onInput={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div class="grid grid-cols-3 gap-10 my-4">
        <For each={designs}>
          {(design) => (
            <Show
              when={
                design.title.toLowerCase().includes(searchTerm().toLowerCase()) ||
                design.description
                  .toLowerCase()
                  .includes(searchTerm().toLowerCase()) ||
                  design.searchtags
                  .toLowerCase()
                  .includes(searchTerm().toLowerCase())
              }
            >
              <A href={"/game/" + design.short}>
                <Card rounded={true} flat={false}>
                  <img src={design.img} alt={design.title}></img>
                  <h2 class="my-3 font-bold text-center text-xl">
                    {design.title}
                  </h2>
                  <div class="flex">
                    <For each={design.tags}>
                      {(tag) => (
                        <p class="m-3 px-1 rounded bg-blue-400 text-white">
                          {tag}
                        </p>
                      )}
                    </For>
                  </div>
                  <p class="my-2">{design.description}</p>
                  <A class="btn" href={"/game/" + design.short}>
                    See Design
                  </A>
                </Card>
              </A>
            </Show>
          )}
        </For>

        {/* <Card title="Run & Jump" /> */}

      </div>
    </Show>
  );
}
