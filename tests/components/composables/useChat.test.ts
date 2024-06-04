import { useChat } from "@/composables/useChat";

describe('useChat tests', () => {

    test('add message correctly when onMessage is called', async () => {
        // Arrange
        const text = 'Hello World';
        const { messages, onNewMessage } = useChat();
        // Act
        await onNewMessage(text);
        // Assert
        expect(messages.value.length).toBe(1);
        expect(messages.value[0].itsMine).toBe(true);
        expect(messages.value[0]).toEqual({
            id: expect.any(Number),
            message: text,
            itsMine: true
        });
    })


    test('do nothing if empty messsage is send', async () => {
        // Arrange
        const text = '';
        const { messages, onNewMessage } = useChat();
        // Act
        await onNewMessage(text);
        // Assert
        expect(messages.value.length).toBe(0);
    })

    test('add message correctly when onMessage is called with question', async () => {
        // Arrange
        const text = '?';
        const { messages, onNewMessage } = useChat();

        // Act
        await onNewMessage(text);

        await new Promise((resolve) => setTimeout(resolve, 1500));

        // Assert

        const [myMessage, herMessage] = messages.value;

        expect(messages.value.length).toBe(2);
        expect(herMessage.itsMine).toBe(false);
        expect(herMessage).toEqual({
            id: expect.any(Number),
            image: expect.any(String),
            message: expect.any(String),
            itsMine: false,
        });

        expect(myMessage).toEqual({
            id: expect.any(Number),
            itsMine: true,
            message: text,
        });
    });

    test('mock response - fetch api', async () => {
        const mockResponse = { answer: 'yes', image: 'example.gif' };

        (window as any).fetch = vi.fn(async () => ({
            json: async () => mockResponse,
        }));

        const text = '¿Quieres café?';
        const { messages, onNewMessage } = useChat();

        await onNewMessage(text);

        await new Promise((r) => setTimeout(r, 1600));
        const [, herMessage] = messages.value;

        expect(herMessage).toEqual({
            id: expect.any(Number),
            image: mockResponse.image,
            message: mockResponse.answer,
            itsMine: false,
        });
    });
})