import { describe, test } from 'vitest';
import { mount } from '@vue/test-utils'
import MyCounter from '@/components/MyCounter.vue';

describe('<MyCounter/>', () => {



    test('should render the component', () => {
        //Arrange
        const wrapper = mount(MyCounter, { props: { value: 5 } });
        //Act

        //Assert
        expect(wrapper.html()).toMatchSnapshot();
    });

    test('should render correctly', async () => {
        //Arrange
        const wrapper = mount(MyCounter, { props: { value: 10 } });
        const [counterLabel, squareLabel] = wrapper.findAll('h3');


        //Act

        //Assert
        expect(wrapper.find('h3').text()).toContain('10');
        expect(wrapper.find('[data-testid="square-label"]').text()).toContain('100');

        expect(counterLabel.text()).toContain('10');
        expect(squareLabel.text()).toContain('100');
    }
    );

    test('increments the counter when +1 button is clicked', async () => {
        //Arrange
        const value = 5;
        const wrapper = mount(MyCounter, { props: { value } });
        const [counterLabel, squareLabel] = wrapper.findAll('h3');

        const btnIncrement = wrapper.find('button');

        await btnIncrement.trigger('click');

        expect(counterLabel.text()).toContain(`Counter: ${value + 1}`);
        expect(squareLabel.text()).toContain(`Square: ${(value + 1) * (value + 1)}`);
    });

    test('decrements the counter when -1 button is clicked', async () => {
        //Arrange
        const value = 5;
        const wrapper = mount(MyCounter, { props: { value } });
        const [counterLabel, squareLabel] = wrapper.findAll('h3');

        const btnDecrement = wrapper.find(`[data-testid="btn-decrement"]`);

        await btnDecrement.trigger('click');
        await btnDecrement.trigger('click');

        expect(counterLabel.text()).toContain(`Counter: ${value - 2}`);
        expect(squareLabel.text()).toContain(`Square: ${(value - 2) * (value - 2)}`);
    });
});