import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'child-element',
  styleUrl: 'child-element.css',
  shadow: true,
})
export class ChildElement {
  render() {
    return (
      <Host>
        <h1>Soy un hijo, el primero</h1>
        <element-base>
          <div class="header" slot="header">
            Soy el header
          </div>
          <div class="footer" slot="footer">
            Soy el footer
          </div>
        </element-base>
      </Host>
    );
  }
}
