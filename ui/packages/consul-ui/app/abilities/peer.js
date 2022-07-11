import BaseAbility from 'consul-ui/abilities/base';

export default class PeerAbility extends BaseAbility {
  resource = 'operator';
  segmented = false;

  get isLinkable() {
    return this.canDelete;
  }
  get canDelete() {
    // TODO: Need to confirm these states
    return ![
      'DELETING',
      'TERMINATED',
    ].includes(this.item.State);
  }

}
