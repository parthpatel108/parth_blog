import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div style={{marginTop:20}}>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={80}
          text="Javascript"
        />
        <ProgressBar
          percent={60}
          text="ReactJS"
        />
        <ProgressBar
          percent={70}
          text="Gatsby"
        />
        <ProgressBar
          percent={80}
          text="NodeJS"
        />
         <ProgressBar
          percent={80}
          text="Selenium with JAVA"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
      <ProgressBar
          percent={90}
          text="Html/CSS"
        />
        <ProgressBar
          percent={80}
          text="Android"
        />
        <ProgressBar
          percent={90}
          text="Mysql"
        />
        <ProgressBar
          percent={78}
          text="MongoDB"
        />
        <ProgressBar
          percent={90}
          text="PHP"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
