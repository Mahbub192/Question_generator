import { createContext, useState } from "react";

export const AuthContext = createContext(null)


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
    const [rightNav, setRightNav] = useState(false)
    const [OutLatImage, setOutLateImage] = useState('https://media.istockphoto.com/id/1158735721/vector/arrows-up-with-speed-line-on-blue-background.jpg?s=612x612&w=0&k=20&c=pqNZeeTSr2NFp4YNtrgCZyt_f4kp0wmbMwrCXNIo39Y=')



    const authInfo={
        setRightNav,
        rightNav,
        setOutLateImage,
        OutLatImage,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;