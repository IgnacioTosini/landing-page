import { ProductList } from "./ProductList";
import { HowToBuy } from './HowToBuy';
import '../../styles/components/main/_main.scss';

export const Main = () => {
    return (
        <main className="main">
            <section id="productos" className="sectionTextContainer">
                <h2>Nuestros Productos</h2>
                <p>Cada collar es único y está hecho con materiales de alta calidad.</p>
            </section>
            <ProductList />
            <HowToBuy />
        </main>
    );
};