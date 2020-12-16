import React, { Component } from 'react'
import api from '../api'

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

class MoviesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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

    handleChangeInputChannel = async event => {
        const channel = event.target.value
        this.setState({ channel })
    }

    handleChangeInputTime = async event => {
        const time = event.target.value
        this.setState({ time })
    }

    handleUpdateMovie = async () => {
        const { id, name, rating, time, description, keywords, channel } = this.state
        const arrayTime = time.split('/')
        const payload = { name, rating, time: arrayTime, description, keywords, channel }

        await api.updateMovieById(id, payload).then(res => {
            window.alert(`Movie updated successfully`)
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

    componentDidMount = async () => {
        const { id } = this.state
        const movie = await api.getMovieById(id)

        this.setState({
            name: movie.data.data.name,
            rating: movie.data.data.rating,
            description: movie.data.data.description,
            keywords: movie.data.data.keywords,
            channel: movie.data.data.channel,
            time: movie.data.data.time.join('/'),
        })
    }

    render() {
        const { name, description, keywords, rating, channel, time } = this.state
        return (
            <Wrapper>
                <Title>Update Video</Title>

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

                <Button onClick={this.handleUpdateMovie}>Update Video</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MoviesUpdate
