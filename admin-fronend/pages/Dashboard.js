import Header from '../Components/Header'
import PostEditor from '../Components/PostEditor'
import PostViewer from '../Components/PostViewer'
import { Row, Col,Typography } from 'antd';
import axios from 'axios';

const { Title } = Typography;

const Dashboard=(props)=>{
  const users=props.users
  const posts=props.posts
    return(
        <div>
            <Header/>
            <br/>
            <Row justify="center">
                <Title level={2}>Dashboard</Title>
            </Row>
            <Row>
            <Col span={12}>
              <br/>
              <PostEditor postToEdit={{}} users={users}/>
            </Col>
              <PostViewer users={users} posts={posts}/>
            </Row>
        </div>
    )
}

Dashboard.getInitialProps = async (ctx) => {
  const users=await axios.get('http://localhost:8000/users')
  const posts=await axios.get('http://localhost:8000/posts')
    return{
      users:users.data,
      posts:posts.data
    }
}
  


export default Dashboard