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

    handleDisconnect(client) {
        console.log(client.id + ' desconectado...');
        client.broadcast.emit('users', {
            user: client.id,
            action: 'disconnected'
        });
    }

    @SubscribeMessage('chat')
    chat(client: any, data: any) {
        console.log(data);
        client.broadcast.emit('chat', data);
        return data;
    }

    @SubscribeMessage('users')
    users(client: any, data: any) {
        console.log(data);
        client.broadcast.emit('chat', data);
        return data;
    }
}