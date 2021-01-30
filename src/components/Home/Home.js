import React from 'react'
import video from './video.mp4'
import {
    HomePage,
    BackgroundVideo,
    Intro,
    Legend,
    Title,
    HighLight,
    Desc,
    Row,
    Button
} from './HomeElements'
import Nav from '../NavBar/NavBar'

const Home = (bg,right,Border=true) => {

    bg = true
    right = true


    return (
        <HomePage>
            <BackgroundVideo autoPlay loop muted src={video} />
            <Nav bg={bg} />
            <Intro>
                <Legend>
                    Get Well Soon, Earth
                </Legend>
                <Title>
                    Let's Help Recover The Earth, 
                    <HighLight>
                        Start From Us!
                    </HighLight>
                </Title>
                <Desc>
                    The outbreak of the coronavirus issue or called Covid-19 makes the Earth grieve
                </Desc>
                <Row>
                    <Button to='learn-more'>Learn More</Button>
                    <Button right={right} Border={Border} to='explore'>Explore</Button>
                </Row>
            </Intro>
        </HomePage>
    )
}

export default Home
