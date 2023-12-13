import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Box, Button } from '@mui/material';
import styled from 'styled-components';
import Students from "../assets/smvitm.png";
import { LightPurpleButton } from '../components/buttonStyles';

const Homepage = () => {
    return (
        // <StyledContainer>
        //     <Grid container spacing={0}>
        //         <Grid item xs={12} md={6}>
        //             <img src={Students} alt="students" style={{ width: '100%' }} />
        //         </Grid>
        //         <Grid item xs={12} md={6}>
        //             <StyledPaper elevation={3}>
        //                 <StyledTitle>
        //                     {/* SMVITM */}
        //                     <br />
        //                     Institution Management
        //                     <br />
        //                     System
        //                 </StyledTitle>
        //                 {/* <StyledText>
        //                     Streamline Institution management, class organization, and add students and faculty.
        //                     Seamlessly track attendance, assess performance, and provide feedback.
        //                     Access records, view marks, and communicate effortlessly.
        //                 </StyledText> */}
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
                            //  <StyledText>
                            //     Don't have an account?{' '}
                            //     <Link to="/Adminregister" style={{color:"#550080"}}>
                            //         Sign up
                            //     </Link>
                            // </StyledText> 
        //                 </StyledBox>
        //             </StyledPaper>
        //         </Grid>
        //     </Grid>
        // </StyledContainer>
        // <>
        // <button  >
                // <StyledLink to="/choose">
                //   Login
                // </StyledLink>

        //     </button>
        // </>
        <>
             <header>
        <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
            <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <a href="https://sode-edu.in/" target='_blank' class="flex items-center">
                    <img src={Students} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">SMVITM</span>
                </a>
                <div class="flex items-center lg:order-2">
                    {/* <a href="#" class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">Sign Up</a>
                    <a href="#" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">Log in</a> */}
                </div>
                <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                    <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        <li>
                            <a href="#" class="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="https://sode-edu.in/upcoming-events/" target='_blank' class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Events</a>
                        </li>
                        <li>
                            <a href="https://sode-edu.in/about-us/about-smvitm/" target='_blank' class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</a>
                        </li>
                        <li>
                            <a href="https://sode-edu.in/contact-us/enquiry/" target='_blank' class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>

    <section class="bg-white dark:bg-gray-900">
        <div class="grid py-8 px-4 mx-auto max-w-screen-xl lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div class="place-self-center mr-auto lg:col-span-7">
                <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">Gateway for College Management</h1>
                <p class="mb-6 max-w-2xl font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">From enrollment to effortless campus management, our College System redefines academic administration. Join us to simplify every aspect of college life, creating a smarter, smoother, and more engaging educational journey.</p>
                {/* <a href="#" class="inline-flex justify-center items-center py-3 px-5 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Login
                    <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
         </a> */}
                <a class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                <StyledLink to="/choose">
                  Login
                </StyledLink>
                </a> 
               
            </div>
            <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                <img src={Students} alt="mockup" />
            </div>    
                  
        </div>
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
