import { newSpecPage } from '@stencil/core/testing';
import { ChildElementSecond } from '../child-element-second';

describe('child-element-second', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ChildElementSecond],
      html: `<child-element-second></child-element-second>`,
    });
    expect(page.root).toEqualHtml(`
      <child-element-second>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </child-element-second>
    `);
  });
});
