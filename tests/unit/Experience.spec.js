import { shallowMount } from '@vue/test-utils';
import ExperienceCard from '@/components/ExperienceCard.vue';
describe('ExperienceCard.vue', () => {
    let wrapper;
    let currentData;

    beforeEach(() => {
        currentData = {
            id: 1,
            companyName: 'Test company.',
            jobTitle: 'Test Title.',
            jobDescription: ["Test Desc"],
            jobDesContent: '\u2022 Test Description.',
            startDate: '2023-01-01',
            endDate: '2023-12-31',
            companyLocation: 'Location',
        };
        wrapper = shallowMount(ExperienceCard, {
            props: {
                id: currentData.id,
                companyName: currentData.companyName,
                jobTitle: currentData.jobTitle,
                jobDescription: currentData.jobDescription,
                jobDesContent: currentData.jobDesContent,
                startDate: currentData.startDate,
                endDate: currentData.endDate,
                companyLocation: currentData.companyLocation,
            }
        });
    });

    it('renders Experience details correctly', () => {
        // Extract the Experience details from the component's data
        const { companyName, startDate, endDate, jobTitle } = wrapper.vm.currentData;
        console.log("ALL VALUES : \n\n\n", companyName, startDate, endDate, jobTitle)
        // Compare the extracted values with the expected values
        expect(companyName).toMatch(currentData.companyName);
        expect(startDate).toBe(currentData.startDate);
        expect(endDate).toBe(currentData.endDate);
        expect(jobTitle).toBe(currentData.jobTitle);
    });

    it('emits an update event when data changes', async () => {
        wrapper.vm.updateExperience();
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted().onUpdate).toBeTruthy();
    });

    it('emits a remove event when remove button is clicked', async () => {
        await wrapper.find('el-button').trigger('click');
        expect(wrapper.emitted().onRemove).toBeTruthy();
    });
    it('my test case', () => {
        console.log('This message will be printed in the Jest output');
        const { companyName, startDate, endDate, jobTitle } = wrapper.vm.currentData;
        console.log("\x1b[33m ____ALL VALUES : ", companyName, startDate, endDate, jobTitle, "\x1b[0m");
    });

});

