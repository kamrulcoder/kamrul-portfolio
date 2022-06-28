import React from "react";
import {
  Row,
  Col,
  Card,
  ListGroupItem,
  ListGroup,
  Container,
  Button,
} from "react-bootstrap";
import "./Project.css";

import  {projects}  from  "../../portfolio" ; 

import { GoCode, GoLinkExternal } from "react-icons/go";

import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript,
  DiNodejsSmall,
  DiMongodb,
  TbBrandNextjs,
  DiSass,
  DiFirebase,
} from "react-icons/di";

import { IoLogoFirebase } from "react-icons/io5";

export default function Projects() {
  console.log(projects)
  return (
    <>
      <div className="projects" id="portfolio">
        <Container>
          <div className="project-hedear">
            <h2>Projects</h2>
            <span></span>
          </div>
          <Row>

          {projects.map(project => (
            <Col lg={4}  key={project.title}>
              <Card style={{ width: "100%", margin: "20px 0" }}>
              <div className="window">
                <Card.Img
                  variant="top"
                  src={require(`../../assets/images/${project.image || ""}`)}
                />
                </div>
                <Card.Body>
                  <Card.Title>{project.title} </Card.Title>
                 
                  <ul className="portfolio-feature">
                  <h6>Features___</h6>
                  {project.features.map(feature => (
                    <li  key={feature}>{feature}</li>
                  ))}
                    
                  </ul>
                 
                  <ul className="dev-icons  project-icon">
                   {project.classname.map(icon => (
                    <li  key={icon}>
                    <span  
                      className="iconify"
                      data-icon={icon}
                      // style={skills.style}
                      data-inline="false"
                    ></span>
                    </li>
                  ))}
                    
                  </ul>
                </Card.Body>

                <Card.Footer>
                  <div className="projectButtons">
                    <Button variant="warning"  href={project.codeLink}  target="_blank">
                      {" "}
                      Code <GoCode />
                    </Button>{" "}
                    <Button style={{ background: "#363435" }}  href={project.liveLink}  target="_blank">
                      {" "}
                      Demo <GoLinkExternal />
                    </Button>{" "}
                  </div>
                </Card.Footer>
              </Card>
            </Col>
          ))}
            
          </Row>
        </Container>
      </div>
    </>
  );
}
