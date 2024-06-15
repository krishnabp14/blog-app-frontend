import BlogCard from "./BlogCard";
import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import BlogPage from "./BlogPage";

const Blogs = () => {    

    return (
        <>
        <div style={{marginTop: '15px', padding: '10px 100px', display: 'flex', flexDirection: 'row', gap: 20, flexWrap: 'wrap', justifyContent: 'center'}}>
            <BlogCard
                id={1}
                image={image1}
                title="Sample Blog Post"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies nulla felis."
                buttonLabel="Read more"
            />
            <BlogCard
                id={2}
                image={image2}
                title="Sample Blog Post"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies nulla felis."
                buttonLabel="Read more"
            />
            <BlogCard
                id={3}
                image={image3}
                title="Sample Blog Post"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies nulla felis."
                buttonLabel="Read more"
            />
            <BlogCard
                id={4}
                image={image2}
                title="Sample Blog Post"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies nulla felis."
                buttonLabel="Read more"
            />
            <BlogCard
                id={6}
                image={image1}
                title="Sample Blog Post"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies nulla felis."
                buttonLabel="Read more"
            />
            <BlogCard
                id={7}
                image={image2}
                title="Sample Blog Post"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies nulla felis."
                buttonLabel="Read more"
            />
            <BlogCard
                id={8}
                image={image3}
                title="Sample Blog Post"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies nulla felis."
                buttonLabel="Read more"
            />
            <BlogCard
                id={9}
                image={image2}
                title="Sample Blog Post"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies nulla felis."
                buttonLabel="Read more"
            />
        </div>
        </>

    )
}

export default Blogs;