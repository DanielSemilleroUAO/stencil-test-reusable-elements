import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'element-base',
  styleUrl: 'element-base.css',
  shadow: true,
})
export class ElementBase {

  render() {
    return (
      <Host>
        <slot name='header'></slot>
        <div>Soy un elemento reusable</div>
        <slot name='content'></slot>
        <slot name='footer'></slot>
      </Host>
    );
  }

}
