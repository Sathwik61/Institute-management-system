import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/smvitm.png";
import { LightPurpleButton } from '../components/buttonStyles';
// import mp4 from '../media/'
const Homepage = () => {
    return (
        // <StyledContainer>
        //     <Grid container spacing={0}>
                
        //         <Grid item xs={12} md={6}>
        //             <StyledPaper elevation={3}>
                       
        //                 <StyledBox>
        //                     <StyledLink to="/choose">
        //                         <LightPurpleButton variant="contained" fullWidth>
        //                             Login
        //                         </LightPurpleButton>
        //                     </StyledLink>
        //                     {/* <StyledLink to="/chooseasguest">
        //                         <Button variant="outlined" fullWidth
        //                             sx={{ mt: 2, mb: 3, color: "#7f56da", borderColor: "#7f56da" }}
        //                         >
        //                             Login as Guest
        //                         </Button>
        //                     </StyledLink> */}
        //                     {/* <StyledText>
        //                         Don't have an account?{' '}
        //                         <Link to="/Adminregister" style={{color:"#550080"}}>
        //                             Sign up
        //                         </Link>
        //                     </StyledText> */}
        //                 </StyledBox>
        //             </StyledPaper>
        //         </Grid>
        //     </Grid>
        // </StyledContainer>
        <>
        <header class="header">
			<h1>SMVITM</h1>

			<div class="hamburger"></div>
		</header>

		<nav class="navigation">
			<ul>
				<li><a class="nav_link" href="#">Login</a></li>
				
				<li><a class="nav_link" href="https://sode-edu.in/upcoming-events/">Events</a></li>
				<li><a class="nav_link" href="https://sode-edu.in/">About</a></li>
				<li><a class="nav_link" href="https://sode-edu.in/contact-us/enquiry/">Contact</a></li>
			</ul>
		</nav>

		<section class="video_container">
			<video autoplay loop muted src="../media/background.mp4"></video>
			<div class="overlay"></div>

			<section class="content_container">
				<h1 class="album_title">SMVITM</h1>
				<h3 class="subtitle">College Management System</h3>
				
				<button class="order_button">Continue....</button>
			</section>
		</section>
        </>
    );
};

export default Homepage;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const StyledPaper = styled.div`
  padding: 24px;
  height: 100vh;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  gap: 16px;
  padding: 24px;
`;

const StyledTitle = styled.h1`
  font-size: 3rem;
  color: #252525;
  /* font-family: "Manrope"; */
  font-weight: bold;
  padding-top: 0;
  letter-spacing: normal;
  line-height: normal;
`;

const StyledText = styled.p`
  /* color: #550080; */
  margin-top: 30px;
  margin-bottom: 30px; 
  letter-spacing: normal;
  line-height: normal;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
