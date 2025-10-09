import ProductCarousel from "../components/ProductCarousel";
import AllProductsSection from "../components/AllProductsSection";
import Categories from "../components/ImageCarouselSection";
import BestSellingSection from "../components/BestSelling";
import NotFound from "../components/NotFound";
import ProductPage from "../components/ProductPage";


const FirstPage = () => {
    return(
        <>
        <ProductCarousel/>
        <AllProductsSection/>
        <BestSellingSection/>
        <Categories/>
        <NotFound/>
        <ProductPage/>
        </>
    );
};

export default FirstPage;
