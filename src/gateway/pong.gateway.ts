import { 
    WebSocketGateway,
     WebSocketServer, 
     SubscribeMessage, 
     ConnectedSocket,
     MessageBody 
} from '@nestjs/websockets/decorators';
import { Server, Socket } from 'socket.io';

@WebSocketGateway({
    cors: {
        origin: '*'
    }
})
export class PongGateway {
    
    @WebSocketServer()
    server: Server;
    
    @SubscribeMessage('chat-message')
    chat(@ConnectedSocket() socket: Socket, @MessageBody() data: any){
        socket.broadcast.emit('chat-message', data);
        console.log(`New message from ${socket.id}`, data);
    }
}