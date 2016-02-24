import Ember from 'ember';

export default Ember.Component.extend({
  // Inputs
  model: null,
  nameLabel: 'Name',
  namePlaceholder: 'Name',
  nameDisabled: false,
  descriptionLabel: 'Description',
  descriptionPlaceholder: 'Description',
  descriptionDisabled: false,

  tagName: '',
});
