import {FormControl, FormGroup} from '@angular/forms';
import {AppsBulkImportValidator} from './apps-bulk-import.validator';

/**
 * Test Applications Bulk Import Validator functions {AppsBulkImportValidator}.
 *
 * @author Damien Vitrac
 */
describe('AppsBulkImportValidator', () => {

  describe('uri', () => {
    it('invalid', () => {
      [
        ' ',
        'bb',
        ' https://foo.ly/foo',
        'b b'
      ].forEach((mock) => {
        const uri: FormControl = new FormControl(mock);
        expect(AppsBulkImportValidator.uri(uri).invalid).toBeTruthy();
      });
    });
    it('valid', () => {
      [
        'https://foo.ly/foo',
        'https://foo.bar:bar.foo-foo:bar-bar'
      ].forEach((mock) => {
        const uri: FormControl = new FormControl(mock);
        expect(AppsBulkImportValidator.uri(uri)).toBeNull();
      });
    });
  });

  describe('properties', () => {
    it('invalid', () => {
      [
        'foo',
        'foo='
      ].forEach((mock) => {
        const uri: FormControl = new FormControl(mock);
        expect(AppsBulkImportValidator.properties(uri).invalid).toBeTruthy();
      });
    });
    it('valid', () => {
      [
        'foo=https://foo.ly/foo',
        'bar=https://foo.bar:bar.foo-foo:bar-bar'
      ].forEach((mock) => {
        const uri: FormControl = new FormControl(mock);
        expect(AppsBulkImportValidator.properties(uri)).toBeNull();
      });
    });
  });

});
