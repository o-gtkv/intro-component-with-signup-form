import { useForm } from 'react-hook-form'
import cn from 'classnames'

import style from './SignUpForm.module.css'
import iconError from '../../assets/images/icon-error.svg'

function SignUpForm() {
    const { register, handleSubmit, formState: { errors } } = useForm()

    function handleFormSubmit(data) {
        console.log(data)
    }

    return (
        <form className={style.form} onSubmit={handleSubmit(handleFormSubmit)}>
            <div className={style.formControlWrapper}>
                <label className="sr-only" htmlFor='first-name'>First name</label>
                <input
                    // className={`${style.formControl} ${errors.firstName ? style.formControlError : ''}`}
                    className={cn(style.formControl, { [style.formControlError]: errors.firstName })}
                    type="text"
                    placeholder="First Name"
                    id="first-name"
                    {...register('firstName', { required: true })}
                />
                {/* <img className={`${style.errorIcon} ${errors.firstName ? style.visible : ''}`} src={iconError} alt="" /> */}
                <img className={cn(style.errorIcon, { [style.visible]: errors.firstName })} src={iconError} alt="" />
            </div>
            {errors.firstName && <span className={style.errorMsg}>First name connot be empty</span>}

            <div className={style.formControlWrapper}>
                <label className="sr-only" htmlFor='last-name'>Last name</label>
                <input
                    // className={`${ style.formControl } ${ errors.lastName ? style.formControlError : '' }`}
                    className={cn(style.formControl, { [style.formControlError]: errors.lastName })}
                    type="text"
                    placeholder="Last Name"
                    id="last-name"
                    {...register('lastName', { required: true })}
                />
                {/* <img className={`${style.errorIcon} ${errors.lastName ? style.visible : ''}`} src={iconError} alt="" /> */}
                <img className={cn(style.errorIcon, { [style.visible]: errors.lastName })} src={iconError} alt="" />
            </div>
            {errors.lastName && <span className={style.errorMsg}>Last name connot be empty</span>}

            <div className={style.formControlWrapper}>
                <label className="sr-only" htmlFor='email'>Email</label>
                <input
                    // className={`${ style.formControl } ${ errors.email ? style.formControlError + ' ' + style.invalidEmail : '' }`}
                    className={cn(style.formControl, { [style.formControlError]: errors.email, [style.invalidEmail]: errors.email })}
                    type="text"
                    placeholder="Email Address"
                    id="email"
                    {...register('email', { required: true, pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ })}
                />
                {/* <img className={`${style.errorIcon} ${errors.email?.type === 'required' ? style.visible : ''}`} src={iconError} alt="" /> */}
                <img className={cn(style.errorIcon, { [style.visible]: errors.email?.type === 'required' })} src={iconError} alt="" />
            </div>
            {
                errors.email?.type === 'pattern' && <span className={style.errorMsg}>Looks like this is not an email</span> ||
                errors.email?.type === 'required' && <span className={style.errorMsg}>Email connot be empty</span>
            }

            <div className={style.formControlWrapper}>
                <label className="sr-only" htmlFor='password'>Password</label>
                <input
                    // className={`${ style.formControl } ${ errors.password ? style.formControlError : '' }`}
                    className={cn(style.formControl, { [style.formControlError]: errors.password })}
                    type="password"
                    placeholder="Password"
                    id="password"
                    {...register('password', { required: true, minLength: 8 })}
                />
                {/* <img className={`${style.errorIcon} ${errors.password?.type === 'required' ? style.visible : ''}`} src={iconError} alt="" /> */}
                <img className={cn(style.errorIcon, { [style.visible]: errors.password?.type === 'required' })} src={iconError} alt="" />
            </div>
            {
                errors.password?.type === 'minLength' && <span className={style.errorMsg}>Password must contain at least 8 characters</span> ||
                errors.password?.type === 'required' && <span className={style.errorMsg}>Password connot be empty</span>
            }

            <div className={style.formControlWrapper}>
                <button className={`${style.submitBtn} ${style.formControl}`} type="submit">claim your free trial</button>
            </div>
            <p className={style.termsAndServices}>By clicking the button you are agreeing to our <a href="/">Terms and Services</a></p>
        </form>
    )
}

export default SignUpForm