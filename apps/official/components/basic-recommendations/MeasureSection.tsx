import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { 
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Card,
    CardContent,
    Grid,
    Typography,
  } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles({
    accordion: {
        background: "#B0C4DE"//"#2F4F4F"
    },
    summaryCard: {
        width: "100%",
        borderRadius: "12px",
    },
    summaryContent: {                
        fontWeight: "bold",        
        marginLeft: "8px",        
    },
    summaryText: {
        textAlign: "left",
    },    
});

interface MeasureSectionProps {
    title: string,
    description: string,
    backgroundColor: string,
    frontColor?: string,
    icon: any,  // this really should be the TS signature of the JS function created by svgr (TO DO)
}
export const MeasureSection: React.FC<MeasureSectionProps> = 
    ({title, description, backgroundColor, frontColor, icon}: MeasureSectionProps) => {

    const classes = useStyles();
    
    initProps();

    const colorStyle = {
        background: backgroundColor,
        color: frontColor
    }

    function initProps() {
        if(frontColor == undefined) {
            frontColor = "#FFFFFF";  // white
        }        
    }

    return (
        <Accordion className={classes.accordion}>
            <AccordionSummary>
                <Card className={classes.summaryCard} style={colorStyle}> 
                    <CardContent className={classes.summaryContent} >
                        <Grid container direction="row" alignItems="center">
                            <Grid item xs={3}>
                                {icon()}
                            </Grid>
                            <Grid item xs={7}>
                                <Typography variant="h3" align="left">
                                    {title}
                                </Typography>
                            </Grid>
                            <Grid item xs={2}>
                                <ArrowForwardIosIcon />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </AccordionSummary>
            <AccordionDetails>
                <Typography variant="body1" align="justify">
                    {description}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
}