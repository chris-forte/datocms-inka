import React from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import Container from "react-bootstrap/Container";

const IndexPage = ({ data }) => (
  <Layout>
   <div style={{background:'#fff', minHeight:'300px'}}>
     <Container style={{padding:'50px 0px'}}>
       In container in full width panel
     </Container>
   </div>
   <div style={{background:'#f8f8f8', minHeight:'300px'}}>
     <Container style={{padding:'50px 0px'}}>
       In container in full width panel
     </Container>
   </div>
   
  </Layout>
)

export default IndexPage


