import React from "react"
import { Row, Col } from "antd"
import AboutTile from "../../AbouTile"
import { stripTags, domHtml } from "../../../utils/stripTags"

import SEO from "../../Seo"

const pageText = {
  paraOne: `Hello, my name is <b>Parth Patel</b>, and I am a full-stack web developer with expertise in <b>PHP</b>, <b>CodeIgniter</b>, <b>CakePHP</b>, <b>React</b>, <b>Gatsby</b>, <b>Netlify</b>, <b>Sanity Studio</b>, <b>Node</b>, and <b>AWS Amplify</b>, as well as <b>Android app development</b> using Java. In addition, I am skilled in <b>MySQL</b> and <b>cPanel hosting</b>. With 5+ years of experience in the industry, I have honed my skills to deliver high-quality and scalable web applications and mobile apps to clients across various industries.`,
  paraTwo: `Currently I work mostly with Javascript technologies like <b>ReactJS</b> and <b>NodeJS</b>. I also
    have hands on experience working with API(Web services) and have deployed applications
    keeping scalability in mind. I'm always a learner and a self taught programmer.`,
  p2: `In my career, I have built CRM and websites from scratch using CodeIgniter and CakePHP frameworks, integrated third-party APIs into existing web applications, and developed custom CMS using Sanity and Node.js. I am proficient in creating fast and responsive web applications using React and Gatsby, and I have extensive experience in deploying web applications using Netlify and AWS Amplify.`,
  p3: `In addition, I have expertise in MySQL and have worked with various databases, including designing and optimizing database schema and writing complex queries. I am also experienced in cPanel hosting and have deployed and managed web applications on various hosting platforms.`,
  p4: `With my skills and experience, I am confident in my ability to deliver outstanding web applications and mobile apps that meet and exceed client expectations. I am always looking for new challenges and opportunities to expand my knowledge and skills in web development, mobile app development, and database management.`,
}

const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(
    pageText.p2
  )} ${stripTags(pageText.paraTwo)}`
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={[
            "Parth",
            "Patel",
            "FullStack developer",
            "Javascript",
            "ReactJS",
            "NodeJS",
            "Gatsby",
          ]}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraOne)}></p>
        <p>{pageText.p2}</p>
        <p>{pageText.p3}</p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
        <p>{pageText.p4}</p>
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="location.png"
            height={60}
            alt="location image"
            textH4="Born and bought up in"
            textH3="Balasinor, Guj, India"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="coffee.png"
            alt="coffee image"
            textH4="Love Tea"
            textH3="Tea + Me = Happiness"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Socially Awkward"
            textH3="At times"
          />
        </Col>
        {/* <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="motorcycle.png"
            alt="motorcycle image"
            textH4="Love Riding"
            textH3="Biker for life"
          />
        </Col> */}
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued BE in"
            textH3="Computer Engineering"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  )
}
export default AboutMe
