import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';

import './fonts.css';
import {Draggable} from "./Draggable";
import {useState} from "react";
import {FormControl, InputLabel, MenuItem, Select, Slider} from "@mui/material";
import theme from './theme';
import {Deblur, LensBlur, SwapHoriz, SwapVert} from "@mui/icons-material";
import {LogoText} from "./LogoText";

export default function App() {

    const [stateTB, setStateTB] = useState({
        pos: { x: 0, y: 0 },
        dragging: false,
        rel: {} // position relative to the cursor
    });

    const defaultImg1 = 'https://e0.pxfuel.com/wallpapers/795/582/desktop-wallpaper-pc-hintergrundbild-novocom-top-natural.jpg';
    const defaultImg2 = 'https://images.unsplash.com/photo-1542242476-5a3565835a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2731&q=80';
    const defaultMask1= 'https://www.svgrepo.com/show/521297/node-16.svg'; //JS
    const defaultMask2= 'https://www.svgrepo.com/show/11841/twitter.svg';  //Twitter
    const defaultMask3 = 'https://pic.onlinewebfonts.com/thumbnails/icons_347009.svg'; //CSS
    const defaultMask4 = 'https://pic.onlinewebfonts.com/thumbnails/icons_174082.svg'; //HTML
    const defaultMask5 = 'https://pic.onlinewebfonts.com/thumbnails/icons_195165.svg'; //Instagram

    const [imageUrl, setImageUrl] = useState(defaultImg1);
    const [imageSize, setImageSize] = useState('500');
    const [maskUrl, setMaskUrl] = useState(defaultMask1);
    const [maskSize, setMaskSize] = useState('150');
    const [textSize, setTextSize] = useState('1000');

    const [filter, setFilter] = useState('');
    const [logoFilter, setLogoFilter] = useState('');
    const [logoBlur, setLogoBlur] = useState('1');
    const [shadowBlur, setShadowBlur] = useState('1');
    const [logoInvert, setLogoInvert] = useState('false');
    const [tX, setTX] = useState('0');
    const [tY, setTY] = useState('0');
    const [logoText, setLogoText] = useState('');

    const stopDragging = event => {
        event.stopPropagation();
    };
    const handleChangeImage = event => {
        setImageUrl(event.target.value);
        event.stopPropagation();
        event.preventDefault();
        stateTB.dragging = false;
    };
    const handleImageSize = event => {
        setImageSize(event.target.value);
        event.stopPropagation();
        event.preventDefault();
        stateTB.dragging = false;
    };
    const handleChangeMask = event => {
        setMaskUrl(event.target.value);
        event.stopPropagation();
        event.preventDefault();
        stateTB.dragging = false;
    };
    const handleMaskSize = event => {
        setMaskSize(event.target.value);
        event.stopPropagation();
        event.preventDefault();
        stateTB.dragging = false;
    };
    const handleTextSize = event => {
        setTextSize(event.target.value);
        event.stopPropagation();
        event.preventDefault();
        stateTB.dragging = false;
    };
    const handleImageFilter = event => {
        setFilter(event.target.value);
        event.stopPropagation();
        event.preventDefault();
        stateTB.dragging = false;
    };
    const handleLogoFilter = event => {
        setLogoFilter(event.target.value);
        event.stopPropagation();
        event.preventDefault();
        stateTB.dragging = false;
    };

    const handleLogoBlur = event => {
        setLogoBlur(event.target.value);
        event.stopPropagation();
        event.preventDefault();
        stateTB.dragging = false;
    };

    const handleShadowBlur = event => {
        setShadowBlur(event.target.value);
        event.stopPropagation();
        event.preventDefault();
        stateTB.dragging = false;
    };

    const handleTX = event => {
        setTX(event.target.value);
        event.stopPropagation();
        event.preventDefault();
        stateTB.dragging = false;
    };

    const handleTY = event => {
        setTY(event.target.value);
        event.stopPropagation();
        event.preventDefault();
        stateTB.dragging = false;
    };

    const handleLogoText = event => {
        setLogoText(event.target.value);
        event.stopPropagation();
        event.preventDefault();
        stateTB.dragging = false;
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xl" >
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    {/* APP BACKGROUND */}
                    <Container
                        maxWidth="sm"
                        sx={{
                            textAlign: 'center',
                            background: 'rgba(0,0,0,1)',
                            height: '500px',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute'
                        }}
                    >
                        <Avatar sx={{ m: 1, backgroundColor: 'gray' }}>
                            <EditOutlinedIcon />
                        </Avatar>
                        <Typography
                            component="h1"
                            variant="h5"
                            fontFamily="Josefin Sans"
                            color={"white"}
                            style={{mixBlendMode: 'difference'}}
                        >
                            glassy
                        </Typography>
                    </Container>


{/*                    <Logo
                        imageUrl={imageUrl}
                        maskUrl={maskUrl}
                        imageSize={imageSize}
                        maskSize={maskSize}

                        imageFilter={filter}
                        logoFilter={logoFilter}

                        logoBlur={logoBlur}
                        shadowBlur={shadowBlur}
                        logoInvert = {logoInvert}

                        tX = {tX}
                        tY = {tY}
                    />*/}

                    <LogoText
                        imageUrl={imageUrl}
                        imageSize={imageSize}
                        maskSize={maskSize}
                        maskText={logoText}
                        textSize={textSize}
                        fontFam={'Roboto'}

                        imageFilter={filter}
                        logoFilter={logoFilter}

                        logoBlur={logoBlur}
                        shadowBlur={shadowBlur}
                        logoInvert = {logoInvert}

                        tX = {tX}
                        tY = {tY}
                    />

                    <Draggable
                        className="dragToolBox"
                        color={theme.palette.div.main}
                        state={stateTB}
                        setState={setStateTB}
                        useNoParent={true}
                        >
                        <TextField
                            sx={{ padding: '0px 5px' }}
                            id="imageUrl"
                            variant="standard"
                            label="URL for Main Image"
                            onChange={handleChangeImage}
                            onMouseDown={stopDragging}
                            value={imageUrl}
                        />
                        <Slider defaultValue={500} min={100} max={2000} aria-label="size" valueLabelDisplay="auto" onChange={handleImageSize}/>
                        <TextField
                            sx={{ padding: '0px 5px' }}
                            id="maskUrl"
                            label="URL for SVG Mask"
                            variant="standard"
                            onChange={handleChangeMask}
                            onMouseDown={stopDragging}
                            value={maskUrl}
                        />
                        <Slider defaultValue={250} min={100} max={1000} aria-label="size" valueLabelDisplay="auto" onChange={handleMaskSize}/>
                        <TextField
                            sx={{ padding: '0px 5px' }}
                            id="maskText"
                            label="SVG LogoText"
                            variant="standard"
                            onChange={handleLogoText}
                            onMouseDown={stopDragging}
                            value={logoText}
                        />
                        <Slider defaultValue={500} min={100} max={2000} aria-label="size" valueLabelDisplay="auto" onChange={handleTextSize}/>

                        <div style={{display: 'flex', flexDirection: 'row', padding: '10px'}}>
                        <FormControl sx={{ m: 1, width: '50%' }} size="small">
                            <InputLabel id="filter-label">Image Filter</InputLabel>
                            <Select
                                labelId="filter-label"
                                id="filter"
                                label="Image Filter"
                                onChange={handleImageFilter}
                                defaultValue = {''}
                            >
                                <MenuItem value={'none'}>None</MenuItem>
                                <MenuItem value={'blur(3px)'}>Blurry</MenuItem>
                                <MenuItem value={'blur(6px)'}>Blurrier</MenuItem>
                                <MenuItem value={'brightness(0.8) contrast(90%)'}>Dull</MenuItem>
                                <MenuItem value={'brightness(0.5) contrast(120%)'}>Dark</MenuItem>
                                <MenuItem value={'grayscale(50%)'}>Mood</MenuItem>
                                <MenuItem value={'grayscale(100%) contrast(90%)'}>Old</MenuItem>
                                <MenuItem value={'invert(35%)'}>Weak</MenuItem>
                                <MenuItem value={'invert(100%)'}>Inverter</MenuItem>
                                <MenuItem value={'saturate(150%)'}>Watercolor</MenuItem>
                                <MenuItem value={'sepia(80%)'}>Sepia</MenuItem>
                                <MenuItem value={'hue-rotate(20deg) contrast(110%)'}>Fantasy</MenuItem>
                            </Select>
                        </FormControl>


                        <FormControl sx={{ m: 1, width: '50%' }} size="small">
                            <InputLabel id="logoFilter-label">Logo Filter</InputLabel>
                            <Select
                                labelId="logoFilter-label"
                                id="logoFilter"
                                label="Logo Filter"
                                defaultValue = {''}
                                onChange={handleLogoFilter}
                            >
                                <MenuItem value={'none'}>None</MenuItem>
                                <MenuItem value={'blur(3px)'}>Blurry</MenuItem>
                                <MenuItem value={'blur(6px)'}>Blurrier</MenuItem>
                                <MenuItem value={'brightness(0.8) contrast(90%)'}>Dull</MenuItem>
                                <MenuItem value={'brightness(0.5) contrast(120%)'}>Dark</MenuItem>
                                <MenuItem value={'grayscale(50%)'}>Mood</MenuItem>
                                <MenuItem value={'grayscale(100%) contrast(90%)'}>Old</MenuItem>
                                <MenuItem value={'invert(35%)'}>Weak</MenuItem>
                                <MenuItem value={'invert(100%)'}>Inverter</MenuItem>
                                <MenuItem value={'saturate(150%)'}>Watercolor</MenuItem>
                                <MenuItem value={'sepia(80%)'}>Sepia</MenuItem>
                                <MenuItem value={'hue-rotate(20deg) contrast(110%)'}>Fantasy</MenuItem>
                            </Select>
                        </FormControl>
                        </div>

                        <div style={{display: 'flex', flexDirection: 'row', padding: '10px'}}>
                            <LensBlur />
                            <Slider  defaultValue={1} min={0} max={4} aria-label="Logo Blur" valueLabelDisplay="auto" onChange={handleLogoBlur}/>
                            <Deblur />
                            <Slider defaultValue={1} min={0} max={100} aria-label="Shadow Blur" valueLabelDisplay="auto" onChange={handleShadowBlur}/>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', padding: '10px'}}>
                            <SwapHoriz />
                            <Slider defaultValue={0} min={-20} max={20} aria-label="TX" valueLabelDisplay="auto" onChange={handleTX}/>
                            <SwapVert />
                            <Slider defaultValue={0} min={-20} max={20} aria-label="TY" valueLabelDisplay="auto" onChange={handleTY}/>
                        </div>

                    </Draggable>

                </Box>
            </Container>
        </ThemeProvider>
    );
}
