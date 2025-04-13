import { useState } from "react";
import BlogList from "./blogList";
const Home = () => {
    const [blogs, setBlogs] = useState([
        { id: 1, title: "مدونتي الاولى", body: "هذه بعض من الكلمات ..", auther: "سالم" },
        { id: 2, title: "السراب", body: "ظاهرة معروفة ويمكن مشاهدتها..", auther: "علي" },
        { id: 3, title: "لماذا المحاولة", body: "احيانا يمكنك معرفة حيل ال..", auther: "منى" }
    ]);
    return (
        <div className="home">
            <BlogList blogs={blogs} title="كل التدوينات" />
        </div>
    );
}

export default Home;