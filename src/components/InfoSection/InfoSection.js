
import { 
    InfoSec, 
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.elements'
import { Container } from '../../globalStyles';



const InfoSection = ({
    lightBg, 
    imgStart, 
    lightTopLine, 
    lightTextDesc, 
    description, 
    headline, 
    lightText, 
    topLine,
    alt,
    img,
    start
}) => {
    return (

        <>
           <InfoSec lightBg={lightBg}>
               <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                        <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headline}</Heading>
                        <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                        </TextWrapper>
                    </InfoColumn>
                    <InfoColumn>
                        <ImgWrapper start={start}>
                            <Img src={img} alt={alt} />
                        </ImgWrapper>
                    </InfoColumn>
                </InfoRow>
               </Container>
            </InfoSec> 
        </>
    )
}

export default InfoSection
