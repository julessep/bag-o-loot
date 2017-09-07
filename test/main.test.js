const { assert, assert: { equal, deepEqual, notEqual, isFunction, isObject } } = require('chai');
const { 
  addChild, 
  listChildren, 
  listToys, 
  removeChild, 
  deliver 
} = require('../js/lootbag');

describe('lootbag', () => {
  describe('add child', () => {
    it('should exist', () => {
      isFunction(addChild);
    });
  });

  describe('list children', () => {
    it('should exist', () => {
      isFunction(listChildren);
    });
  });

  describe('list toys', () => {
    it('should exist', () => {
      isFunction(listToys);
    });
  });

  describe('remove child', () => {
    it('should exist', () => {
      isFunction(removeChild);
    });
  });

  describe('deliver status', () => {
    it('should exist', () => {
      isFunction(deliver);
    });
  });

});
