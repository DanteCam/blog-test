import { useState,useEffect } from "react";
import { Typography, DatePicker, Select, Button, Form, Row, Col, message} from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import axios from 'axios';

const { Option } = Select;
const { Title } = Typography;

const layout = {
    wrapperCol: {
        align: "center",
        span: 22,
        offset: 1
    },
};


const NewUserSuccess = () => {
    message.success('Blog entry added correctly');
  };

  const NewUserError = (e) => {
    message.error('Error blog entry not added');
    console.log(e)
  };

const PostEditor = (props) => {
    // Fetched Users
    const [users, setUsers] = useState([]);

    // Form data
    const [user, setUser] = useState('');
    const [entry, setEntry] = useState('');
    const [dateTime, setDateTime] = useState('');

   useEffect(() => {
        setUsers(props.users)
      },[]);

    const getDateTime = (value,dateString) => {
        setDateTime(dateString)
    }
    const getUser = (user) => {
        setUser(user)
    }
    const getEntry = (entry) => {
        setEntry(entry)
    }

    const onFinish = () => {
        const blog={"dateTime":dateTime, "user":user, "post":entry}
        axios.post('http://localhost:8000//posts', blog )
        .then(() => {
            NewUserSuccess();
      }).catch (e=>NewUserError(e))
    }
    
    
    return (
        <Col span={12}>
            <Form onFinish={onFinish}>
                <Form.Item {...layout} >
                    <Title level={2}>Dashboard</Title>
                </Form.Item >

                <Row>

                    <Col offset={1} span={11}>
                        <Form.Item
                            name="Date"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select date'
                                },]}>
                            <DatePicker onChange={getDateTime} className="date-time-picker-entry" placeholder="Select a date" />
                        </Form.Item>
                    </Col>

                    <Col offset={5}  span={6}>
                        <Form.Item

                            name="User"
                            rules={[
                                {
                                    required: true,

                                },]}>
                            <Select className="user-picker-entry" placeholder="select a user" onSelect={getUser}  >
                                {users.map((user) => {
                                    return <Option key={user.id} value={user.username}>{user.username}</Option>
                                })}
                            </Select>
                        </Form.Item>
                    </Col>

                </Row>

                <Form.Item
                    {...layout}
                    name="Entry"
                    rules={[
                        {
                            required: true,
                            message: 'Please fill the entry'
                        },]}>
                    <Editor
                        apiKey='3k7ugxgd1z424socmta61z4i1h77zmmlj9ki4s5lqt13kfo3'
                        init={{
                            height: 200,
                            menubar: false,
                            plugins: [
                                'advlist autolink lists link image charmap print preview anchor',
                                'searchreplace visualblocks code fullscreen',
                                'insertdatetime media table paste code help wordcount'
                            ],
                            toolbar:
                                'formatselect | bold italic backcolor | \
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat '
                        }}
                        onEditorChange={getEntry} />
                </Form.Item>

                <Form.Item {...layout} >
                    <Button className="post-button-entry" type="ghost" htmlType="submit">Post</Button>
                </Form.Item>
            </Form>
        </Col>
    )
}
export default PostEditor