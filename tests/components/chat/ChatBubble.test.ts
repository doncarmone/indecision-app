import { mount } from "@vue/test-utils";
import ChatBubble from '@/components/chat/ChatBubble.vue';

describe('ChatBubble', () => {

    test('renders correctly', () => {
        const message = 'Hello World';
        const wrapper = mount(ChatBubble, {
            props: {
                message: message,
                itsMine: true
            }
        });

        expect(wrapper.find('.bg-blue-200').exists()).toBe(true);
        expect(wrapper.find('.bg-blue-200').exists()).toBeTruthy();
        expect(wrapper.find('.bg-blue-200').text()).toContain(message);
        expect(wrapper.find('.bg-blue-300').exists()).toBeFalsy();
    });

    test('renders recived message correctly with image', () => {
        const message = 'Hello World';
        const wrapper = mount(ChatBubble, {
            props: {
                message: message,
                itsMine: false,
                image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
            }
        });

        expect(wrapper.find('.bg-gray-300').exists()).toBeTruthy();
        expect(wrapper.find('.bg-blue-300').exists()).toBeFalsy();
        expect(wrapper.find('img').exists()).toBeTruthy();
        expect(wrapper.find('.bg-gray-300').text()).toContain(message);
    });
});