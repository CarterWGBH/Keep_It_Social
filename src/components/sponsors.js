import React from "react"
import styled from "styled-components"


const Sponsors = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #3F4FD7;
    padding: 2em 0em;
    h1 {
        color: #f2f2f2;
        padding-top: .5em;
    }
    img {
        max-width: 100%;
        margin-bottom: 0;
    }
`

export default () => (

    <Sponsors>
        <h1>OUR SPONSORS</h1>
        <img src="http://via.placeholder.com/200x100"></img>
        <img src="http://via.placeholder.com/200x100"></img>
        <img src="http://via.placeholder.com/200x100"></img>
        <img src="http://via.placeholder.com/200x100"></img>
        <img src="http://via.placeholder.com/200x100"></img>
    </Sponsors>


)