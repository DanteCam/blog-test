import { useState,useEffect } from "react";
import { Typography,Col, List,Modal,Card} from 'antd';
import ReactHtmlParser from 'react-html-parser'; 
import { useRouter } from 'next/router'


const { Text, Title } = Typography;

const PostViewer=(props)=>{
    const [posts, setPosts] = useState([]);
    const [modalView, setModalView] = useState(false);
    const [selectedPost, setSelectedPost] = useState([{
        dateTime: '',
        user: '',
        post: '',
        id: ''
      }]);

    useEffect(() => {
        setPosts(props.posts)
      },[]);
    
    const showModal = (post) => {
        setSelectedPost(post)
        setModalView(true);
      };

    const handleOk = () => {
        setModalView(false);
    };

    const handleCancel = () => {
        setModalView(false);
      };
    const router = useRouter()

    return(
        <Col span={11} >
            <br/>
             <List
                header={<Title level={5}>Blog Posts</Title>}
                bordered
                dataSource={posts}
                renderItem={item => (
                       <List.Item >
                        {ReactHtmlParser(item.post)}
                          <div>
                            <a onClick={()=>showModal(item)}>Show</a>
                            <span></span>
                            <a onClick={()=>router.push(`/post/[id]`, `/post/${item.id}`)}>&nbsp;&nbsp;&nbsp;&nbsp;Edit</a>
                          </div>
                        </List.Item> 
                )}/>
                <Modal title={"Post id: "+selectedPost.id} footer={null} visible={modalView} onOk={handleOk} onCancel={handleCancel}>
                    {ReactHtmlParser(selectedPost.post)}
                    <Card size="small" title={null} classname="postViewer-data-card" s>
                      <Text strong>Created by: </Text>
                      {selectedPost.user}
                      <br/>
                      <Text strong>On: </Text>
                      {selectedPost.dateTime}
                    </Card>
                </Modal>
        </Col>
    )
}
export default PostViewer