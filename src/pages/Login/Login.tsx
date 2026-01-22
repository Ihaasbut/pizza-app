import { Link } from "react-router-dom"
import Button from "../../components/Button/Button"
import Headling from "../../components/Headling/Headling"
import Input from "../../components/Input/Input"
import styles from "./Login.module.css"
import { useRef, useState, type FormEvent } from "react"
import axios, { AxiosError } from "axios"
import { PREFIX } from "../../helpers/API"


export type LoginForm = {
          email: {
                    value: string;
          }
          password: {
                    value: string;
          }
}

function Login() {
          const [error, setError] = useState<string | null>()
          const inputRef= useRef(null)

          const submit = async (e: FormEvent) => {
                    e.preventDefault();
                    setError(null);
                    const target = e.target as typeof e.target & LoginForm
                    const { email, password } = target
                    await sendLogin(email.value, password.value)
          }

          const sendLogin = async (email: string, password: string) => {
                    try {
                              const { data } = await axios.post<LoginForm>(`${PREFIX}/auth/login`, {
                                        email,
                                        password
                              });
                              console.log(data)
                    } catch (e) {
                              if (e instanceof AxiosError) {
                                        console.log("Вы не зарегистрированы")
                                        setError(e.response?.data.message)
                                        console.log(error)
                              }
                    }
          }
          console.log(inputRef)
          return (
                    <div className={styles["login"]} >
                              <Headling> Вход </Headling>
                              {error && <div className={styles["error"]}>
                                      {error}
                              </div>}
                              <form className={styles["form"]} onSubmit={submit}>
                                        <div className={styles["field"]}>
                                                  <label htmlFor="email"> Ваш email </label>
                                                  <Input id="email" placeholder="email" name="email" ref={inputRef}/>
                                        </div>
                                        <div className={styles["field"]}>
                                                  <label htmlFor="password"> Ваш пароль </label>
                                                  <Input id="password" type="password" placeholder="password" name="password" />
                                        </div>
                                        <Button appearance="big"> вход </Button>
                              </form>

                              <div className={styles["links"]}>
                                        <div>Нет аккаунта?</div>
                                        <Link to="/auth/register"> Зарегистрироваться</Link>
                              </div>
                    </div>
          )
}

export default Login


