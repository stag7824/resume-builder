import { shallowMount } from '@vue/test-utils';
import CertificateCard from '@/components/CertificateCard.vue';

describe('CertificateCard.vue', () => {
  let wrapper;
  let currentData;

  beforeEach(() => {
    currentData = {
      id: '1',
      certName: 'Test Certificate',
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      link: 'http://examples.com',
      certDescription: 'Test Description',
      certDesContent: 'Test Content'
    };

    wrapper = shallowMount(CertificateCard, {
      props: {
        id: currentData.id,
        certName: currentData.certName,
        startDate: currentData.startDate,
        endDate: currentData.endDate,
        link: currentData.link,
        certDescription: currentData.certDescription,
        certDesContent: currentData.certDesContent,
      }
    });
    // 
  });

  it('renders certificate details correctly', () => {
    // Extract the certificate details from the component's data
    const { certName, startDate, endDate, link } = wrapper.vm.currentData;
    console.log("ALL VALUES : \n\n\n", certName, startDate, endDate, link)

    // Compare the extracted values with the expected values
    expect(certName).toMatch(currentData.certName);
    expect(startDate).toBe(currentData.startDate);
    expect(endDate).toBe(currentData.endDate);
    expect(link).toBe(currentData.link);
  });

  it('emits an update event when data changes', async () => {
    wrapper.vm.updateCertificate();
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().onUpdate).toBeTruthy();
  });

  it('emits a remove event when remove button is clicked', async () => {
    await wrapper.find('el-button').trigger('click');
    expect(wrapper.emitted().onRemove).toBeTruthy();
  });
  it('my test case', () => {
    console.log('This message will be printed in the Jest output');
    // ... your test assertions
    
    const { certName, startDate, endDate, link } = wrapper.vm.currentData;
    console.log("\x1b[33m ____ALL VALUES : ", certName, startDate, endDate, link, "\x1b[0m");
  });

  

  // it('processes description with bullet points correctly', () => {
  //   // Simulate new line with bullet point
  //   const newData = 'Some content\n• New line with bullet';
  //   wrapper.vm.currentData.certDesContent = newData;
  //   wrapper.vm.handleInput({ key: 'Enter' });
  //   expect(wrapper.vm.currentData.certDescription).toContßain('• New line with bullet');
  //   expect(wrapper.vm.currentData.certDescription).not.toContain('~~~'); // Verify placeholder replacement
  
  //   // Simulate first character with bullet
  //   wrapper.vm.currentData.certDesContent = '';
  //   wrapper.vm.handleInput({ key: 'a' });
  //   expect(wrapper.vm.currentData.certDescription[0]).toBe('•');
  // });
  
});

