'use client'
import React, { useState } from 'react'
import BlogCard from './BlogCard'

const blogInfo = [
  {
    imageLink:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*Q5WzPrFACb2CGa6ZYIWf4w.png',
    heading: 'Post 1 Crafting a Comprehensive Guide to Material-UI (MUI) for Beginners',
    details: 'I embark on a journey to create a series of informative posts delving into the realm of Material-UI (MUI), tailored for beginners. ',
    link: 'https://medium.com/@enayetflweb/post-1-crafting-a-comprehensive-guide-to-material-ui-mui-for-beginners-f8356ab49109'
  },
  {
    imageLink:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*dD1Y8e4sQQbFTo4RAt9tuA.png',
    heading: 'Post 2: Unveiling Material-UI — What, Features, and Why?',
    details: "In today's discussion, we'll delve into the world of Material-UI (MUI), breaking down three essential points: understanding MUI, exploring its key features, and uncovering why it's a game-changer for developers.",
    link: 'https://medium.com/@enayetflweb/post-2-unveiling-material-ui-what-features-and-why-fa9f9ee86601'
  },
  {
    imageLink:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*jHdzisVhPdTMDJGbCuOhEA.png',
    heading: 'Part 3: Installing Material-UI, Emotion, and Styled-Components',
    details: 'While Styled-Components is another styling option, note that as late 2021, it may not well with server-rendered  projects.',
    link: 'https://medium.com/@enayetflweb/part-3-installing-material-ui-emotion-and-styled-components-3f352112b374'
  },
  {
    imageLink:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*jHdzisVhPdTMDJGbCuOhEA.png',
    heading: 'Part 4: Installing Fonts in Your Project',
    details: 'In this section, we’ll cover how to install fonts in your project, focusing on the default Roboto font used by Material-UI. ',
    link: 'https://medium.com/@enayetflweb/part-4-installing-fonts-in-your-project-2157d1fbe7da'
  },
  {
    imageLink:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*dC8lbTvtWAj6sTZo2qhcbQ.png',
    heading: 'Part 5: Material-UI (MUI) Icons',
    details: 'Material-UI (MUI) provides its own set of SVG icons, enhancing the visual elements of your React applications. To utilize these icons, you first need to install the Material Icons font, and you can do this either through npm or by using the  CDN. ',
    link: 'https://medium.com/@enayetflweb/part-5-material-ui-mui-icons-48b14c6fac7e'
  },
  {
    imageLink:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*-mTZ8zGB6xYLL_FOUMomuQ.png',
    heading: 'Part 6: Exploring Material-UI (MUI) Website Components and Templates',
    details: 'On the left-hand side, you’ll find the “Getting started” tab. It offers links providing an overview.',
    link: 'https://medium.com/@enayetflweb/part-6-exploring-material-ui-mui-website-components-and-templates-f74c3a88129a'
  },
  {
    imageLink:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*WRfxnCVRm3w1jetzKXXV8Q.png',
    heading: 'Part 7: Exploring Layout Components — Box Component in Material-UI',
    details: 'Within Material-UI’s layout components, the foundational Box component takes the spotlight. This versatile container acts as a fundamental building block. ',
    link: 'https://medium.com/@enayetflweb/part-7-exploring-layout-components-box-component-in-material-ui-559f497c9b15'
  },
  {
    imageLink:'https://miro.medium.com/v2/resize:fit:518/format:webp/1*KLk7EG2fW5-f2QkVmNxe4g.png',
    heading: 'Part 8: Exploring Layout Components: Container in Material-UI: A Beginner’s Guide',
    details: 'In Material-UI, the Container component serves as a fundamental layout element, making it easy to center your content horizontally. ',
    link: 'https://medium.com/@enayetflweb/part-8-exploring-layout-components-container-in-material-ui-a-beginners-guide-53762b170de5'
  },
  {
    imageLink:'https://miro.medium.com/v2/resize:fit:518/format:webp/1*KLk7EG2fW5-f2QkVmNxe4g.png',
    heading: 'Part 9: Exploring Layout Components: Stack in MUI',
    details: 'The Stack component in Material-UI is like a container that helps arrange elements either vertically or horizontally. It’s handy for simple layouts where items are aligned in one direction. ',
    link: 'https://medium.com/@enayetflweb/part-9-exploring-layout-components-stack-in-mui-9c2bf478348b'
  },
  {
    imageLink:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*wDrIixoYE3ixGKAUuJ1qqQ.jpeg',
    heading: 'Part 10: Exploring Layout Components',
    details: 'Material-UI’s Grid component is a powerful tool for creating responsive layouts in your web applications. It follows the principles of Material Design, offering a 12-column grid system that adapts to different screen.',
    link: 'https://medium.com/@enayetflweb/part-10-exploring-layout-components-understanding-material-ui-grid-for-beginners-bbd6e8bd8bd2'
  },
  {
    imageLink:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*dC8lbTvtWAj6sTZo2qhcbQ.png',
    heading: 'Part 11: Mastering Typography in Material UI for Beginners',
    details: 'Today, let’s unravel the captivating realm of typography — a cornerstone in website design. Typography, a pivotal player in shaping information presentation, finds its ally in the Material UI Typography.',
    link: 'https://medium.com/@enayetflweb/part-11-mastering-typography-in-material-ui-for-beginners-554bfff11929'
  },
  {
    imageLink:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*fxXU-vY1P18C40f3ZQpDyA.png',
    heading: 'Part 12: Demystifying Buttons in React with Material UI: A Beginner’s Guide',
    details: 'In this guide, we’ll unravel the mysteries of buttons using Material UI, a popular React UI framework.',
    link: 'https://medium.com/@enayetflweb/part-12-demystifying-buttons-in-react-with-material-ui-a-beginners-guide-a3910379a49f'
  },
  {
    imageLink:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*6gopaaUzRa09cJjJgKgVnQ.png',
    heading: 'Part 13 Exploring the World of Material UI Cards in React: A Practical Walkthrough',
    details: 'In this guide, we’ll delve into the diverse universe of Material UI cards in React, unraveling the intricacies of different card types with detailed examples.',
    link: 'https://medium.com/@enayetflweb/part-13-exploring-the-world-of-material-ui-cards-in-react-a-practical-walkthrough-2f0d2749e7af'
  },
  {
    imageLink:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*OlQVC0FeZSRtbE4Ig3FeXg.png',
    heading: 'Part 14 Exploring the World of Material UI Cards in React: A Practical Walkthrough- Part 2',
    details: 'Now, let’s dive into a card with complex interaction, exemplified by a recipe card with expandable details.',
    link: 'https://medium.com/@enayetflweb/part-14-exploring-the-world-of-material-ui-cards-in-react-a-practical-walkthrough-part-2-057047cee770'
  },
  {
    imageLink:'https://miro.medium.com/v2/resize:fit:720/format:webp/1*TwbcQpdQ9zeMLu4MUJhCDg.jpeg',
    heading: 'Part 15 Exploring the World of Material UI Cards in React: A Practical Walkthrough- Part 3',
    details: 'Next, let’s explore a card that incorporates media elements, featuring a captivating lizard.',
    link: 'https://medium.com/@enayetflweb/part-15-exploring-the-world-of-material-ui-cards-in-react-a-practical-walkthrough-part-3-232736a3548a'
  },
]

const Blog = () => {
  const initialCardCount = 6;
  const [visibleCards, setVisibleCards] = useState(initialCardCount)

  const showMoreCards = () => {
    setVisibleCards((prevCount) => prevCount + initialCardCount)
  }
  return (
    <div>
      {/* section heading */}
      <h1 className='text-6xl py-5 mb-5'>My Blogs<span className='text-signature'>.</span></h1>
      {/* blog card */}
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
      {
        blogInfo.slice(0, visibleCards).map(blog => (
          <BlogCard key={blog.heading} image={blog.imageLink} heading={blog.heading} details={blog.details} link={blog.link} />
        ))
      }
    
    </div>
    {
      visibleCards < blogInfo.length && (
        <div className='text-center mt-5'>
          <button onClick={showMoreCards}
          className='px-4 py-2 bg-signature rounded-lg text-white hover:bg-hover'>Show More</button>
        </div>
      )
    }
    </div>
  )
}

export default Blog