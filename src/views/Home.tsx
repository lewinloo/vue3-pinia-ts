import { NButton } from 'naive-ui';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',
  setup() {
    return () => {
      return (
        <main>
          <NButton>123</NButton>
        </main>
      );
    };
  }
});
