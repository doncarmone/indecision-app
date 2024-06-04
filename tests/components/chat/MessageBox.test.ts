import MessageBox from '@/components/chat/MessageBox.vue';
import { mount } from '@vue/test-utils';
describe('ChatBubble', () => {
    const wrapper = mount(MessageBox);

    test('should first', () => {

        expect(wrapper.html()).toMatchSnapshot();
        expect(wrapper.find('input[type=text]').exists()).toBe(true);
        expect(wrapper.find('button').exists()).toBe(true);
        expect(wrapper.find('button svg').exists()).toBe(true);
    })

    test('emits sendMessage event when button is clicked', async () => {
        const message = "Hello";
        await wrapper.find('input[type=text]').setValue(message);
        await wrapper.find('button').trigger('click');
        // console.log(wrapper.emitted());
        expect(wrapper.emitted('sendMessage')).toBeTruthy();
        expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
        expect(wrapper.vm.message).toBe('');
    })

    test('emits sendMessage event when the key press enter event is trigger', async () => {
        const message = "Hello";
        const input = wrapper.find('input[type=text]');
        await input.setValue(message);

        await input.trigger('keypress.enter');

        // console.log(wrapper.emitted());
        expect(wrapper.emitted('sendMessage')).toBeTruthy();
        expect(wrapper.emitted('sendMessage')?.[0]).toEqual([message]);
        expect(wrapper.vm.message).toBe('');
    })

    test('emits sendMessage event when the key press enter event is trigger', async () => {
        const wrapper = mount(MessageBox);
        const input = wrapper.find('input[type=text]');

        await input.trigger('keypress.enter');
        await wrapper.find('button').trigger('click');

        // console.log(wrapper.emitted());
        expect(wrapper.emitted('sendMessage')).toBeFalsy();
    })
});