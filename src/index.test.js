import * as ReactAdminLTE from './index';

it('should have exports', () => {
  expect(typeof ReactAdminLTE).toEqual('object');
});

it('should not do undefined exports', () => {
  Object.keys(ReactAdminLTE).forEach(exportKey =>
    expect(Boolean(ReactAdminLTE[exportKey])).toEqual(true)
  );
});
