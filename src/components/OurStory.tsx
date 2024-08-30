import OurStoryImg from "../assets/foto5.jpg"
import Foto1Img from "../assets/foto1.jpg"
import Foto2Img from "../assets/foto2.jpg"
import Foto3Img from "../assets/foto4.jpg"

import { ContentContainer } from "./ContentContainer"

type OurStoryProps = {} & React.HTMLAttributes<HTMLDivElement>

export function OurStory(props: OurStoryProps) {
  return (
    <div {...props} className="our-story">
      <ContentContainer>
        <h1>Nossa História</h1>
        <div className="our-story-container">
          <img src={OurStoryImg} alt="" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet gravida eros. Proin dictum augue volutpat efficitur viverra. Etiam nibh libero, imperdiet in ante non, eleifend vulputate risus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam quis diam enim. Proin semper sodales orci a sagittis. Ut elementum turpis et purus scelerisque bibendum. Maecenas scelerisque semper mauris, non sodales nisl faucibus sed. Praesent eros sem, consequat ut augue ac, dapibus consectetur lacus. Donec pellentesque massa vitae nisi hendrerit iaculis. Phasellus lacus nunc, tristique quis lacus et, imperdiet auctor quam. Vivamus augue quam, lacinia eu leo ac, auctor dignissim urna. Proin ultrices aliquam nibh eu imperdiet.
          </p>
        </div>
        <div className="photos-container">
          <img src={Foto1Img} />
          <img src={Foto2Img} />
          <img src={Foto3Img} />
        </div>
      </ContentContainer>
    </div>
  )
}