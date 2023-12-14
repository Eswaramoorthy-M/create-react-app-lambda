import { PrettyChatWindow} from 'react-chat-engine-pretty'
const ChatsPage=(props)=>{
   
    return <div style={{height:'100vh'}}>
       <PrettyChatWindow 
       projectId='1ce6e9f6-273a-44d0-aa09-c58eea9ed3ad'
       username={props.user.username}
       secret={props.user.secret}
       style={{height:'100%'}}
       />

    </div>
}
export default ChatsPage