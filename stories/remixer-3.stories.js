import { html } from 'lit';
import '../src/remixer-3.js';

export default {
  title: 'Remixer3',
  component: 'remixer-3',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <remixer-3
      style="--remixer-3-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </remixer-3>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
