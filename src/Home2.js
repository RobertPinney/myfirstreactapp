import {useState, useEffect} from 'react';
import BlogList from './BlogList';

function Home2() {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);


    // This function is being passed as a prop
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    // Useful hook for when you want to run code with every single render, could for example run authentication software
    // If an empty array, [] , is included ('a dependency array') at the end just before the final parenthese, this will cause the useeffect hook to only run at the initial render
    // If the array contains any state values (such as 'blogs' above) then the useEffct will only run if that state is invoked.
    useEffect(() => {
        console.log('use effect ran');
        console.log(blogs);
    });

    return (
        <div className="home2">
            <BlogList blogs={blogs} title='All blogs!' handleDelete={handleDelete}/>
            <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's blogs"/>
        </div>
    );
}

export default Home2;