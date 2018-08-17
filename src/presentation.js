// Import React
import React from 'react';
import styled, { css } from 'styled-components';

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
  Text,
  Layout,
  Fill,
  Image,
  S,
  Link,
} from 'spectacle';

import CodeSlide from 'spectacle-code-slide';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

import './assets/css/fixes.css';
import './assets/css/emoji.css'; // https://afeld.github.io/emoji-css/

// Require CSS
require('normalize.css');
require('prismjs/themes/prism.css');

const images = {
  cornMaze: require('./assets/corn_maze.jpg'),
  clientList: require('./assets/client_list.png'),
  hs2: require('./assets/hs2.png'),
  bpiPost: require('./assets/bpi_post.png'),
  wysiwyg: require('./assets/post_wysiwyg.png'),
  staticImg: require('./assets/static_image.png'),
  flexibleImg: require('./assets/flexible_image.png'),
  gatsbySourceDrupal: require('./assets/gatsby-source-drupal.png'),
  netlifyWebhooks: require('./assets/netlify_webhooks.png'),
};

const theme = createTheme(
  {
    primary: '#1F2022',
    secondary: 'white',
    tertiary: '#03A9FC',
    quartenary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

const BigList = styled(List)`
  li {
    font-size: 4rem !important;
    margin-bottom: 1.5rem;
    color: white;
    ${props => props.lightBackground && css`
      color: black;
    `}  
  }
  code {
    display: inline-block;
    font-size: 4rem !important;
    margin-bottom: 4rem;
    margin-left: 4rem;
    color: white;
    background-color: #03A9FC;
  }
  a {
    color: #03A9FC;
  }
`;

const CustomListItem = styled(ListItem)`
  font-size: 4rem !important;
  margin-bottom: 1.5rem;
  color: white;
  ${props => props.lightBackground && css`
    color: black;
  `}
`;

const CustomText = styled(Text)`
  font-size: 4rem !important;
  margin-bottom: 1.5rem !important;
  color: white !important;
  ${props => props.lightBackground && css`
    color: black !important;
  `}
`;

const MarginHeading = styled(Heading)`
  margin-bottom: 3rem !important;
`;

const Tweet = styled.div`
  width: 50%;
  margin: 4rem auto;
  color: black;
  background: white;
  border: 2px solid #03A9FC;
  a {
    color: #03A9FC;
  }
`;


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['fade']}
        transitionDuration={500}
        theme={theme}
        controls={false}
        progress="bar"
        contentHeight="97vh"
        contentWidth="95vw"
      >
        <Slide
          transition={['slide']}
          bgColor="secondary"
          notes=""
        >
          <Heading fit textColor="primary">Understanding the Limatations of</Heading>
          <Heading fit>gatsby-source-drupal</Heading>
          <Link href="http://bit.ly/hot-jams" target="_blank"><S type="underline"><Text textSize="50px" margin="3rem 0 0 0">http://bit.ly/tbd</Text></S></Link>
        </Slide>

        <Slide
          notes="This is the time I forced my 6 yr old son to run 3 miles in the pouring
          rain. Dad of the year contender right here."
        >
          <Layout>
            <Fill>
              <Heading caps>Brian Perry</Heading>
              <List>
                <CustomListItem>Sr. Front End Dev at HS2 Solutions</CustomListItem>
                <CustomListItem>Rocking the Chicago suburbs</CustomListItem>
                <CustomListItem>Lover of all things components</CustomListItem>
                <CustomListItem>... and Nintendo</CustomListItem>
              </List>
              <CustomText>&nbsp;</CustomText>
              <CustomText>d.o: brianperry</CustomText>
              <CustomText>twitter: bricomedy</CustomText>
              <CustomText>github: backlineint</CustomText>
              <CustomText>nintendo: wabrian</CustomText>
              <CustomText>brianperryinteractive.com</CustomText>
            </Fill>
            <Fill>
              <Image
                bgImage={images.cornMaze}
                height="94vh"
                width="50vw"
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide
          bgColor="secondary"
          notes=""
        >
          <Layout>
            <Fill>
              <Heading caps>HS2 Solutions</Heading>
              <Image
                src={images.clientList}
                width="60%"
                margin="30px 0 0 20%"
              />
            </Fill>
            <Fill>
              <Image
                bgImage={images.hs2}
                height="94vh"
                width="50vw"
              />
            </Fill>
          </Layout>
        </Slide>

        <Slide
          notes=""
        >
          <Image src={images.gatsbySourceDrupal} height="90vh" />
        </Slide>

        <Slide
          notes="I've been building the least important site on the internet using
          gatsby and drupal since the beginning of the year. Almost all of the data
          comes from a Drupal contenta instance and I'm using the gatsby-source-drupal
          plugin."
        >
          <MarginHeading>New Year's Resolutions...</MarginHeading>
          <Link href="http://brianperryinteractive.com" target="_blank">
            <Image src={images.bpiPost} height="80vh" />
          </Link>
        </Slide>

        <Slide
          notes=""
        >
          <MarginHeading>Who Else is Using gatsby-source-drupal?</MarginHeading>
        </Slide>

        <Slide
          notes="Mario Hernandez, Mike Herchel. Should Drupal commerce be here?
          Note about tutorials being really basic and kind of stopping when things get difficult"
        >
          <MarginHeading>Drupal Community</MarginHeading>
          <BigList>
            <ListItem>Tutorials - few go deep</ListItem>
            <ListItem>Reference Implementations: Gatsby, Contenta</ListItem>
            <ListItem>Personal sites - mostly markdown</ListItem>
            <ListItem>Decoupled Days - gatsby-source-drupal for sesison content</ListItem>
            <ListItem>outrider.org - pre gatsby-source-drupal?</ListItem>
            <ListItem>Anecdotally, lots of projects. Few specific examples</ListItem>
          </BigList>
          <MarginHeading size={3} textColor="secondary">Expected to see more...</MarginHeading>
        </Slide>

        <Slide
          notes="All kind of makes me wonder, should I be using Drupal?"
        >
          <MarginHeading>Informal Twitter Poll</MarginHeading>
          <Tweet>
            <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I tested it however I’m sticking with markdown and netlify cms just too many updates and management needed for drupal but it is excellent for lots of users which you can only get on headless cms by paying megabucks</p>&mdash; inSowerbyBridge (@inSowerbyBridge) <a href="https://twitter.com/inSowerbyBridge/status/1027485560280100864?ref_src=twsrc%5Etfw">August 9, 2018</a></blockquote>
          </Tweet>
          <Tweet>
            <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">Our Gatsby sites mostly run with WP and Contentful, based on 1) client preference and 2) less CMS config. Would be curious to try it out with Drupal, though!</p>&mdash; Leslie Cohn-Wein (@lesliecdubs) <a href="https://twitter.com/lesliecdubs/status/1027724092823224320?ref_src=twsrc%5Etfw">August 10, 2018</a></blockquote>
          </Tweet>
          <Tweet>
            <blockquote class="twitter-tweet" data-lang="en"><p lang="en" dir="ltr">I am using <a href="https://twitter.com/hashtag/drupal?src=hash&amp;ref_src=twsrc%5Etfw">#drupal</a> with <a href="https://twitter.com/hashtag/tome?src=hash&amp;ref_src=twsrc%5Etfw">#tome</a>. Excellent plugin to generate a static site out of the Drupal CMS.<br />Oh!! It has an integration with <a href="https://twitter.com/hashtag/gatsby?src=hash&amp;ref_src=twsrc%5Etfw">#gatsby</a> as well. 😉</p>&mdash; Malabya (@malavya88) <a href="https://twitter.com/malavya88/status/1027595966952693760?ref_src=twsrc%5Etfw">August 9, 2018</a></blockquote>
          </Tweet>
        </Slide>

        <Slide
          notes=""
        >
          <MarginHeading>Why Not More gatsby-source-drupal?</MarginHeading>
          <MarginHeading size={2}>Theories:</MarginHeading>
          <BigList>
            <ListItem>Starting with file/markdown then facing resistance moving to Drupal</ListItem>
            <ListItem>For some builds, Drupal may be overkill</ListItem>
            <ListItem>Growing comfort with Gatsby and more complex builds will balance this out</ListItem>
            <ListItem>We can work to make using Gatsby and Drupal easier</ListItem>
          </BigList>
        </Slide>

        <Slide
          notes=""
        >
          <MarginHeading>Example Roadblock:</MarginHeading>
          <MarginHeading size={2}>Image Handling</MarginHeading>
          <BigList>
            <ListItem>Found gatsby-remark-images first, but markdown only</ListItem>
            <ListItem>Used gatsby-image instead</ListItem>
            <ListItem>Getting the query right took trial and error</ListItem>
          </BigList>
        </Slide>

        <CodeSlide
          className="code-slide"
          bgColor="secondary"
          lang="js"
          // eslint-disable-next-line import/no-webpack-loader-syntax
          code={require("raw-loader!./assets/code/postimg.example")}
          ranges={[
            { loc: [27, 36], title: "src/templates/post.js", note: "The image file reference from Drupal." },
            { loc: [34, 45], title: "src/templates/post.js", note: "The fragment for the gatsby processed image. Sizes object used for fluid images (called fluid in v2)" },
            { loc: [0, 23], title: "src/templates/post.js", note: "Rendering the image" },
            { loc: [10, 18], title: "src/templates/post.js", note: "<PostImage /> is styled gatsby <Img /> component" },
          ]}
          notes=""
        />

        <Slide
          notes=""
        >
          <CustomText>Cool! But only one image explicitly placed in template</CustomText>
          <Image src={images.staticImg} height="80vh" />
        </Slide>

        <Slide
          notes="Fair counterpoint if this is a reasonable expectation of a decoupled build
          but gatsby-remark-images can do it.
          Could take Tome approach and have Drupal generate files that we process,
          but then we're not using gatsby-source-drupal"
        >
          <MarginHeading>Example Roadblock:</MarginHeading>
          <MarginHeading size={2}>Flexible Image Placement</MarginHeading>
          <BigList>
            <ListItem>gatsby-remark-images can handle images placed anywhere in markdown</ListItem>
            <ListItem>Could we achieve this with gatsby-source-drupal?</ListItem>
          </BigList>
        </Slide>

        <Slide
          notes=""
        >
          <MarginHeading>My (Hacky) Workaround</MarginHeading>
          <MarginHeading size={2}>Placeholder Element in Drupal Body</MarginHeading>
          <Image src={images.wysiwyg} />
        </Slide>

        <CodeSlide
          className="code-slide"
          bgColor="secondary"
          lang="js"
          // eslint-disable-next-line import/no-webpack-loader-syntax
          code={require("raw-loader!./assets/code/htmlparse.example")}
          ranges={[
            { loc: [0, 4], title: "src/templates/post.js", note: "react-html-parser converts markup to equivalent react components. No more dangerouslySetInnerHTML." },
            { loc: [38, 45], title: "src/templates/post.js", note: "Define a transform function to convert our placeholder image to the actual <PostImage /> component." },
            { loc: [46, 48], title: "src/templates/post.js", note: "Parse the body field using the transform function" },
            { loc: [50, 60], title: "src/templates/post.js", note: "Render the result in the post." },
          ]}
          notes=""
        />

        <Slide
          notes=""
        >
          <Image src={images.flexibleImg} height="60vh" />
          <BigList>
            <ListItem>Works, but doesn't feel like a long term solution</ListItem>
            <ListItem>Real need: supporting image handling plugin that functions like gatsby-remark-images, but for Drupal</ListItem>
          </BigList>
        </Slide>

        <Slide
          notes="Does this have any overlap with upcoming Gatsby Preview?"
        >
          <MarginHeading>Automating Deployment</MarginHeading>
          <MarginHeading size={2}>(Not really Gatsby specific)</MarginHeading>
          <BigList>
            <ListItem>I update Drupal, and then nothing happens.</ListItem>
            <ListItem>Let's automate!</ListItem>
          </BigList>
        </Slide>

        <Slide
          notes=""
        >
          <MarginHeading>Netlify Webhooks Module</MarginHeading>
          <Image src={images.netlifyWebhooks} height="80vh" />
        </Slide>

        <Slide
          notes=""
        >
          <MarginHeading>Other Issues</MarginHeading>
          <BigList>
            <ListItem>Gatsby <Link href="https://github.com/gatsbyjs/gatsby/pull/5020" target="_blank">PR #5020</Link> - fix to support multiple entity references (v2 only atm) </ListItem>
            <ListItem>Gatsby <Link href="https://github.com/gatsbyjs/gatsby/issues/7075" target="_blank">Issue 7075</Link> - 405 response / contact module causes gatsby-source-drupal to fail. (Open PR)</ListItem>
          </BigList>
        </Slide>

        <Slide
          notes=""
        >
          <MarginHeading>Why I'm Sticking with gatsby-source-drupal</MarginHeading>
          <BigList>
            <ListItem>I <i class="em em-sparkling_heart"></i> Drupal </ListItem>
            <ListItem>Like not having to port markdown/image files (50+ posts)</ListItem>
            <ListItem>Makes it easier to switch front ends</ListItem>
            <ListItem>Want to contribute to making Gatsby and Drupal better <i class="em em-stars"></i></ListItem>
          </BigList>
        </Slide>

        <Slide
          bgColor="secondary"
        >
          <MarginHeading textColor="tertiary" fit>Questions?</MarginHeading>
          <Heading textColor="primary">(Thanks!)</Heading>
        </Slide>

      </Deck>
    );
  }
}
