import useFetch from "./useFetch";
import BlogList from "./blogList";

const Home = () => {

    const { data: blogs, error, isPending } = useFetch('http://localhost:8000/blogs');

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>جاري التحميل...</div>}
            {blogs && <BlogList blogs={blogs} title="كل التدوينات" />}
        </div>
    );
}

export default Home;