import React,{Component} from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import Img from "gatsby-image";
import opensans from "typeface-open-sans";
import logo from "../../images/gatsby-icon.png";

const HeaderWrapper = styled.div`
  background: #524763;
  margin-bottom: 1.45rem;
  overflow: hidden;
  position: relative;
  height: 70vh;
  h1 {
    img {
      height: 80px;
    }
  }
`;

const HeaderContainer = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
  position: relative;
  z-index: 2;
  display:flex;
  justify-content:space-between;
`;

const MainNav = styled.nav`
 ul{
     list-style:none;
     display:flex;
     li{
         margin-left:10px;
        
        font-family: ${opensans};
         a {
             text-decoration:none;
             color:#fff;
             &:hover {
                 border-bottom: 3px solid #524763;
             }
         }
     }
 }
`;



class Header extends Component {
    componentDidUpdate = (prevProps, prevState) => {
      console.log('path is ',this.props.location.pathname);
    }
    
  render() {
      const {data} = this.props;
    return (
        <HeaderWrapper>
        <HeaderContainer>
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: "white",
                textDecoration: "none"
              }}
            >
            <div style={{display:'flex'}}>  <img src={logo} alt="Level Up Logo" />
              {data.site.siteMetadata.title}</div>
            
            </Link>
          </h1>
          <MainNav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </MainNav>
        </HeaderContainer>
        <Img
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            opacity: 0.3
          }}
          sizes={data.background.childImageSharp.fixed}
        />
      </HeaderWrapper>
    )
  }
}



export default Header;
