import React from 'react'
import { Card, Title, Numbers, LogoCard } from './card'
import CameraRollIcon from '@mui/icons-material/CameraRoll';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CommentIcon from '@mui/icons-material/Comment';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { lightBlue } from '@mui/material/colors';
import CountUp from 'react-countup';

export default function card(props) {
    return (
        <Card>
            <Title>{props.data.title}</Title>
            <CountUp start={0} end={props.data.total} duration={1} delay={0} >
                {({ countUpRef }) => (
                    <div>
                        <Numbers ref={countUpRef}></Numbers>
                    </div>
                )}
            </CountUp>
            {(() => {
                switch (props.data.type) {
                    case 'film':
                        return <LogoCard style={{ backgroundColor: props.data.color }}><CameraRollIcon sx={{ fontSize: 25, color: lightBlue[50] }} /></LogoCard>;
                    case 'user':
                        return <LogoCard style={{ backgroundColor: props.data.color }}><AccountCircleIcon sx={{ fontSize: 25, color: lightBlue[50] }} /></LogoCard>;
                    case 'comment':
                        return <LogoCard style={{ backgroundColor: props.data.color }}><CommentIcon sx={{ fontSize: 25, color: lightBlue[50] }} /></LogoCard>;
                    case 'vote':
                        return <LogoCard style={{ backgroundColor: props.data.color }}><ThumbUpIcon sx={{ fontSize: 25, color: lightBlue[50] }} /></LogoCard>;
                    default: return null;
                }
            })()}

        </Card>
    )
}
