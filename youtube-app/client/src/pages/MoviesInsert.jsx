import React, { Component } from 'react'
import api from '../api'
import Dropzone from 'react-dropzone';
//import { useSelector } from "react-redux";

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MoviesInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            rating: '',
            time: '',
            description: '',
            keywords: '',
            channel: '',
            channelid: '',
            likes: 0,
            dislikes: 0,
            views: 0,
            comments: '',
            sharelink: '',
            videolink: '',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeInputDescription = async event => {
        const description = event.target.value
        this.setState({ description })
    }

    handleChangeInputKeywords = async event => {
        const keywords = event.target.value
        this.setState({ keywords })
    }

    handleChangeInputTime = async event => {
        const time = event.target.value
        this.setState({ time })
    }

    // onDrop = (files) => {
    //
    //     let formData = new FormData();
    //     const config = {
    //         header: { 'content-type': 'multipart/form-data' }
    //     }
    //     console.log(files)
    //     formData.append("file", files[0])
    //
    //     axios.post('/api/video/uploadfiles', formData, config)
    //         .then(response => {
    //             if (response.data.success) {
    //
    //                 let variable = {
    //                     filePath: response.data.filePath,
    //                     fileName: response.data.fileName
    //                 }
    //                 setFilePath(response.data.filePath)
    //
    //                 //gerenate thumbnail with this filepath !
    //
    //                 axios.post('/api/video/thumbnail', variable)
    //                     .then(response => {
    //                         if (response.data.success) {
    //                             setDuration(response.data.fileDuration)
    //                             setThumbnail(response.data.thumbsFilePath)
    //                         } else {
    //                             alert('Failed to make the thumbnails');
    //                         }
    //                     })
    //
    //
    //             } else {
    //                 alert('failed to save the video in server')
    //             }
    //         })
    //
    // }

    handleIncludeMovie = async () => {
        const { name, rating, time, description, keywords, channel, channelid, likes, dislikes, views, comments, sharelink, videolink } = this.state
        const arrayTime = time.split('/')
        const payload = { name, rating, time: arrayTime, description, keywords, channel, channelid, likes, dislikes, views, comments, sharelink, videolink }

        await api.insertMovie(payload).then(res => {
            window.alert(`Movie inserted successfully`)
            this.setState({
                name: '',
                rating: '',
                time: '',
                description: '',
                keywords: '',
                channel: '',
                channelid: '',
                likes: 0,
                dislikes: 0,
                views: 0,
                comments: '',
                sharelink: '',
                videolink: '',
            })
        })
    }

    render() {
        const { name, rating, time, description, keywords, channel, channelid, likes, dislikes, views, comments, sharelink, videolink } = this.state
        return (
            <Wrapper>
                <Title>Upload Video</Title>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Dropzone
                        //onDrop={onDrop}
                        multiple={false}
                        maxSize={800000000}>
                        {({ getRootProps, getInputProps }) => (
                            <div style={{ width: '300px', height: '240px', border: '1px solid lightgray', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                 {...getRootProps()}
                            >
                                <input {...getInputProps()} />

                            </div>
                        )}
                    </Dropzone>

                    }
                </div>


                <Label>Title: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />

                <Label>Description: </Label>
                <InputText
                    type="text"
                    value={description}
                    onChange={this.handleChangeInputDescription}
                />

                <Label>Keywords: </Label>
                <InputText
                    type="text"
                    value={keywords}
                    onChange={this.handleChangeInputKeywords}
                />

                <Button onClick={this.handleIncludeMovie}>Upload</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MoviesInsert
