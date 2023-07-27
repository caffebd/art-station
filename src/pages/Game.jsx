import { A, useParams } from "@solidjs/router";
import { designs } from "../../data/db.json";

function name(params) {}

export default function Game() {
  const params = useParams();
  let myDesign = designs.find((design) => {
    return design.short === params.short;
  });
  //   let myGame = {};
  //   games.forEach((element) => {
  //     if (element.short == params.short) {
  //       myGame = element;
  //     }
  // });
  return (
    <div class="my-7">
      <Show when={myDesign != {}} fallback={<p>Loading...</p>}>
        <div class="grid grid-cols-5 gap-24 grid-rows-4  ">
          <div class="col-span-3 row-span-full">
          <iframe width="700" height="394" src={myDesign.vid}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>

          <div class="col-span-2">
            <h2 class="text-3xl font-bold mb-7">{myDesign.title}</h2>
            <img src={myDesign.img} alt={myDesign.title}></img>
            <p class="text-xl mb-7">{myDesign.description}</p>
          
            <a class="btn" href={myDesign.dl} >
             Download File
            </a>
   
        
          </div>
        </div>
      </Show>
    </div>
  );
}




{/* <Show
when={myDesign.tags.includes("MakeCode")}
fallback={
  <Show
    when={myGame.tags.includes("JavaScript")}
    fallback={<img src={myGame.img} alt="product image" />}
  >
    <iframe
      frameborder="0"
      src={myGame.embedurl}
      allowfullscreen=""
      width="800"
      height="620"
    ></iframe>
  </Show>
}
>
<iframe
  style="width:100%;height:100%;"
  src={myGame.embedurl}
  allowfullscreen="allowfullscreen"
  sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
  frameborder="0"
></iframe>
</Show> */}