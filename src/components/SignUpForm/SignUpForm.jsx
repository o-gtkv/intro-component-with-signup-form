import { useForm } from 'react-hook-form'

import style from './SignUpForm.module.css'

function SignUpForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    function handleFormSubmit(data) {
        console.log(data)
    }

    return (
        <form className={style.form} onSubmit={handleSubmit(handleFormSubmit)}>
            <input
                className={style.formControl}
                type="text"
                placeholder="First Name"
                {...register('firstName', { required: true })}
            />
            {errors.firstName && <span className={style.errorMsg}>This field is required</span>}
            <input
                className={style.formControl}
                type="text"
                placeholder="Last Name"
                {...register('lastName', { required: true })}
            />
            {errors.lastName && <span className={style.errorMsg}>This field is required</span>}
            <input
                className={style.formControl}
                type="text"
                placeholder="Email Address"
                {...register('email', { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
            />
            {
                errors.email?.type === 'pattern' && <span className={style.errorMsg}>Please specify correct email address</span> ||
                errors.email?.type === 'required' && <span className={style.errorMsg}>This field is required</span>
            }
            <input
                className={style.formControl}
                type="password"
                placeholder="Password"
                {...register('password', { required: true, minLength: 8 })}
            />
            {
                errors.password?.type === 'minLength' && <span className={style.errorMsg}>Password must contain at least 8 characters</span> ||
                errors.password?.type === 'required' && <span className={style.errorMsg}>This field is required</span>
            }
            <button className={style.formControl} type="submit">claim your free trial</button>
            <p className={style.termsAndServices}>By clicking the button you are agreeing to our <a href="/">Terms and Services</a></p>
        </form>
    )
}

export default SignUpForm