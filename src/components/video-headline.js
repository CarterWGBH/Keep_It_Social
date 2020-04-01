import React from "react"
import styled from "styled-components"




const VideoWrapper = styled.div`
  background-image: url('https://wgbh-static.s3.amazonaws.com/Keep_It_Social_Site/KeepItSocial_Pattern_BG_1.png');
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2em 0;
`

const VideoTag = styled.div`
  color: #f2f2f2;
  text-align: center;
  h1 {
    font-size: 1em;
    background-color: #16A0E8;
    display: inline-block;
    margin-bottom: 0;
    padding: 1em 1em;
  }
`

const VideoImg = styled.div`
  text-align: center;
  img{
    margin-bottom: 0;
    line-height: 0;
    border: 1em solid #16A0E8;
  }
`

export default () => (
  <VideoWrapper>
    <VideoTag><h1>LATEST EPISODE</h1></VideoTag>
    <VideoImg>
        <img src="http://via.placeholder.com/600x400"></img>
    </VideoImg>
  </VideoWrapper>
)


/*
const Video = styled.div`
    text-align: center;
`

const Iframe = styled.iframe`
    border: 4px solid orange;
`

const VideoText = styled.div`
    color: white;
`


export default ({ videoSrcURL, videoTitle, ...props }) => (
 <div>
  <Video>
    <Iframe
      src={`https://www.youtube.com/embed/m3Q9p5yskoE`}
      title={`https://www.youtube.com/watch?v=7VhNawoYRPs`}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      width="600px"
      height="400px"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </Video>
  <VideoText>
      <h1>Title for the video</h1>
      <p>lorem ipsum mdwpmd f ufen ofnenon ufneuon nfeon fubihbgr  ufeno ef j fel fjn fejwn fojnwnofeijoijfio onfionfionwof ofnenfon fiono nonfo oefnfonfewiefnklf fo fwe ef oefifewnoifef  feoefnwf ewoj feowef wefonefinfe fofo wioqndd wdwb dbjfe ff dbwidwnd   hdwindjfd odwdjneoj weuidbqod  fnuefno  fnbounodnqowndq  hinwqlkd l</p>
  </VideoText>

  </div>
)
*/