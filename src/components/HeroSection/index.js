import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, SocialMediaIcons,SocialMediaIcon, HeroButton } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpeg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { IoDocumentTextOutline } from "react-icons/io5";
import { CiLinkedin, CiMail } from "react-icons/ci";

const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>
                            Hi, I am <br /> {Bio.name}
                        </Title>
                        <TextLoop>
                            {/* I am a */}
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '25px' }}>
                            <HeroButton href={Bio.resume} target='display'> <IoDocumentTextOutline size="1.5rem" /> Resume</HeroButton>
                            <HeroButton href={Bio.linkedin} target='display'> <CiLinkedin size="1.5rem" /> LinkedIn</HeroButton>
                            <HeroButton href="mailto:pablomtz.dev@outlook.com"> <CiMail size="1.5rem" /> Email me</HeroButton>
                        </div>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>

            </HeroContainer>
        </div>
    )
}

export default HeroSection