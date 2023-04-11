import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/remixer-3.js';

describe('Remixer3', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<remixer-3></remixer-3>`);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
