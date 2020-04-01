import React from "react"
import styled from "styled-components"


const Hosts = styled.div`
    background-image: url('https://wgbh-static.s3.amazonaws.com/images/KeepItSocial_Pattern_BG_2.png');
    padding: 2em 6em;
    display: grid;
    grid-template-columns: 1fr 2fr;
    h1 {
        color: #16A0E8;
    }
`

export default () => (

    <Hosts>
        <div>
            <img src="http://via.placeholder.com/200"></img>
        </div>
        <div>
            <h1>Megan Bowen</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div>
            <img src="http://via.placeholder.com/200"></img>
        </div>
        <div>
            <h1>Megan Bowen</h1>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </Hosts>

    

)