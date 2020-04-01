import React from "react"
import styled from "styled-components"

const ContactForm = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    background-image: url('https://wgbh-static.s3.amazonaws.com/Keep_It_Social_Site/KeepItSocial_Pattern_BG_1.png');
`

const ContactSocial = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    h2 {
        color: white;
    }
`

const ContactSignup = styled.div`
        display: flex;
    flex-direction: column;
    form {
        display: flex;
        flex-direction: column;
        button {
            width: 200px;
        }
    }
    h1 {
            color: #FF6330;
        }
`



export default () => (
    <ContactForm>

        <ContactSocial>
                <img src="https://wgbh-static.s3.amazonaws.com/Keep_It_Social_Site/KeepItSocial_LOGO_RBG.png" style={{height:`200px`, width: `300px`}}></img>
                <h2>REACH US ON SOCIAL</h2>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
               
        </ContactSocial>

        <ContactSignup>
            <h1>REACH OUT TO US!</h1>
            <form method="post" action="#">

  <label>

    <input type="email" value="email" name="email" id="email" />
  </label>

  <label>
    <textarea name="message" value="message" id="message" rows="5" />
  </label>
  <button type="submit">SUBMIT</button>
</form>

        </ContactSignup>

    </ContactForm>
       
)