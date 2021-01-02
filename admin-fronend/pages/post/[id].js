import { useState,useEffect } from "react";
import { Row, Col,Typography } from 'antd';
import PostEditor from "../../Components/PostEditor"
import axios from 'axios';
import { useRouter } from "next/router";


const { Title } = Typography;

const EditPost=(props)=>{
    const router = useRouter();
    const { id } = router.query;

    const users=props.users
    const post=props.post

    return (
        <div>
            <br/>
            <Row justify="center">
                <Title level={2}>Edit Post</Title>
            </Row>
            <Row justify="center">
                <Col span={12}>
                    <PostEditor editing={true} postToEdit={post} users={users}/>
                </Col>
            </Row>
        </div>

    )
}
EditPost.getInitialProps = async (ctx) => {
    const users=await axios.get('http://localhost:8000/users')
    const post = await axios.get('http://localhost:8000/posts/'+ctx.query.id.toString());

      return{
        users:users.data,
        post:post.data
      }
    }
export default EditPost