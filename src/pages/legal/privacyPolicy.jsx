import React, { Fragment } from 'react';
import { Container, Typography } from '@material-ui/core';
import Header from '../header/index';
import Footer from '../footer/index';

const PrivacyPolicy = props => {
    return (
        <Fragment>
            <Header {...props} />
            <Container align="left" style={{ padding: 20, marginTop: 80 }}>
                <Typography variant="h3" display="block">Privacy Policy</Typography>
                <Typography variant="body2" display="block" style={{ marginTop: 20 }}>We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy, or our practices with regards to your personal information, please contact us.</Typography>

                <Typography variant="body2" display="block" style={{ marginTop: 20 }}>This Privacy Policy governs the privacy policies and practices of our Website, located at PrivacyPolicies.com. Please read our Privacy Policy carefully as it will help you make informed decisions about sharing your personal information with us.</Typography>

                <Typography variant="body2" display="block" style={{ marginTop: 20 }}>We last updated our Privacy Policy on 22 January 2020.</Typography>

                <Typography variant="h4" display="block" style={{ marginTop: 20 }}>What personal data we collect and why we collect it</Typography>
                <Typography variant="body2" display="block" style={{ marginTop: 20 }}>As a Visitor, you can browse our Website to find out more about our Website. You are not required to provide us with any personal information as a Visitor.</Typography>

                <Typography variant="body2" display="block" style={{ marginTop: 20 }}>We collect your personal information when you are contacting us.</Typography>

                <Typography variant="body2" display="block" style={{ marginTop: 20 }}>Generally, you control the amount and type of information you provide to us when using our Website. The personal information that we collect depends on the context of your interaction with us and the Website, the choices you make and the features you use. The personal information we collect can include the following:</Typography>

                <Typography variant="body2" display="block" style={{ marginTop: 20 }}>Name, Email Address and Contact Data</Typography>
                <Typography variant="h4" display="block" style={{ marginTop: 20 }}>Automatically Collected Information</Typography>
                <Typography variant="body2" display="block" style={{ marginTop: 20 }}>When you use our Website, we automatically collect certain computer information by the interaction of your mobile phone or web browser with our Website. Such information is typically considered non-personal information. We also collect the following:</Typography>
                <Typography variant="h5" display="block" style={{ marginTop: 20 }}>Cookies</Typography>
                <Typography variant="body2" display="block" style={{ marginTop: 20 }}>Our Website uses "Cookies" to identify the areas of our Website that you have visited. A Cookie is a small piece of data stored on your computer or mobile device by your web browser. We use Cookies to personalize the Content that you see on our Website. Most web browsers can be set to disable the use of Cookies. However, if you disable Cookies, you may not be able to access functionality on our Website correctly or at all. We never place Personally Identifiable Information in Cookies.</Typography>
                <Typography variant="h5" display="block" style={{ marginTop: 20 }}>Third Party Tracking Tools</Typography>
                <Typography variant="body2" display="block" style={{ marginTop: 20 }}>We also use third party tracking tools to improve the performance and features of our Website. These third party tracking tools are designed to collect only non-personal information about your use of our Website. However, you understand that such tools are created and managed by parties outside our control. As such, we are not responsible for what information is actually captured by such third parties or how such third parties use and protect that information.</Typography>
                <Typography variant="h5" display="block" style={{ marginTop: 20 }}>Log Information</Typography>
                <Typography variant="body2" display="block" style={{ marginTop: 20, paddingBottom: 40 }}>We automatically receive information from your web browser or mobile device. This information includes the name of the website from which you entered our Website, if any, as well as the name of the website to which you're headed when you leave our website. This information also includes the IP address of your computer/proxy server that you use to access the Internet, your Internet Website provider name, web browser type, type of mobile device, and computer operating system. We use all of this information to analyze trends among our Users to help improve our Website.</Typography>
            </Container>
            <Footer {...props} page="Privacy Policy" />
        </Fragment>
    );
}

export default PrivacyPolicy;