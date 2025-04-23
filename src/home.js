import { useState, useEffect } from "react";
import BlogList from "./blogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "مدونتي الاولى", body: "هذه بعض من الكلمات ..", auther: "سالم" },
        { id: 2, title: "السراب", body: "ظاهرة معروفة ويمكن مشاهدتها..", auther: "علي" },
        { id: 3, title: "لماذا المحاولة", body: "احيانا يمكنك معرفة حيل ال..", auther: "منى" },
        { id: 4, title: "على ضفاف الشمال", body: "في خيال الشعوب القديمة..", auther: "علي" },
    ]);

    const [name, setName] = useState("Ahmad");

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("useEffect is running");
        // console.log(blogs);
        console.log(name);
    }, [name]);



    return (
        <div className="home">
            <BlogList blogs={blogs} title="كل التدوينات" handleDelete={handleDelete} />
            <button onClick={() => setName("Ali")}>غير الاسم</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;