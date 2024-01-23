
import Banner from "./components/Banner";
import Blog from "./components/Blog";
import MyStory from "./components/MyStory";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function Home() {
  return (
   <>
  <div className="space-y-10">
  <Banner/>
  <Projects/>
  <Skills/>
  <MyStory/>
  <Blog/>
  </div>
   </>
  );
}
