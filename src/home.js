import { useState } from "react";
import BlogList from "./blogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "مدونتي الاولى", body: "هذه بعض من الكلمات ..", auther: "سالم" },
        { id: 2, title: "السراب", body: "ظاهرة معروفة ويمكن مشاهدتها..", auther: "علي" },
        { id: 3, title: "لماذا المحاولة", body: "احيانا يمكنك معرفة حيل ال..", auther: "منى" },
        { id: 4, title: "على ضفاف الشمال", body: "في خيال الشعوب القديمة..", auther: "علي" },
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return (
        <div className="home">
            <BlogList blogs={blogs} title="كل التدوينات" handleDelete={handleDelete} />
        </div>
    );
}

export default Home;