import './style.scss'
import { firebaseAuth } from '../../../../firebase'
import { useForm } from '../../../../hooks'

export const SignIn = (props) => {
    const { auth } = props
    const { formValue, changeFormValue } = useForm({ email: "", password: "" });
    const login = async () => {
        const { email, password } = formValue
        try {
            const response = await firebaseAuth.signInWithEmailAndPassword(email, password)
            if (response.user.uid == process.env.REACT_APP_ADMIN_UID) {
                auth(true)
            }
        }
        catch (error) {
            alert(error.message)
        }
    }
    return (
        <div className="signIn">
            <input type="text" placeholder="Email" spellCheck={false} onChange={(e) => { changeFormValue('email', e.target.value) }} />
            <input type="password" placeholder="Password" onChange={(e) => { changeFormValue('password', e.target.value) }} />
            <button onClick={login}>Login</button>
        </div>
    )
}