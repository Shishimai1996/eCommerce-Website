import styles from "./page.module.css";
import { ReceptionHead } from "./components/receptionHead";

import { CategoryPictures } from "./components/categoryPictures";
import { Products } from "./components/products";
import { InstaPics } from "./components/instaPics";

export default function Home() {
  return (
    <div>
      <main>
        <ReceptionHead />
        <CategoryPictures />
        <Products />
        <InstaPics />
      </main>
    </div>
  );
}
