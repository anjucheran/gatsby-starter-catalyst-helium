import React from 'react'

class VideoPlayer extends React.Component{
    constructor(props) {
        super(props)
    }
    
    render() {
        return (
            <smartvideo src={this.props.src} width="800" height="600" class="swarm-fluid" controls></smartvideo>
        )
    }
}

export default VideoPlayer