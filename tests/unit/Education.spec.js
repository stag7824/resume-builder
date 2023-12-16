import { shallowMount } from '@vue/test-utils';
import EducationCard from '@/components/EducationCard.vue';
describe('EducationCard.vue', () => {
    let wrapper;
    let currentData;
    beforeEach(() => {
        currentData = {
            id: '1',
            schoolName: 'Test School',
            degree: 'Test Degree',
            edDescription: "Test Description",
            edDesContent: '\u2022 Test Content',
            startDate: '2023-01-01',
            endDate: '2023-12-31',
            schoolLocation: 'Test Location',
        };
        wrapper = shallowMount(EducationCard, {
            props: {
                id: currentData.id,
                schoolName: currentData.schoolName,
                startDate: currentData.startDate,
                endDate: currentData.endDate,
                degree: currentData.degree,
                schoolLocation: currentData.schoolLocation,
                edDescription: currentData.edDescription,
                edDesContent: currentData.edDesContent,
            }
        });
    });

    it('renders Education details correctly', () => {
        // Extract the Education details from the component's data
        const { schoolName, startDate, endDate, degree, schoolLocation } = wrapper.vm.currentData;

        // Compare the extracted values with the expected values
        expect(schoolName).toMatch(currentData.schoolName);
        expect(startDate).toBe(currentData.startDate);
        expect(endDate).toBe(currentData.endDate);
        expect(degree).toBe(currentData.degree);
        expect(schoolLocation).toBe(currentData.schoolLocation);
    });

    it('emits an update event when data changes', async () => {
        wrapper.vm.updateEducation();
        await wrapper.vm.$nextTick();
        expect(wrapper.emitted().onUpdate).toBeTruthy();
    });

    it('emits a remove event when remove button is clicked', async () => {
        await wrapper.find('el-button').trigger('click');
        expect(wrapper.emitted().onRemove).toBeTruthy();
    });
    it('my test case', () => {
        console.log('This message will be printed in the Jest output');

        const { schoolName, startDate, endDate, degree, schoolLocation } = wrapper.vm.currentData;
        console.log("\x1b[33m ____ALL VALUES : ", schoolName, startDate, endDate, degree, schoolLocation, "\x1b[0m");
    });
    // Additional tests can be written for handleInput method and other functionalities.
    it('processes description Array correctly', async () => {
        // Simulate new line with bullet point
        const newData = 'Some content\nNew line with bullet';
        wrapper.vm.currentData.edDesContent = newData;
        wrapper.vm.handleInput({ key: 'Enter' });
        expect(wrapper.vm.currentData.edDescription).toEqual(['Some content', 'New line with bullet']);
        expect(wrapper.vm.currentData.edDescription).not.toContain('~~~'); // Verify placeholder replacement
        // Simulate first character with bullet
        // await wrapper.vm.$nextTick();

    });


    //_________________
    it('should format a valid date string correctly', () => {
        const dateStr = '2023-10-25';
        const expectedFormat = 'October 2023';
        const formattedDate = wrapper.vm.formatDate(dateStr)//EducationCard.methods.formatDate(dateStr);
        expect(formattedDate).toBe(expectedFormat);
    });

    it('should return an \'Invalid date\' string for an invalid date string', () => {
        const invalidDateStr = 'abc';
        const formattedDate = EducationCard.methods.formatDate(invalidDateStr);
        expect(formattedDate).toBe('Invalid date');
    });
});

