import React from "react"
import styled from '@emotion/styled';
import Layout from '../components/layout';
import CurrentBook from '../components/home-currents/current-book';
import CurrentJob from '../components/home-currents/current-job';
import CurrentGeek from '../components/home-currents/current-geeking';

const ImgSection = styled.section`
height: 100vh;
background: url(/monkeyandi_478x706.jpg) no-repeat;
background-position: center;
background-size: cover;
`;

const RightSectionOuter = styled.section`
height: 100vh;
overflow: scroll;
`
const RightSectionInner = styled.section`
padding: 30px 0 0 30px;
`

export default () =>
  <div>
    <Layout>
      <ImgSection />
      <RightSectionOuter>

        <RightSectionInner>
          <h1>Hello, I'm Ben</h1>
          <h2>I build websites and web apps</h2>
          <h2>I'm currently working at:</h2>
          <CurrentJob />
          <h2>I'm currently reading:</h2>
          <CurrentBook />
          <h2>I'm currently geeking out on:</h2>
          <CurrentGeek />

        </RightSectionInner>
      </RightSectionOuter>


    </Layout>
  </div>
