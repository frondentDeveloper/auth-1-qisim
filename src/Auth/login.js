import React, { useState, useEffect } from "react";
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import "../App.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BaseUrl } from "../BaseUrl";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const [text, setText] = useState()
    const navigate = useNavigate()

    const onFinish = (values) => {
        axios.post(BaseUrl + `/auth/login`, values).then(res => {
            console.log(res.data);
            //   setText(res.data.msg)
            navigate("/login")
        }).catch(err => {
            console.log(err.response.data);
            setText(err.response.data)
        })
    };

    const onFinishFailed = (errorInfo) => {
        //   console.log("Salom");
        // setText("Maydonlarni to'liq to'ldiring")
    };

    const notify = () => {
        if (text == "") { } else if (text === "User is alerady exists") {
            toast.error(text)
        }
        else if (text === "Maydonlarni to'liq to'ldiring") {
            toast.error(text)
        }
        else {
            toast.success(text)
        }
        setText("")
    };

    useEffect(() => {
        notify()
    }, [text])

    return (
        <div className="App App-header">
            <ToastContainer />
            <div className="main_box shadow">
                <div>
                    <Form name="basic" initialValues={{ remember: true, }} onFinish={onFinish}
                        onFinishFailed={onFinishFailed} autoComplete="off">
                        <div className="mb-5" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <div style={{ width: "150px", height: "150px", display:"flex", borderRadius:"50%",justifyContent:"center",alignItems:"center"}} className="border">
                                <p style={{fontSize:"35px"}}>Logo</p>
                            </div>
                        </div>
                        <label htmlFor="">Username</label>
                        <Form.Item name="username"
                            rules={[
                                {
                                    required: true, message: 'Please input your username!',
                                },
                                {
                                    validator: (_, value = '') => !value.includes(" ") ? Promise.resolve() : Promise.reject(new Error("No spaces allowed"))
                                }
                            ]} >
                            <Input />
                        </Form.Item>
                        <label htmlFor="">Password</label>
                        <Form.Item className="passwordInput" name="password"
                            rules={[
                                {
                                    required: true, message: 'Please input your password!',
                                },
                                {
                                    validator: (_, value = '') => !value.includes(" ") ? Promise.resolve() : Promise.reject(new Error("No spaces allowed"))
                                }
                            ]} >
                            <Input.Password />
                        </Form.Item>


                        <Form.Item
                        >
                            <Button style={{ width: "100%" }} type="primary" htmlType="submit">
                                register
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default Login