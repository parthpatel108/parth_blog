import React from 'react';

import { Layout } from 'antd';

import Header from '../components/PageLayout/Header';

import SidebarWrapper from '../components/PageLayout/Sidebar';
import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Skills from '../components/PageFragments/HomePage/SkillProgress';
import InstantEvent from '../components/InstantEvent'
export default (props) => {

  const dataset = props.data.allEventDatasetJson.edges;
  // Modify json to step up 1level of node
  for (let i = 0; i < dataset.length; i++) {
    if (dataset[i]) dataset[i] = dataset[i].node
  }
  return (<Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SidebarWrapper>
        <>
          <AboutMe />
          <Skills />
          <InstantEvent location={props.location} dataset={dataset} />
          {console.log(props)}
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>);

};
export const query = graphql`
  query ListEventQuery {
    allEventDatasetJson(filter: {}) {
      edges {
        node{

       node {
            audience
            brand
            country
            countryIso
            date
            dm: date(formatString: "M")
            eventSite
            eventTime
            eventTitle
            eventType
            events
            healthcare
            id
            image
            month
            panel
            region
            retail
            twitter
            webinarLink
            bfsi
            cfo
            chro
            cio
            ciso
            city
            cmo
            cx
        } }
      }
    }
  }
`