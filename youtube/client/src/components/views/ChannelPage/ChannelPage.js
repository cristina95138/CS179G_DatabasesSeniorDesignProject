import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { Card, Avatar, Col, Typography, Row } from 'antd';
import axios from 'axios';
import moment from 'moment';
import {useSelector} from "react-redux";
const { Title } = Typography;
const { Meta } = Card;
function ChannelPage(props) {

    let variable;

    const user = useSelector(state => state.user);

    const [Videos, setVideos] = useState([])
    const [input, setInput] = useState('');

    useEffect(() => {
        axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.videos)
                    setVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })
    }, [])

    const deleteVideo = (e) => {
        e.preventDefault();

        if (
            window.confirm(
                `Do you want to delete the video permanently?`,
            )
        ) {
            //window.alert(id)
            //axios.delete('/api/video/:id')
            window.location.reload()
        }
    }

    const renderCards = Videos.map((video, index) => {

        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

        if (video.writer._id == user.userData._id) {

            return <Col lg={6} md={8} xs={24}>
                <div style={{position: 'relative'}}>
                    <a href={`/video/${video._id}`}>
                        <img style={{width: '100%'}} alt="thumbnail" src={`http://localhost:5000/${video.thumbnail}`}/>
                        <div className=" duration"
                             style={{
                                 bottom: 0, right: 0, position: 'absolute', margin: '4px',
                                 color: '#fff', backgroundColor: 'rgba(17, 17, 17, 0.8)', opacity: 0.8,
                                 padding: '2px 4px', borderRadius: '2px', letterSpacing: '0.5px', fontSize: '12px',
                                 fontWeight: '500', lineHeight: '12px'
                             }}>
                            <span>{minutes} : {seconds}</span>
                        </div>
                    </a>
                </div>
                <br/>
                <Meta
                    avatar={
                        <Avatar src={video.writer.image}/>
                    }
                    title={video.title}
                />
                <span>{video.writer.name} </span><br/>
                <span style={{marginLeft: '3rem'}}> {video.views}</span>
                - <span> {moment(video.createdAt).format("MMM Do YY")} </span><br/>
                <button input={video._id} onClick={deleteVideo}>Delete</button>
            </Col>
        }

    })


    return (
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <Title level={2} > Channel </Title>
            <hr />

            <Row gutter={16}>
                {renderCards}
            </Row>
        </div>
    )
}

export default ChannelPage
