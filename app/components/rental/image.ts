import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class RentalImage extends Component {
  @tracked isLarge = false;
  @action toggleSize() {
    this.isLarge = !this.isLarge;
  }
}
