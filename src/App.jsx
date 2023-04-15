
import SignUpForm from './components/SignUpForm/SignUpForm'

import style from './App.module.css'

function App() {
    return (
        <main>
            <div className={`container ${style.page}`}>
                <div className={style.textBlock}>
                    <h1>Learn to code by watching others</h1>
                    <p>
                        See how experienced developers solve problems in real-time.
                        Watching scripted tutorials is greate, but understanding how developers think is invaluable.
                    </p>
                </div>
                <div className={style.formBlock}>
                    <a className={style.tryLink} href="/"><span className="text-bold">Try it free 7 days</span> then $20/mo. thereafter</a>
                    <SignUpForm />
                </div>
            </div>
        </main>
    )
}

export default App
