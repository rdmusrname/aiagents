import styled from "styled-components";
import Page from "components/Page";
import RichText from "components/RichText";
import { EnvVars } from "env";

export default function AboutPage() {
    return (
        <Page title="About">
            <AboutContainer>
                <RichText>
                    <p><strong>About {EnvVars.SITE_NAME}: Pioneering Autonomous AI Agents</strong></p>
                    <p>Welcome to {EnvVars.SITE_NAME}, where we're at the forefront of next-generation autonomous AI agents. Our mission is to revolutionize businesses across industries by harnessing the power of cutting-edge artificial intelligence.</p>
                    <p>At {EnvVars.SITE_NAME}, we specialize in developing adaptive, intelligent agents that seamlessly integrate into your operations. Our AI solutions are designed to drive innovation and efficiency, leveraging advanced technologies such as collaborative learning and neuro-symbolic reasoning.</p>
                    <p>We believe that the future of business lies in the intelligent automation and decision-making capabilities of AI agents. As this technology evolves, it's transforming traditional business processes and opening up new possibilities for growth and optimization.</p>
                    <p>Our team is dedicated to pushing the boundaries of what's possible with AI. We're constantly exploring new applications of autonomous agents, from enhancing customer service to revolutionizing healthcare and e-commerce. Our goal is to create AI solutions that not only meet the current needs of businesses but also anticipate and adapt to future challenges.</p>
                    <p>At {EnvVars.SITE_NAME}, we're committed to ethical AI development. We prioritize transparency, fairness, and privacy in all our solutions, ensuring that our AI agents are not only powerful but also trustworthy and aligned with human values.</p>
                    <p>We're excited about the potential of AI agents to transform industries and improve lives. Whether you're looking to streamline your operations, enhance decision-making processes, or create more personalized user experiences, our AI agents are designed to meet your unique business needs.</p>
                    <p>Join us on this exciting journey as we shape the future of AI and business. Discover how our autonomous AI agents can revolutionize your operations and drive your business forward in the digital age.</p>
                    <p>Ready to experience the power of next-generation AI? <a href="/contact">Contact us</a> to request a demo or learn more about our cutting-edge solutions.</p>
                </RichText>
            </AboutContainer>
        </Page>
    );
}

const AboutContainer = styled.div`
  max-width: 90rem;
  margin: auto;
  overflow-x: auto;
`;
