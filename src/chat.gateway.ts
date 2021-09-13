import { 
    WebSocketGateway, 
    WebSocketServer, 
    OnGatewayConnection, 
    OnGatewayDisconnect,
    SubscribeMessage
} from '@nestjs/websockets'

@WebSocketGateway()
export class ChatGateway implements OnGatewayConnection, OnGatewayDisconnect {
    @WebSocketServer()

    handleConnection(client) {
        console.log(client.id + ' conectado...');
        client.broadcast.emit('users', {
            user: client.id,
            action: 'connected'
        });
    }

    handleDisconnect(client) {}

    @SubscribeMessage('chat')
    chat(client: any, data: any) {}

    @SubscribeMessage('users')
    users(client: any, data: any) {}
}