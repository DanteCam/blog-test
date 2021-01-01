import Header from '../Components/Header'
import PostEditor from '../Components/PostEditor'
import PostViewer from '../Components/PostViewer'
import { Row, Col } from 'antd';
import axios from 'axios';


const Dashboard=(props)=>{
  const users=props.users
  const posts=props.posts
    return(
        <div>
            <Header/>
            <Row>
              <PostEditor  users={users}/>
              <PostViewer posts={posts}/>
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
  // axios.get('http://localhost:8000/users').then(users => {
  //       axios.get('http://localhost:8000/posts').then(posts => {
  //         return{
  //               users:users.data,
  //               posts:posts.data
  //             }
  //          })
  //       .catch (e=>console.log(`Unable to fetch data: ${e}`))
  //       })
  //   .catch (e=>console.log(`Unable to fetch data: ${e}`))
  //   return{
  //     users:'',
  //     posts:''
  //   }
  // };


export default Dashboard