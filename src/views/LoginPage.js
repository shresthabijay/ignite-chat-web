import React from "react"
import { Form, Icon, Input, Button, Checkbox, Alert } from 'antd';
import { ReactComponent as IgniteBackground } from "../assets/images/online_discussion.svg"
import login from "../apis/login";
import { setLoggedInUser } from "../utils"
import { useHistory, Link } from "react-router-dom"

export const LoginPage = Form.create({ name: 'normal_login' })(({ form }) => {
  const { getFieldDecorator } = form
  const history = useHistory()
  const [showAlert, setShowAlert] = React.useState(false)
  const [showLoading, setShowLoading] = React.useState(false)

  const handleAlertClose = () => {
    setShowAlert(false)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        setShowLoading(true)
        try {
          let response = await login({ email: values.email, password: values.password })
          if (response.data.auth && response.data.token) {
            setLoggedInUser({ userId: response.data.userId, token: response.data.token })
            history.push("/")
          }
        }
        catch (err) {
          setShowAlert(true)
          setShowLoading(false)
        }
      }
    });
  }

  return (
    <div className="login-page">
      <IgniteBackground className="ignite-background" />
      <div className="header">
        <div className="welcome">Welcome to</div>
        <div className="ignite-chat">Ignite Chat</div>
      </div>
      <div className="form">
        <Form onSubmit={handleSubmit} className="login-form" onChange={() => setShowAlert(false)}>
          <Form.Item>
            {getFieldDecorator('email', {
              rules: [
                {
                  required: true,
                  message: 'Please input your email!'
                },
                {
                  type: 'email',
                  message: 'The input is not valid E-mail!',
                },
              ],
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Email"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: 'Please input your Password!' }],
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />,
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('remember', {
              valuePropName: 'checked',
              initialValue: true,
            })(<Checkbox>Remember me</Checkbox>)}
            <a className="login-form-forgot" href="#">
              Forgot password
            </a>
            <Button loading={showLoading} type="primary" htmlType="submit" className="login-form-button">
              Log in
          </Button>
            Or <Link to="/register">register now!</Link>
          </Form.Item>
          {
            showAlert &&
            <Alert
              message="Incorrect email or password!"
              type="success"
              closable
              afterClose={handleAlertClose}
            />
          }
        </Form>
      </div>
    </div>
  )
})
