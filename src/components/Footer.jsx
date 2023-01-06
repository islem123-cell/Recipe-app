import React from 'react';
import {Grid, Box} from '@material-ui/core';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import useStyles from './FooterStyles';

const Footer = () => {
    const classes = useStyles();

    return (
        <div className={classes.root} id="footer">
            <Grid container >
                <Grid item xs={12} sm={12}>
                    <Box style={{display: 'flex', justifyContent: 'center'}}>
                        <Box> <a href="https://github.com/islem123-cell" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <GitHubIcon className={classes.icon} /> </a> </Box>
                        <Box> <a href="https://www.linkedin.com/in/abdellaoui-islem-b9b511200/" target="_blank" rel="noopener noreferrer" style={{color:'white'}}> <LinkedInIcon className={classes.icon} /> </a> </Box>
                    </Box>
                </Grid>
                <Grid item sm={1}></Grid>
            </Grid>

            <Grid container justify="center">
                <Grid item xs={12}>
                    <p className={classes.footer__copyRight}>Developed by Islem ABDELLAOUI <small>Copyright © 2022</small> </p>
                </Grid>
            </Grid>
        </div>
    );
};

export default Footer;
