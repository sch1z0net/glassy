import Container from "@mui/material/Container";
import {Draggable} from "./Draggable";
import * as React from "react";
import {useState} from "react";
import Typography from "@mui/material/Typography";

export const LogoText = ({imageUrl, imageSize, maskSize, maskText, textSize, fontFam, initialPos, imageFilter, logoFilter, logoBlur, shadowBlur, logoInvert, tX, tY}) => {
    //pos: initialPos ? initialPos : { x: `calc(50% - ${maskSize/2})`, y: `calc(50% - ${maskSize/2})` },

    const [stateImage, setStateImage] = useState({
        pos: initialPos ? initialPos : { x: `calc(50% - ${imageSize/2})`, y: `calc(50% - ${imageSize/2})` },
        dragging: false,
        rel: {} // position relative to the cursor
    });

    const [stateMask, setStateMask] = useState({
        pos: initialPos ? initialPos : { x: `calc(50% - ${maskSize/2})`, y: `calc(50% - ${maskSize/2})` },
        dragging: false,
        rel: {} // position relative to the cursor
    });

    var TextElement = <Typography
        style={{
            pointerEvents: 'none',
            userSelect:'none',
            width:'100%',
            height:'100%',
            //border:'solid 3px black',
            lineHeight: '0.9'
        }}
        fontSize={textSize+"%"}
        fontFamily={fontFam}
    >
        {maskText}
    </Typography>;


    return (
        <>
            <Container
                maxWidth="sm"
                sx={{
                    textAlign: 'center',
                    height: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute'
                }}
            >
                <Draggable
                    size={imageSize}
                    fixOnAxis={'none'}
                    className="dragImage"
                    url={imageUrl}
                    filter={imageFilter}
                    //filter={'blur(3px)'}
                    state={stateImage}
                    setState={setStateImage}
                />

                <Draggable
                    size={maskSize*2}
                    fixOnAxis={'none'}
                    className="dragMask"
                    filter={`invert(100%) blur(${logoBlur}px) drop-shadow(1px 1px ${shadowBlur}px rgba(0,0,0,0.9))`}
                    mixBlendMode = {(logoInvert === true) ? 'difference' : 'none'}
                    state={stateMask}
                    setState={setStateMask}
                >
                    {TextElement}
                </Draggable>
            </Container>


            <Container
                maxWidth="sm"
                sx={{
                    position: 'absolute',
                    textAlign: 'center',
                    height: '500px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    mixBlendMode: 'darken',
                }}
            >
                <Draggable
                    size={imageSize}
                    fixOnAxis={'none'}
                    className="dragImage"
                    color={"white"}
                    state={stateImage}
                    setState={setStateImage}
                />
                <Draggable
                    size={maskSize*2}
                    fixOnAxis={'none'}
                    className="dragMask"
                    filter={'blur(2px)'}
                    mask={true}
                    state={stateMask}
                    setState={setStateMask}
                >
                    {TextElement}
                </Draggable>
                <Draggable
                    size={imageSize}
                    fixOnAxis={'none'}
                    className="dragImage"
                    transform={`translateX(${tX}px) translateY(${tY}px)`}
                    url={imageUrl}
                    filter={logoFilter}
                    mixBlendMode={'lighten'}
                    state={stateImage}
                    setState={setStateImage}
                />
            </Container>
        </>
    );
}