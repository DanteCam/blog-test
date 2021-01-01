import { useState,useEffect } from "react";
import { Typography,Col, List,Modal } from 'antd';
const { Title } = Typography;
import ReactHtmlParser from 'react-html-parser'; 

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

    return(
        <Col span={11} >
            <br/><br/><br/>
             <List
                header={<Title level={5}>Blog Posts</Title>}
                bordered
                dataSource={posts}
                renderItem={item => (
                       <List.Item >
                        {ReactHtmlParser(item.post)}
                        <a onClick={()=>showModal(item)}>Mostrar</a>
                        </List.Item> 
                )}/>
                <Modal title={"Post id: "+selectedPost.id} visible={modalView} onOk={handleOk} onCancel={handleCancel}>
                    {ReactHtmlParser(selectedPost.post)}
                </Modal>
        </Col>
    )
}
export default PostViewer