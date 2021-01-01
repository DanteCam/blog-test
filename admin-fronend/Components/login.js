import { UserOutlined,LockOutlined } from '@ant-design/icons';
import { Input,Typography,Button,Form,message} from 'antd';
import Link from "next/link";
import { useRouter } from 'next/router'

const { Title } = Typography;


const loginLayout = {
  wrapperCol: {
    align:"center"
  },
};

const info = () => {
  message.info('JWT auth pendiente =)');
};

const Login=()=>{

const router = useRouter()

const onFinish=(values)=>{
    console.log(values)
    info()
    router.push('/Dashboard')
}

    return(
            <Form  layout="vertical" size="middle" onFinish={onFinish}> 
                    <Form.Item  {...loginLayout}>
                      <Title level={2}>Welcome</Title>
                    </Form.Item>
                    <Form.Item
                            name="Username"
                            rules={[
                                {
                                  required: true,
                                  message: 'Please enter Username'
                                },
                              ]}>
                            <Input   placeholder="Username" prefix={<UserOutlined />}/>
                    </Form.Item>
                    <Form.Item
                            name="Password"
                            rules={[
                                {
                                  required: true,
                                  message: 'Please enter Password'
                                },
                              ]}>
                            <Input.Password placeholder="Password" prefix={<LockOutlined />}/>
                    </Form.Item>
                    <Form.Item {...loginLayout}>
                          <Button type="ghost" htmlType="submit">Login</Button>
                    </Form.Item>
            </Form>
            
    )

}
export default Login