import React, { Component } from 'react'
import api from '../api'
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
            //rating: '',
            //time: '',
            description: '',
            keywords: '',
            // channel: '',
            // channelid: '',
            // likes: 0,
            // dislikes: 0,
            // views: 0,
            // comments: '',
            // sharelink: '',
            // videolink: '',
            // FilePath: '',
            // Duration: '',
            // Thumbnail: '',
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

    handleIncludeMovie = async () => {
        //const { name, rating, time, description, keywords, channel, channelid, likes, dislikes, views, comments, sharelink, videolink } = this.state
        //const arrayTime = time.split('/')
        //const payload = { name, rating, time: arrayTime, description, keywords, channel, channelid, likes, dislikes, views, comments, sharelink, videolink }

        const { name, description, keywords, rating, channel, time } = this.state
        const arrayTime = time.split('/')
        const payload = { name, description, keywords, rating, channel, time: arrayTime }

        await api.insertMovie(payload).then(res => {
            window.alert(`Movie inserted successfully`)
            this.setState({
                name: '',
                rating: '',
                time: '',
                description: '',
                keywords: '',
                channel: '',
                //channelid: '',
                //likes: 0,
                //dislikes: 0,
                //views: 0,
                //comments: '',
                //sharelink: '',
                //videolink: '',
            })
        })
    }

    render() {
        const { name, description, keywords, rating, channel, time } = this.state
        return (
            <Wrapper>
                <Title>Upload Video</Title>

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

                <Label>Rating: </Label>
                <InputText
                    type="text"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <Label>Channel: </Label>
                <InputText
                    type="text"
                    value={channel}
                    onChange={this.handleChangeInputChannel}
                />

                <Label>Time: </Label>
                <InputText
                    type="text"
                    value={time}
                    onChange={this.handleChangeInputTime}
                />

                <Button onClick={this.handleIncludeMovie}>Upload</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MoviesInsert
