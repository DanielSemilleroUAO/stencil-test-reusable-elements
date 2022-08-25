import { newSpecPage } from '@stencil/core/testing';
import { ElementBase } from '../element-base';

describe('element-base', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ElementBase],
      html: `<element-base></element-base>`,
    });
    expect(page.root).toEqualHtml(`
      <element-base>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </element-base>
    `);
  });
});
