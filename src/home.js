import { useState, useEffect } from "react";
import BlogList from "./blogList";
const Home = () => {
    const [blogs, setBlogs] = useState(null);

    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        setTimeout(() => fetch('http://localhost:8000/blogs')
            .then(res => res.json())
            .then(data => {
                setBlogs(data);
                setIsPending(false);
            }), 1000);
    }, []);



    return (
        <div className="home">
            {isPending && <div>جاري التحميل...</div>}
            {blogs && <BlogList blogs={blogs} title="كل التدوينات" />}
        </div>
    );
}

export default Home;