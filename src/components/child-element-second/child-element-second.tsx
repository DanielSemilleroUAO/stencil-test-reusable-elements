import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'child-element-second',
  styleUrl: 'child-element-second.css',
  shadow: true,
})
export class ChildElementSecond {
  render() {
    return (
      <Host>
        <h1>Soy un hijo, el segundo</h1>
        <element-base>
          <div class="header" slot="header">
            Soy el header del segundo
          </div>
          <div class="content" slot="content">
            Tengo contenido intermedio
          </div>
          <div class="footer" slot="footer">
            Soy el footer del segundo
          </div>
        </element-base>
      </Host>
    );
  }
}
