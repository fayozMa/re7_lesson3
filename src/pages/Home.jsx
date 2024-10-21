import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate()
  return (
    <div className="mx-auto px-4 max-w-[1200px] flex flex-wrap gap-5 mt-5">
      <button onClick={()=>navigate('./contact')} className="btn btn-primary">Contact</button>
      <button onClick={()=>navigate('./about')} className="btn btn-primary">About</button>
      <button onClick={()=>navigate('./projects')} className="btn btn-primary">Projects</button>
      <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum voluptatibus consequuntur fugiat natus maxime, minima voluptatum. Porro libero assumenda, similique consectetur architecto perferendis consequuntur soluta! Nulla perspiciatis harum provident iure.
      Eligendi tempore cum aliquid. Assumenda, qui? Nobis praesentium adipisci illo quod at voluptas inventore, aspernatur saepe. Maiores, fuga, quis in qui cum doloribus est ea expedita quo voluptas fugit et!
      Odio amet, tenetur a explicabo non dicta, nisi iure omnis quod sint veniam rem perferendis, officia quasi cupiditate voluptatem vel nam ut harum aut? Et unde quae dolores magnam laudantium?
      Odit laudantium est libero aperiam et soluta maxime rem magni debitis laborum hic, voluptatibus amet ex nisi. Ipsa vitae doloremque sequi tempora molestiae sunt nobis qui nesciunt, cupiditate, neque laborum.
      Laboriosam deleniti iure eaque nostrum rem dignissimos culpa quod earum tempore voluptas eius praesentium minus possimus qui molestias provident optio, molestiae reprehenderit labore ab magni amet nobis iste! Obcaecati, praesentium!
      Repellendus iusto ea animi, molestiae natus nobis? A fugiat unde dolorum et molestiae, ratione harum ipsam doloremque perspiciatis illo. Ipsam natus temporibus ad porro ducimus cum veniam culpa autem fugit.
      Odit deleniti sapiente quasi? Nostrum aut tenetur iusto officia repudiandae dicta officiis repellendus accusantium nulla non iure repellat magnam, alias excepturi numquam aliquid neque, natus earum, eligendi suscipit error cum.
      Nostrum nemo labore libero porro fugit. Laborum explicabo, animi aspernatur facere asperiores culpa dolorem perferendis ducimus fuga omnis a delectus suscipit mollitia nulla, consequuntur possimus nihil saepe aut hic veritatis?
      Voluptas quidem, molestiae odit, qui doloribus nemo vitae voluptatum est sed excepturi minus quasi, blanditiis quibusdam quia quaerat quae consequuntur! Impedit laborum iste eius aliquam atque praesentium nulla! Molestias, eaque?
      Labore eveniet vel veniam. Possimus, reiciendis modi? Nostrum iusto voluptates consectetur necessitatibus totam quidem, officia nihil, enim animi vitae voluptas dicta tenetur impedit odit provident magnam repellendus dolores est itaque.
      Ducimus exercitationem recusandae, laborum quia incidunt accusamus magni aut dolore, assumenda eaque nam cupiditate, fugit tempora! Totam, maiores error odio, omnis odit, quas ut ullam unde perspiciatis repellat iste rem.
      Ipsa, esse exercitationem officiis amet beatae quisquam minima optio modi iste itaque ex dolores, autem tempore molestiae est expedita dolorem magnam sit nisi necessitatibus omnis iure! Reiciendis culpa dolores voluptatem.
      Consectetur quaerat consequatur fugiat quo vero illo nostrum sequi exercitationem dicta, repudiandae temporibus libero beatae reiciendis impedit laboriosam illum eius dignissimos sit aspernatur sapiente excepturi? Distinctio quisquam ut error reprehenderit?
      Impedit minima quibusdam sit? Dicta nobis sunt laudantium dolor, molestiae ipsum voluptatum placeat unde non natus maxime laboriosam dolore nisi architecto alias vitae voluptate iure sapiente soluta perferendis! Explicabo, adipisci.
      Laborum perspiciatis odit accusamus voluptas in nemo dolorum sint commodi vero et. Odit velit, officiis totam perferendis accusamus magnam dolorum nobis asperiores nesciunt quam cupiditate nihil minima error voluptas dolore?
      Minus velit ipsam libero quod incidunt cupiditate alias rerum deleniti officia inventore hic blanditiis optio consequuntur, ullam temporibus voluptatem mollitia eos sint itaque repellendus aliquid. Illo voluptate ex asperiores ad!
      Voluptas excepturi nemo beatae reprehenderit ut fugit exercitationem, culpa veritatis, nam laboriosam, ipsa deserunt numquam unde magnam inventore illum esse explicabo accusamus fuga suscipit at officiis. Dolorum dolor aliquam consectetur.
      Aperiam, laboriosam nostrum adipisci rerum asperiores pariatur delectus blanditiis dignissimos? Incidunt eveniet inventore voluptatum eius quas. Hic quaerat aliquid, earum asperiores voluptate architecto iste nulla ullam nisi tempore veritatis sunt!
      Saepe assumenda facilis iure distinctio similique quis eos aliquid cum hic impedit reprehenderit excepturi aperiam inventore, repellat itaque? Provident est dolor voluptatem dolorum explicabo quasi accusantium odit placeat aliquid. Voluptate.
      Eius deleniti consequatur ipsa, quo autem asperiores perspiciatis delectus neque dolorem laudantium dolore, quae voluptatem? Quas, minima vel aliquid placeat vitae saepe quaerat maiores? Earum molestiae explicabo qui magnam unde?
      Rem similique autem hic quas. Nesciunt quam quisquam saepe cupiditate molestias id, velit, numquam dicta, deserunt sit consequuntur veritatis tenetur quasi dignissimos repellat architecto non enim voluptatum et earum hic.
      In nobis quia suscipit quam, et dicta minima quibusdam facilis quis, id doloribus itaque, ullam sint ducimus corporis odio veniam? Excepturi, corrupti! Tempore officia dolores sit, soluta repellat at quaerat?
      Quae architecto adipisci dolorum voluptatibus quibusdam? Adipisci, consequatur? Nisi, blanditiis nesciunt laudantium corrupti id vitae possimus nemo eveniet placeat exercitationem alias hic aut explicabo adipisci tempore sapiente commodi deleniti molestias?
      Laborum tempora natus modi, iusto beatae culpa ad, explicabo, incidunt consequuntur consectetur a nostrum similique eos temporibus? Officia possimus culpa minus. Quaerat quos vel sequi magni quod hic asperiores error.
      Velit ab dolore odit voluptate doloremque voluptatem eligendi. Repellat tempore perspiciatis reprehenderit ab repellendus aut molestias a quidem nam natus. Ratione amet commodi voluptatibus molestiae facere nihil, totam mollitia non?
      Delectus ut, provident ab inventore qui alias non eum illo suscipit voluptatibus ipsa magnam excepturi, necessitatibus tempora ad praesentium nam aliquam recusandae tempore facere veniam iusto. Obcaecati vero blanditiis ad?
      Pariatur placeat ratione deserunt, rerum illum aperiam, aliquid earum nam reiciendis neque ducimus. Saepe sit laudantium voluptatum illum facere esse quod cum perferendis tempora, qui explicabo numquam nemo officiis fugit?
      Exercitationem, suscipit dolores. Nulla perferendis soluta molestiae eum deleniti natus fugiat minima reprehenderit ratione. Amet inventore exercitationem ut laborum incidunt suscipit molestiae temporibus dolores quidem aspernatur autem eaque, ipsam sequi.
      Amet, quo cumque eaque dolorem laboriosam eligendi magni velit quisquam deleniti ipsam tempore distinctio ab accusamus molestiae qui tenetur neque itaque nesciunt animi similique possimus. Quas maiores tempora saepe iste.
      Beatae veniam alias architecto illum illo quidem quod animi, sit maiores veritatis officiis hic similique ex explicabo necessitatibus modi itaque, natus, voluptate quam tenetur. Consequuntur ut quod iste quis quisquam!</h1>
      <LazyLoadImage
        effect="blur"
        src={img1}
      />
      <LazyLoadImage
        effect="blur"
        src={img2}
      />
      <LazyLoadImage
        effect="blur"
        src={img3}
      />
      <LazyLoadImage
        effect="blur"
        src={img4}
      />
      <LazyLoadImage
        effect="blur"
        src= {img5}
      />
      <LazyLoadImage
        effect="blur"
        src={img6}
      />
      <LazyLoadImage
        effect="blur"
        src={img7}
      />
      <LazyLoadImage
        effect="blur"
        src={img8}
      />
    </div>
  );
}

export default Home;
