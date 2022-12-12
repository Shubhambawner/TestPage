import SliderCarousel from "../components/SliderCarousel";
import Card from "../components/Card";
import Form from "../components/Form";

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
        <Form/>

        </div>
    )
};

export default Home;