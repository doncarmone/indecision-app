import { mount } from "@vue/test-utils";
import IndecisionView from "@/views/IndecisionView.vue";
import ChatMessages from '@/components/chat/ChatMessages.vue';
import MessageBox from '@/components/chat/MessageBox.vue';


const mockChatMessages = {
    template: '<div data-testid="mock-messages">Mock ChatMessages</div>',

}
describe('Test on IndecisionView', () => {

    test('should render the component correctly', () => {
        const wrapper = mount(IndecisionView);

        expect(wrapper.html()).toMatchSnapshot();

        expect(wrapper.findComponent(ChatMessages).exists()).toBe(true);
        expect(wrapper.findComponent(MessageBox).exists()).toBe(true);
    });

    test('should send a message', async () => {
        const wrapper = mount(IndecisionView, {
            global: {
                stubs: {
                    ChatMessages: mockChatMessages
                }
            }
        });
        const messageBoxComponent = wrapper.findComponent(MessageBox);

        messageBoxComponent.vm.$emit('sendMessage', 'Hello World');

        await new Promise(resolve => setTimeout(resolve, 150));

        expect(wrapper.html()).toMatchSnapshot();

    })
})