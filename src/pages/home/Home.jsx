import Stories from "../../components/stories/Stories";
import "/home/bs/Documents/react-social-media-project/src/pages/home/home.scss";
import Posts from "../../components/posts/Posts";

const Home = () => {
  return (
    <>
    <div className="home">
    <Stories />
      <Posts />
      
      
    </div>
    
    </>
  )
}

export default Home;