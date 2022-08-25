import { newSpecPage } from '@stencil/core/testing';
import { ChildElement } from '../child-element';

describe('child-element', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ChildElement],
      html: `<child-element></child-element>`,
    });
    expect(page.root).toEqualHtml(`
      <child-element>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </child-element>
    `);
  });
});
