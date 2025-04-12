import { useState } from "react";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "مدونتي الاولى", body: "هذه بعض من الكلمات ..", auther: "سالم" },
        { id: 2, title: "السراب", body: "ظاهرة معروفة ويمكن مشاهدتها..", auther: "علي" },
        { id: 3, title: "لماذا المحاولة", body: "احيانا يمكنك معرفة حيل ال..", auther: "منى" }
    ]);
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>كتبت بواسطة {blog.auther}</p>
                </div>
            ))}
        </div>
    );
}

export default Home;