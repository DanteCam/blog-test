import { PageHeader,Button,Modal,Form,Input,message} from 'antd';
import { useState} from "react";
import { UserOutlined,LockOutlined } from '@ant-design/icons';
import axios from 'axios';


  const loginLayout = {
      wrapperCol: {
        align:"center"
      },
    };

    const NewUserSuccess = () => {
      message.success('User added correctly');
    };

    const NewUserError = (e) => {
      message.error('Error user not added');
      console.log(e)
    };

const Header=()=> {
    const [modalView, setModalView] = useState(false);
    // const [newUserName, setnewUserName] = useState('');
    // const [newPass, setnewPass] = useState('');

    
    const addNewUser = (newUser) => {
          const newUserSend={"username":newUser.Username,"pass":newUser.Password}
          axios.post('http://localhost:8000//users', newUserSend )
          .then(res => {
              console.log("Added user: "+res.data.username);
              NewUserSuccess()
        }).catch (e=>NewUserError(e)
        )
         setModalView(false)
      };

      const handleCancel = () => {
        setModalView(false);
      };
    

        return (
            <PageHeader
            className="site-page-header">
               <Button onClick={()=>setModalView(true)} className="add-user-button">Add User</Button>
                <Modal title={"Enter a new User"} onCancel={handleCancel} visible={modalView} okText="Create" footer={null} o>

                        <Form onFinish={addNewUser} layout="vertical" size="middle" > 
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
                                  <Button type="ghost" htmlType="submit">Create</Button>
                            </Form.Item>
                            
                    </Form>
                        
                </Modal>
            </PageHeader>
        )
}
export default Header