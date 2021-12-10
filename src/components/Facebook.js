import React, {useState, useEffect} from 'react'
import FacebookLogin from 'react-facebook-login'

function Facebook() 
{
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const [userID, setuserID] = useState('')
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [picture, setpicture] = useState('')
    let componentClicked;
    let responseFacebook;

    componentClicked = () => {console.log('Clicked!')}
    responseFacebook = res => {
    // console.log(res)
    // console.log(res.userID)
    // console.log(res.name)
    // console.log(res.email)
    // console.log(res.picture.data.url)
    setisLoggedIn(true)
    setuserID(res.userID)
    setname(res.name)
    setemail(res.email)
    setpicture(res.picture.data.url)
    }

    useEffect(() => {
        console.log("Started!") 
        console.log(isLoggedIn)
        console.log(userID)
        console.log(name)
        console.log(email)
        console.log(picture) 
        console.log("Finished!") 
    }, [picture])

    let fbContent;

    if(isLoggedIn)
    {
        fbContent=
        <div style={{
            width : '400px',
            margin : 'auto',
            background : '#4267B2',
            color : 'white',
            padding : '30px',
            marginTop : '2rem',
            borderRadius : '0.5rem'}}>
            <img src={picture} alt={name}/>
            <h2>Welcome {name}</h2>
            Email : {email}
        </div>
    }
    else
    {
        fbContent = (<FacebookLogin
                        appId="277109017771766"
                        autoLoad={false}
                        fields="name,email,picture"
                        onClick={componentClicked}
                        callback={responseFacebook} 
                    />)
    }

    return (
        <div>
            {fbContent}
        </div>
    )
}

export default Facebook