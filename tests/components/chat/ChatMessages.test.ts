import { mount } from "@vue/test-utils";
import ChatMessages from '@/components/chat/ChatMessages.vue';
import type { ChatMessage } from "@/interfaces/chat-messages.interface";

const messages: ChatMessage[] = [
    {
        id: 1,
        message: "Hello",
        itsMine: true,
    },
    {
        id: 2,
        message: "World",
        itsMine: false,
        image: "https://via.placeholder.com/150",
    },
];

describe('ChatMessages', () => {

    const wrapper = mount(ChatMessages, {
        props: {
            messages: messages
        }
    });

    test('should render corretly ', () => {

        const chatBubbles = wrapper.findAllComponents({ name: 'ChatBubble' });

        expect(chatBubbles.length).toBe(messages.length);
    })

    test('Scroll down to the botton after mesages update', async () => {
        const scrollMockSpy = vi.fn();

        const chatRef = wrapper.vm.$refs.chatRef as HTMLElement;

        chatRef.scrollTo = scrollMockSpy;

        await wrapper.setProps({
            messages: [...messages, {
                id: 3,
                message: "New Message",
                itsMine: true,
            }]
        });

        await new Promise((resolve) => setTimeout(resolve, 150));

        expect(scrollMockSpy).toHaveBeenCalled(1);
        expect(scrollMockSpy).toHaveBeenCalledWith({
            behavior: 'smooth',
            top: expect.any(Number),
        });
    })
})