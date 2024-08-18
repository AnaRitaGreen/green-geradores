import OurStoryImg from "../assets/foto5.jpg"

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
      </ContentContainer>
    </div>
  )
}