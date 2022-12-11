import SliderCarousel from "../components/SliderCarousel";
import Card from "../components/Card";

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <SliderCarousel>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </SliderCarousel>


        </div>
    )
};

export default Home;